"use client";
import React from "react";

interface CampoProps {
    label: string;
    required?: boolean;
    children: React.ReactNode;
}

export default function Campo({ label, required, children }: CampoProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <label
                style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#4a5568",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                }}
            >
                {label}
                {required && <span style={{ color: "#e53e3e", marginLeft: 3 }}>*</span>}
            </label>
            {children}
        </div>
    );
}