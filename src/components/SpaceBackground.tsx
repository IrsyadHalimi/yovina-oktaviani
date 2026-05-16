import React, { useEffect, useRef } from 'react';

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        speed: Math.random() * 0.2 + 0.1,
        opacity: Math.random(),
      });
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      // Draw cosmic spiral (galaxy whirlpool)
      const centerX = width * 0.75;
      const centerY = height * 0.35;
      const time = Date.now() * 0.0003;
      
      for (let j = 0; j < 5; j++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(134, 239, 172, ${0.05 + j * 0.01})`;
        ctx.lineWidth = 0.5 + j;
        
        for (let i = 0; i < 150; i++) {
          const angle = 0.08 * i + time + (j * Math.PI / 2.5);
          const r = 0.4 * i * i * 0.08;
          const x = centerX + r * Math.cos(angle);
          const y = centerY + r * Math.sin(angle);
          
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          
          // Random star points along the spiral
          if (i % 15 === 0 && j === 2) {
             ctx.fillStyle = `rgba(134, 239, 172, 0.4)`;
             ctx.fillRect(x - 1, y - 1, 2, 2);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none opacity-40"
    />
  );
};
