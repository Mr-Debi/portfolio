import React, { useEffect, useRef } from "react";

const Octopus = ({ isDark = true }) => {
  const canvasRef = useRef(null);
  const isDarkRef = useRef(isDark);

  // Keep the latest theme available to the animation loop without
  // recreating the canvas/animation whenever the theme changes.
  isDarkRef.current = isDark;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let time = 0;
    let w = 0;
    let h = 0;

    const points = [];
    const mouse = { x: 0, y: 0 };
    const headPos = { x: 0, y: 0 };
    const ease = 0.08;

    // Night = cool blue. Day = warm orange.
    const theme = {
      dark: {
        headLight: { r: 103, g: 179, b: 255 },
        headDark: { r: 10, g: 37, b: 66 },
        tentacle: { r: 100, g: 180, b: 255 },
        glow: { r: 60, g: 160, b: 255 },
      },
      light: {
        headLight: { r: 255, g: 190, b: 92 },
        headDark: { r: 205, g: 75, b: 8 },
        tentacle: { r: 255, g: 125, b: 20 },
        glow: { r: 255, g: 145, b: 35 },
      },
    };

    const current = {
      headLight: { ...theme.dark.headLight },
      headDark: { ...theme.dark.headDark },
      tentacle: { ...theme.dark.tentacle },
      glow: { ...theme.dark.glow },
    };

    const lerp = (a, b, amount) => a + (b - a) * amount;

    const blendColor = (from, to, amount) => ({
      r: lerp(from.r, to.r, amount),
      g: lerp(from.g, to.g, amount),
      b: lerp(from.b, to.b, amount),
    });

    const rgb = (color, alpha = 1) =>
      `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}, ${alpha})`;

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // Draw in CSS-pixel coordinates while keeping the canvas sharp.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      points.length = 0;
      for (let x = 0; x < w; x += 60) {
        for (let y = 0; y < h; y += 60) {
          points.push({ x, y });
        }
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", init, { passive: true });

    init();
    mouse.x = w * 0.92;
    mouse.y = h * 0.48;
    headPos.x = mouse.x;
    headPos.y = mouse.y;

    const drawOctopusHead = () => {
      const glow = ctx.createRadialGradient(
        headPos.x,
        headPos.y,
        3,
        headPos.x,
        headPos.y,
        38,
      );
      glow.addColorStop(0, rgb(current.glow, 0.22));
      glow.addColorStop(1, rgb(current.glow, 0));

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(headPos.x, headPos.y, 38, 0, Math.PI * 2);
      ctx.fill();

      const grad = ctx.createRadialGradient(
        headPos.x - 7,
        headPos.y - 7,
        2,
        headPos.x,
        headPos.y,
        21,
      );
      grad.addColorStop(0, rgb(current.headLight));
      grad.addColorStop(
        0.55,
        rgb(blendColor(current.headLight, current.headDark, 0.35)),
      );
      grad.addColorStop(1, rgb(current.headDark));

      ctx.shadowColor = rgb(current.glow, 0.6);
      ctx.shadowBlur = 12;
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(headPos.x, headPos.y, 20, 18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Small eyes make the Octopus more recognizable without adding DOM work.
      // const eyeY = headPos.y - 2;
      // const eyeOffset = 7;
      // ctx.fillStyle = "rgba(255,255,255,0.95)";
      // ctx.beginPath();
      // ctx.arc(headPos.x - eyeOffset, eyeY, 3, 0, Math.PI * 2);
      // ctx.arc(headPos.x + eyeOffset, eyeY, 3, 0, Math.PI * 2);
      // ctx.fill();

      // ctx.fillStyle = "rgba(20,30,45,0.9)";
      // ctx.beginPath();
      // ctx.arc(headPos.x - eyeOffset, eyeY, 1.3, 0, Math.PI * 2);
      // ctx.arc(headPos.x + eyeOffset, eyeY, 1.3, 0, Math.PI * 2);
      // ctx.fill();
    };

    const drawTentacle = (target, index) => {
      const dx = target.x - headPos.x;
      const dy = target.y - headPos.y;
      const distance = Math.hypot(dx, dy);
      const sway =
        Math.sin(time + target.x * 0.02 + index * 0.7) * (distance * 0.05);

      ctx.beginPath();
      ctx.lineWidth = Math.max(1, 6 - distance / 150);
      ctx.strokeStyle = rgb(current.tentacle, 0.42);
      ctx.lineCap = "round";
      ctx.moveTo(headPos.x, headPos.y);
      ctx.quadraticCurveTo(
        headPos.x + dx * 0.5,
        headPos.y + dy * 0.5 + sway,
        target.x,
        target.y,
      );
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.03;

      const targetTheme = isDarkRef.current ? theme.dark : theme.light;
      const transitionSpeed = 0.08;

      current.headLight = blendColor(
        current.headLight,
        targetTheme.headLight,
        transitionSpeed,
      );
      current.headDark = blendColor(
        current.headDark,
        targetTheme.headDark,
        transitionSpeed,
      );
      current.tentacle = blendColor(
        current.tentacle,
        targetTheme.tentacle,
        transitionSpeed,
      );
      current.glow = blendColor(
        current.glow,
        targetTheme.glow,
        transitionSpeed,
      );

      headPos.x += (mouse.x - headPos.x) * ease;
      headPos.y += (mouse.y - headPos.y) * ease;

      const active = points
        .map((p) => ({
          ...p,
          dist: Math.hypot(p.x - headPos.x, p.y - headPos.y),
        }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 8);

      active.forEach((target, index) => drawTentacle(target, index));
      drawOctopusHead();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default Octopus;
