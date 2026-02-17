"use client";

import React from "react";

interface CampoProps {
  label: string;
  children: React.ReactNode;
}

export default function Campo({ label, children }: CampoProps) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: 11,
          fontWeight: "bold",
          color: "#555",
          marginBottom: 6,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}