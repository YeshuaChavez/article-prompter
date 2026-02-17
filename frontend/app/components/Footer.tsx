"use client";

import React from "react";
import { COLORES } from "./constants";

export default function AppFooter() {
  return (
    <footer
      style={{
        background: COLORES.azulOscuro,
        padding: "12px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: `4px solid ${COLORES.dorado}`,
      }}
    >
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
        © Universidad Nacional Mayor de San Marcos · Lima, Perú · Fundada en 1551
      </div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
        Vicerrectorado de Investigación y Posgrado
      </div>
    </footer>
  );
}