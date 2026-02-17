"use client";

import React from "react";

interface BloqueProps {
  titulo: string;
  color: string;
  children: React.ReactNode;
}

export default function Bloque({ titulo, color, children }: BloqueProps) {
  return (
    <div
      style={{
        marginBottom: 24,
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
      }}
    >
      <div style={{ background: color, padding: "11px 20px" }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: "bold",
            color: "#fff",
            letterSpacing: "0.04em",
          }}
        >
          {titulo}
        </div>
      </div>
      <div style={{ padding: "20px 22px" }}>{children}</div>
    </div>
  );
}