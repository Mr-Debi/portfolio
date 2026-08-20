import React, { useEffect, useRef } from 'react';

const Octopus = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    
    let w, h;
    const points = [];
    const mouse = { x: 0, y: 0 };
    const headPos = { x: 0, y: 0 };
    const ease = 0.08;

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', init);
    init();

    const drawOctopusHead = () => {
      const grad = ctx.createRadialGradient(headPos.x - 5, headPos.y - 5, 2, headPos.x, headPos.y, 20);
      grad.addColorStop(0, '#67b3ff');
      grad.addColorStop(1, '#0a2542');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(headPos.x, headPos.y, 20, 18, 0, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawTentacle = (target) => {
      const dx = target.x - headPos.x;
      const dy = target.y - headPos.y;
      const distance = Math.hypot(dx, dy);
      const sway = Math.sin(time + target.x * 0.02) * (distance * 0.05);
      
      ctx.beginPath();
      ctx.lineWidth = Math.max(1, 6 - (distance / 150));
      ctx.strokeStyle = 'rgba(100, 180, 255, 0.4)';
      ctx.lineCap = 'round';
      ctx.moveTo(headPos.x, headPos.y);
      ctx.quadraticCurveTo(headPos.x + dx * 0.5, headPos.y + dy * 0.5 + sway, target.x, target.y);
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.03;
      headPos.x += (mouse.x - headPos.x) * ease;
      headPos.y += (mouse.y - headPos.y) * ease;

      const active = points
        .map(p => ({ ...p, dist: Math.hypot(p.x - headPos.x, p.y - headPos.y) }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 8);

      active.forEach(drawTentacle);
      drawOctopusHead();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed',
        top: 0, 
        left: 0, 
        width: '100vw',    // Force full width
        height: '100vh',   // Force full height
        zIndex: 0, 
        pointerEvents: 'none'
      }} 
    />
  );
};

export default Octopus;