"use client";

import React, { useState } from "react";
import { COLORES, REVISIONES, PromptCard } from "./constants";

interface PromptOutputProps {
  prompts: PromptCard[];
  tipoActivo: string;
  facultad: string;
  onEditarFormulario: () => void;
  onNuevoPrompt: () => void;
}

export default function PromptOutput({
  prompts,
  tipoActivo,
  facultad,
  onEditarFormulario,
  onNuevoPrompt,
}: PromptOutputProps) {
  const [copiados, setCopiados] = useState<Record<string, boolean>>({});
  const [expandido, setExpandido] = useState<string | null>(null);
  const revActiva = REVISIONES.find((r) => r.id === tipoActivo);

  const handleCopiar = (id: string, texto: string) => {
    navigator.clipboard.writeText(texto);
    setCopiados((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setCopiados((prev) => ({ ...prev, [id]: false })), 2000);
  };

  if (!prompts || prompts.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px", color: "#aaa" }}>
        <div style={{ fontSize: 52, marginBottom: 16 }}>📄</div>
        <div style={{ fontSize: 16 }}>
          Completa el formulario y presiona <strong>Generar Prompts</strong>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "28px 32px 48px" }}>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h3 style={{ margin: 0, color: COLORES.azulOscuro, fontSize: 20 }}>
              Prompts Generados
            </h3>
            <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>
              {revActiva?.icon} {revActiva?.label} · UNMSM · {facultad || "Sin facultad"}
              <span style={{
                marginLeft: 10, background: COLORES.azul, color: "#fff",
                fontSize: 11, padding: "2px 10px", borderRadius: 20,
              }}>
                {prompts.length} prompts listos
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={onEditarFormulario} style={btnSecundario}>
              ← Editar
            </button>
            <button onClick={onNuevoPrompt} style={btnSecundario}>
              🔄 Nuevo
            </button>
          </div>
        </div>

        {/* Tip */}
        <div style={{
          marginTop: 16, padding: "10px 16px", borderRadius: 8,
          background: `${COLORES.dorado}18`, border: `1px solid ${COLORES.dorado}44`,
          fontSize: 12, color: "#7a6000",
        }}>
          💡 Usa cada prompt de forma secuencial — empieza por el Prompt 1 y avanza hasta el 6 para construir tu trabajo paso a paso.
        </div>
      </div>

      {/* Tarjetas de prompts */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {prompts.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#fff",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
              border: `1px solid ${p.color}33`,
            }}
          >
            {/* Header de la tarjeta */}
            <div
              style={{
                background: `linear-gradient(135deg, ${p.color}22, ${p.color}11)`,
                borderBottom: `2px solid ${p.color}`,
                padding: "14px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => setExpandido(expandido === p.id ? null : p.id)}
            >
              <div>
                <div style={{ fontWeight: "bold", color: p.color, fontSize: 15 }}>
                  {p.titulo}
                </div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>
                  {p.descripcion}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 12, color: "#aaa" }}>
                  {expandido === p.id ? "▲ ocultar" : "▼ ver prompt"}
                </span>
              </div>
            </div>

            {/* Contenido expandible */}
            {expandido === p.id && (
              <div style={{ padding: "0 20px 20px" }}>
                <div
                  style={{
                    margin: "16px 0",
                    background: COLORES.azulOscuro,
                    border: `1px solid ${p.color}44`,
                    borderRadius: 10,
                    padding: "20px 24px",
                    fontFamily: "'Courier New', Courier, monospace",
                    fontSize: 12,
                    lineHeight: 1.8,
                    color: "#cfe0ff",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {p.texto}
                </div>
                <button
                  onClick={() => handleCopiar(p.id, p.texto)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                    background: copiados[p.id]
                      ? "#27ae60"
                      : `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
                    color: "#fff",
                    fontFamily: "inherit",
                    fontSize: 14,
                    fontWeight: "bold",
                    transition: "background 0.3s",
                    letterSpacing: "0.03em",
                  }}
                >
                  {copiados[p.id]
                    ? "✓ Copiado al portapapeles"
                    : `📋 Copiar ${p.titulo.split(":")[0]}`}
                </button>
              </div>
            )}

            {/* Botón rápido cuando está cerrado */}
            {expandido !== p.id && (
              <div style={{ padding: "10px 20px", background: "#fafbff" }}>
                <button
                  onClick={() => handleCopiar(p.id, p.texto)}
                  style={{
                    padding: "7px 20px",
                    borderRadius: 6,
                    border: `1px solid ${p.color}55`,
                    cursor: "pointer",
                    background: copiados[p.id] ? "#27ae6022" : `${p.color}11`,
                    color: copiados[p.id] ? "#27ae60" : p.color,
                    fontFamily: "inherit",
                    fontSize: 12,
                    fontWeight: "bold",
                    transition: "all 0.2s",
                  }}
                >
                  {copiados[p.id] ? "✓ Copiado" : "📋 Copiar directamente"}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const btnSecundario: React.CSSProperties = {
  padding: "8px 18px",
  borderRadius: 8,
  cursor: "pointer",
  background: "transparent",
  border: `1px solid ${COLORES.grisMedio}`,
  color: COLORES.grisTexto,
  fontFamily: "inherit",
  fontSize: 13,
};