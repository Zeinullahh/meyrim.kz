"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  shape: "cross" | "plus" | "dot";
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      canvas.style.width = parent.offsetWidth + "px";
      canvas.style.height = parent.offsetHeight + "px";
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const count = Math.min(40, Math.floor(parent.offsetWidth / 40));
      particles = [];
      const shapes: Array<"cross" | "plus" | "dot"> = ["cross", "plus", "dot"];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * parent.offsetWidth,
          y: Math.random() * parent.offsetHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.15 + 0.05,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
      }
    };

    const drawCross = (x: number, y: number, size: number, opacity: number) => {
      ctx!.strokeStyle = `rgba(20, 184, 166, ${opacity})`;
      ctx!.lineWidth = 1.2;
      ctx!.beginPath();
      ctx!.moveTo(x - size, y);
      ctx!.lineTo(x + size, y);
      ctx!.moveTo(x, y - size);
      ctx!.lineTo(x, y + size);
      ctx!.stroke();
    };

    const drawPlus = (x: number, y: number, size: number, opacity: number) => {
      ctx!.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
      ctx!.lineWidth = 1.2;
      ctx!.beginPath();
      ctx!.moveTo(x - size, y);
      ctx!.lineTo(x + size, y);
      ctx!.moveTo(x, y - size);
      ctx!.lineTo(x, y + size);
      ctx!.stroke();
      // circle around
      ctx!.beginPath();
      ctx!.arc(x, y, size * 1.6, 0, Math.PI * 2);
      ctx!.strokeStyle = `rgba(20, 184, 166, ${opacity * 0.4})`;
      ctx!.stroke();
    };

    const drawDot = (x: number, y: number, size: number, opacity: number) => {
      ctx!.beginPath();
      ctx!.arc(x, y, size, 0, Math.PI * 2);
      ctx!.fillStyle = `rgba(56, 189, 248, ${opacity})`;
      ctx!.fill();
    };

    const animate = () => {
      const parent = canvas.parentElement;
      if (!parent || !ctx) return;
      ctx.clearRect(0, 0, parent.offsetWidth, parent.offsetHeight);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > parent.offsetWidth) p.vx *= -1;
        if (p.y < 0 || p.y > parent.offsetHeight) p.vy *= -1;

        if (p.shape === "cross") drawCross(p.x, p.y, p.size * 3, p.opacity);
        else if (p.shape === "plus") drawPlus(p.x, p.y, p.size * 3, p.opacity);
        else drawDot(p.x, p.y, p.size, p.opacity);
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1]"
    />
  );
}
