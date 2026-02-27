"use client";
import React from "react";
import { REVISIONES } from "../shared/constants";
import type { RevisionTipo } from "../shared/types";

interface SidebarProps {
    tipoActivo: string;
    onCambiarTipo: (id: string) => void;
}

export default function Sidebar({ tipoActivo, onCambiarTipo }: SidebarProps) {
    return (
        <aside style={{
            width: 230, minHeight: "100%",
            background: "#fff", borderRight: "1px solid #e2e8f0",
            padding: "24px 12px", display: "flex",
            flexDirection: "column", gap: 6, flexShrink: 0,
            overflowY: "auto",
        }}>
            <p style={{
                fontSize: 10, fontWeight: 800, letterSpacing: 2,
                color: "#a0aec0", textTransform: "uppercase",
                margin: "0 0 10px 8px",
            }}>
                Tipo de Artículo
            </p>

            {REVISIONES.map((rev: RevisionTipo) => {
                const activo = tipoActivo === rev.id;
                const Icon = rev.icon; // componente Lucide

                return (
                    <button
                        key={rev.id}
                        onClick={() => onCambiarTipo(rev.id)}
                        style={{
                            display: "flex", alignItems: "flex-start",
                            gap: 10, padding: "12px 10px", borderRadius: 10,
                            border: "none", cursor: "pointer", textAlign: "left",
                            background: activo ? rev.color + "18" : "transparent",
                            borderLeft: `3px solid ${activo ? rev.color : "transparent"}`,
                            transition: "all 0.18s", width: "100%",
                            fontFamily: "inherit",
                        }}
                    >
                        {/* Ícono Lucide */}
                        <Icon
                            size={18}
                            strokeWidth={2}
                            color={activo ? rev.color : "#718096"}
                            style={{ flexShrink: 0, marginTop: 1 }}
                        />

                        <div>
                            <div style={{
                                fontSize: 12, fontWeight: activo ? 700 : 500,
                                lineHeight: 1.3,
                                color: activo ? rev.color : "#4a5568",
                            }}>
                                {rev.label}
                            </div>
                            <div style={{
                                fontSize: 10, color: "#a0aec0",
                                marginTop: 2, lineHeight: 1.4,
                            }}>
                                {rev.desc}
                            </div>
                        </div>
                    </button>
                );
            })}

            {/* Panel decorativo de estadísticas */}
            <div style={{
                marginTop: "auto", padding: "14px 10px",
                background: "#f8fafc", borderRadius: 10,
                border: "1px solid #e2e8f0",
            }}>
                <div style={{
                    fontSize: 10, fontWeight: 700, color: "#a0aec0",
                    textTransform: "uppercase", letterSpacing: 1, marginBottom: 10,
                }}>
                    Estadísticas
                </div>
                {[
                    ["Prompts generados", "6"],
                    ["Tipos disponibles", "4"],
                    ["Idiomas", "4"],
                ].map(([k, v]) => (
                    <div key={k} style={{
                        display: "flex", justifyContent: "space-between",
                        fontSize: 11, color: "#718096", padding: "3px 0",
                    }}>
                        <span>{k}</span>
                        <span style={{ fontWeight: 700, color: "#2d3748" }}>{v}</span>
                    </div>
                ))}
            </div>
        </aside>
    );
}