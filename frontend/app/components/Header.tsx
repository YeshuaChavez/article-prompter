"use client";

import React from "react";
import { COLORES } from "./constants";

export default function Header() {
  return (
    <>
      {/* Barra dorada superior */}
      <div
        style={{
          background: `linear-gradient(90deg, ${COLORES.dorado}, ${COLORES.doradoClaro}, ${COLORES.dorado})`,
          height: 5,
        }}
      />

      {/* Header principal */}
      <header
        style={{
          background: `linear-gradient(135deg, ${COLORES.azulOscuro} 0%, ${COLORES.azul} 70%, #004aad 100%)`,
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          gap: 18,
          boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        }}
      >
        {/* Escudo / Logo */}
        <div
          style={{
            width: 54, height: 54, borderRadius: "50%",
            background: `linear-gradient(135deg, ${COLORES.doradoClaro}, ${COLORES.dorado})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 28, flexShrink: 0,
            boxShadow: `0 0 20px ${COLORES.dorado}66`,
          }}
        >
          ⚜️
        </div>

        {/* Títulos */}
        <div>
          <div
            style={{
              fontSize: 10, letterSpacing: "0.28em",
              color: COLORES.dorado, textTransform: "uppercase", marginBottom: 3,
            }}
          >
            Universidad Nacional Mayor de San Marcos · Decana de América · Est. 1551
          </div>
          <div
            style={{
              fontSize: 21, color: COLORES.blanco,
              fontWeight: "bold", letterSpacing: "0.01em",
            }}
          >
            Generador de Prompts Académicos
          </div>
        </div>

        {/* Info derecha */}
        <div
          style={{
            marginLeft: "auto", textAlign: "right",
            borderLeft: "1px solid rgba(255,255,255,0.15)",
            paddingLeft: 20,
          }}
        >
          <div
            style={{
              fontSize: 10, color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.1em", textTransform: "uppercase",
            }}
          >
            Vicerrectorado de Investigación
          </div>
          <div style={{ fontSize: 12, color: COLORES.doradoClaro, marginTop: 3 }}>
            Sistema de Apoyo Científico
          </div>
        </div>
      </header>
    </>
  );
}