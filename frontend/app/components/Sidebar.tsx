"use client";

import React from "react";
import { REVISIONES, SECCIONES_POR_TIPO, COLORES } from "./constants";

interface SidebarProps {
  tipoActivo: string;
  onCambiarTipo: (id: string) => void;
}

export default function Sidebar({ tipoActivo, onCambiarTipo }: SidebarProps) {
  const revActiva = REVISIONES.find((r) => r.id === tipoActivo);

  return (
    <aside
      style={{
        width: 235,
        flexShrink: 0,
        background: `linear-gradient(180deg, ${COLORES.sidebar} 0%, ${COLORES.azulOscuro} 100%)`,
        overflowY: "auto",
        boxShadow: "4px 0 20px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Título */}
      <div
        style={{
          padding: "20px 18px 12px",
          fontSize: 9,
          letterSpacing: "0.25em",
          color: "rgba(255,255,255,0.35)",
          textTransform: "uppercase",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        Tipo de Revisión / Documento
      </div>

      {/* Botones de tipos */}
      <div style={{ paddingTop: 8, paddingBottom: 16 }}>
        {REVISIONES.map((r) => (
          <button
            key={r.id}
            onClick={() => onCambiarTipo(r.id)}
            style={{
              width: "100%",
              padding: "12px 16px",
              background:
                tipoActivo === r.id ? "rgba(255,255,255,0.09)" : "transparent",
              border: "none",
              borderLeft:
                tipoActivo === r.id
                  ? `4px solid ${r.color}`
                  : "4px solid transparent",
              display: "flex",
              alignItems: "center",
              gap: 11,
              cursor: "pointer",
              transition: "all 0.2s",
              textAlign: "left",
            }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: r.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 17,
                flexShrink: 0,
                boxShadow:
                  tipoActivo === r.id ? `0 0 14px ${r.color}99` : "none",
                transition: "box-shadow 0.2s",
              }}
            >
              {r.icon}
            </span>
            <span
              style={{
                fontSize: 13,
                color:
                  tipoActivo === r.id ? "#fff" : "rgba(255,255,255,0.52)",
                fontWeight: tipoActivo === r.id ? "bold" : "normal",
                lineHeight: 1.3,
              }}
            >
              {r.label}
            </span>
          </button>
        ))}
      </div>

      {/* Info card tipo activo */}
      <div
        style={{
          margin: "4px 14px 20px",
          padding: "13px 14px",
          borderRadius: 10,
          background: `${revActiva?.color}1a`,
          border: `1px solid ${revActiva?.color}44`,
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: revActiva?.color,
            marginBottom: 5,
            fontWeight: "bold",
          }}
        >
          {revActiva?.icon} {revActiva?.label}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.55,
          }}
        >
          {revActiva?.desc}
        </div>
      </div>

      {/* Secciones predeterminadas */}
      <div style={{ padding: "0 14px 24px" }}>
        <div
          style={{
            fontSize: 9,
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Secciones predeterminadas
        </div>
        {(SECCIONES_POR_TIPO[tipoActivo] || []).map((s, i) => (
          <div
            key={s}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              marginBottom: 5,
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                background: `${revActiva?.color}33`,
                border: `1px solid ${revActiva?.color}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                color: revActiva?.color,
                flexShrink: 0,
              }}
            >
              {i + 1}
            </div>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.3,
              }}
            >
              {s}
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}