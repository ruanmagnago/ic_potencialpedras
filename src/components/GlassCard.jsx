import React from "react";

export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl p-5 border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,179,255,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}
