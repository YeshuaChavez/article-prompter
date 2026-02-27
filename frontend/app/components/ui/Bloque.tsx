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
                background: "#fff",
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                borderTop: `3px solid ${color}`,
                padding: "20px 24px",
                marginBottom: 20,
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
        >
            <h3
                style={{
                    margin: "0 0 16px 0",
                    fontSize: 14,
                    fontWeight: 700,
                    color,
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                }}
            >
                {titulo}
            </h3>
            {children}
        </div>
    );
}