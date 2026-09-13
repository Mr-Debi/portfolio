import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function Earth() {
  const earthRef = useRef(null);

  useEffect(() => {
    const container = earthRef.current;

    if (!container) return;

    // -----------------------------------
    // SCENE
    // -----------------------------------
    const scene = new THREE.Scene();

    // -----------------------------------
    // CAMERA
    // -----------------------------------
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );

    camera.position.set(0, 0, 3.2);

    // -----------------------------------
    // RENDERER
    // -----------------------------------
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.58;

    container.appendChild(renderer.domElement);

    // -----------------------------------
    // LIGHT
    // -----------------------------------
    scene.add(new THREE.AmbientLight(0x23456a, 0.18));

    const sun = new THREE.DirectionalLight(0x8ab8ff, 1.2);

    sun.position.set(3, 1, 3);

    scene.add(sun);

    // -----------------------------------
    // TEXTURES
    // -----------------------------------
    const loader = new THREE.TextureLoader();

    const dayTexture = loader.load(
      "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg",
    );

    const nightTexture = loader.load(
      "https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/earth_lights_2048.png",
    );

    dayTexture.colorSpace = THREE.SRGBColorSpace;
    nightTexture.colorSpace = THREE.SRGBColorSpace;

    // -----------------------------------
    // SUN DIRECTION
    // -----------------------------------
    const sunDirection = new THREE.Vector3(1, 0.25, 1).normalize();

    // -----------------------------------
    // EARTH SHADER
    // -----------------------------------
    const earthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        dayMap: {
          value: dayTexture,
        },

        nightMap: {
          value: nightTexture,
        },

        sunDir: {
          value: sunDirection,
        },
      },

      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {

          vUv = uv;

          vNormal = normalize(
            normalMatrix * normal
          );

          gl_Position =
            projectionMatrix *
            modelViewMatrix *
            vec4(position, 1.0);
        }
      `,

      fragmentShader: `
        uniform sampler2D dayMap;
        uniform sampler2D nightMap;
        uniform vec3 sunDir;

        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {

          vec3 day =
            texture2D(dayMap, vUv).rgb;

          vec3 night =
            texture2D(nightMap, vUv).rgb;

          float light =
            dot(
              normalize(vNormal),
              normalize(sunDir)
            );

          float dayAmount =
            smoothstep(
              -0.18,
              0.28,
              light
            );

          day *= 2.15;

          night =
            pow(
              night,
              vec3(1.15)
            ) * 0.55;

          vec3 color =
            mix(
              night,
              day,
              dayAmount
            );

          color =
            pow(
              color,
              vec3(0.82)
            );

          gl_FragColor =
            vec4(color, 1.0);
        }
      `,
    });

    // -----------------------------------
    // EARTH
    // -----------------------------------
    // 10% larger than the original radius
    const EARTH_RADIUS = 1.1;

    const earthGeometry = new THREE.SphereGeometry(EARTH_RADIUS, 128, 128);

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);

    earth.rotation.y = -2.9;

    scene.add(earth);

    // -----------------------------------
    // LATITUDE / LONGITUDE
    // -----------------------------------
    function latLonToVector3(lat, lon, radius) {
      const phi = (90.5 - lat) * (Math.PI / 180);

      const theta = (lon + 12.5) * (Math.PI / 180);

      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),

        radius * Math.cos(phi),

        radius * Math.sin(phi) * Math.sin(theta),
      );
    }

    // -----------------------------------
    // LOCATION
    // -----------------------------------
    // Cuttack, Odisha
    const latitude = 20.4625;
    const longitude = 85.8828;

    // -----------------------------------
    // PURPLE LOCATION DOT
    // -----------------------------------
    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.022, 16, 16),
      new THREE.MeshBasicMaterial({
        color: 0xb600ff,
        transparent: true,
        opacity: 1,
      }),
    );

    // Put marker slightly above Earth surface
    marker.position.copy(
      latLonToVector3(latitude, longitude, EARTH_RADIUS + 0.025),
    );

    // -----------------------------------
    // GLOW AROUND MARKER
    // -----------------------------------
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0xd84dff,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
      }),
    );

    glow.position.copy(marker.position);

    // -----------------------------------
    // MARKER GROUP
    // -----------------------------------
    const markerGroup = new THREE.Group();

    markerGroup.add(marker);
    markerGroup.add(glow);

    scene.add(markerGroup);

    // -----------------------------------
    // ATMOSPHERE
    // -----------------------------------
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: {
          value: new THREE.Color(0xfffff),
        },
      },

      vertexShader: `
          varying vec3 vNormal;

          void main() {

            vNormal =
              normalize(
                normalMatrix * normal
              );

            gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(position, 1.0);
          }
        `,

      fragmentShader: `
          uniform vec3 glowColor;

          varying vec3 vNormal;

          void main() {

            float rim =
              1.0 -
              max(
                dot(
                  normalize(vNormal),
                  vec3(0.0, 0.0, 1.0)
                ),
                0.0
              );

            float glow =
              pow(rim, 3.5);

            gl_FragColor =
              vec4(
                glowColor,
                glow * 0.22
              );
          }
        `,

      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(EARTH_RADIUS * 1.048, 128, 128),
      atmosphereMaterial,
    );

    atmosphere.rotation.y = -2.6;

    scene.add(atmosphere);

    // -----------------------------------
    // CONTROLS
    // -----------------------------------
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enablePan = false;
    controls.enableDamping = true;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.25;

    controls.minDistance = 1.8;
    controls.maxDistance = 5;

    controls.minPolarAngle = 0.4;
    controls.maxPolarAngle = Math.PI - 0.4;

    // -----------------------------------
    // ANIMATION
    // -----------------------------------
    let animationId;

    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      controls.update();

      // -----------------------------------
      // BLINKING PURPLE LOCATION DOT
      // -----------------------------------
      const time = clock.getElapsedTime();

      // Smooth pulse between 0 and 1
      const pulse = (Math.sin(time * 4.0) + 1) / 2;

      // Marker brightness
      marker.material.opacity = 0.45 + pulse * 0.55;

      // Glow expands/contracts
      const glowScale = 0.75 + pulse * 0.65;

      glow.scale.set(glowScale, glowScale, glowScale);

      // Glow transparency
      glow.material.opacity = 0.1 + pulse * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // -----------------------------------
    // RESIZE
    // -----------------------------------
    const handleResize = () => {
      const width = container.clientWidth;

      const height = container.clientHeight;

      if (!width || !height) return;

      camera.aspect = width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // -----------------------------------
    // CLEANUP
    // -----------------------------------
    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("resize", handleResize);

      controls.dispose();

      earthGeometry.dispose();
      earthMaterial.dispose();

      marker.geometry.dispose();
      marker.material.dispose();

      glow.geometry.dispose();
      glow.material.dispose();

      atmosphere.geometry.dispose();
      atmosphereMaterial.dispose();

      dayTexture.dispose();
      nightTexture.dispose();

      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={earthRef}
      className="w-full h-full"
      style={{
        minHeight: "350px",
      }}
    />
  );
}

export default Earth;
