"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
};

export default function Background() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 10,
      color: ["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"][
        Math.floor(Math.random() * 4)
      ],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, #FFF1F1 50%, #FFF1F1 100%)",
      }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Orbs */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-orange-200/70 blur-[140px] -top-32 -left-32 animate-float-slow" />
      <div
        className="absolute w-[520px] h-[520px] rounded-full bg-purple-200/70 blur-[180px] -bottom-40 -right-40 animate-float-slow"
        style={{ animationDelay: "6s" }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full bg-pink-200/60 blur-[120px] top-[35%] left-[60%] animate-float-slow"
        style={{ animationDelay: "10s" }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-[3px] h-[3px] rounded-full opacity-0"
          style={{
            left: `${p.left}%`,
            background: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            animation: `particleFloat ${p.duration}s infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
