import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-surface border border-white/10 rounded-xl p-4 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-surface/50 transition-all duration-300 transform hover:-translate-y-1">
      {children}
    </div>
  );
}
