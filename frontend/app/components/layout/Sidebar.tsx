"use client";
import React, { useState } from "react";
import { REVISIONES } from "../shared/constants";
import type { RevisionTipo } from "../shared/types";
import { MdOutlineAutoStories } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";
import { RiAiGenerate } from "react-icons/ri";

const GOLD = "#C9A84C";

interface SidebarProps {
    tipoActivo: string;
    onCambiarTipo: (id: string) => void;
}

const STATS = [
    { label: "Tipos de artículo", value: "4",  icon: <FaLayerGroup size={11} color={GOLD} /> },
    { label: "Idiomas",           value: "10", icon: <BsTranslate size={11} color={GOLD} /> },
    { label: "IAs compatibles",   value: "6",  icon: <RiAiGenerate size={11} color={GOLD} /> },
];

export default function Sidebar({ tipoActivo, onCambiarTipo }: SidebarProps) {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <aside style={{
            width: 240, flexShrink: 0,
            // Sticky: ocupa solo el alto visible del usuario
            position: "sticky",
            top: 64, // altura del header
            height: "calc(100vh - 64px)",
            background: "#ffffff",
            borderRight: "1px solid #e8ecf0",
            padding: "20px 12px",
            display: "flex", flexDirection: "column", gap: 3,
            overflowY: "auto",
        }}>

            {/* ── Encabezado ── */}
            <div style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "4px 6px 14px",
                borderBottom: "1px solid #f0f0f0",
                marginBottom: 6,
            }}>
                <div style={{
                    width: 28, height: 28, borderRadius: 7,
                    background: `linear-gradient(135deg, ${GOLD}, ${GOLD}99)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                }}>
                    <MdOutlineAutoStories size={14} color="#fff" />
                </div>
                <div>
                    <div style={{
                        fontSize: 10, fontWeight: 800, letterSpacing: 1.5,
                        color: "#2d3748", textTransform: "uppercase",
                    }}>
                        Tipo de Artículo
                    </div>
                    <div style={{ fontSize: 9, color: "#a0aec0", letterSpacing: 0.3 }}>
                        Selecciona el formato
                    </div>
                </div>
            </div>

            {/* ── Botones de tipo ── */}
            {REVISIONES.map((rev: RevisionTipo) => {
                const activo = tipoActivo === rev.id;
                const isHovered = hovered === rev.id;
                const Icon = rev.icon;

                return (
                    <button
                        key={rev.id}
                        onClick={() => onCambiarTipo(rev.id)}
                        onMouseEnter={() => setHovered(rev.id)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                            display: "flex", alignItems: "center",
                            gap: 10, padding: "10px 10px", borderRadius: 10,
                            border: `1px solid ${activo ? rev.color + "35" : isHovered ? rev.color + "20" : "transparent"}`,
                            cursor: "pointer", textAlign: "left",
                            background: activo
                                ? rev.color + "12"
                                : isHovered ? rev.color + "08" : "transparent",
                            borderLeft: `3px solid ${activo ? rev.color : isHovered ? rev.color + "50" : "transparent"}`,
                            transition: "all 0.15s", width: "100%",
                            fontFamily: "inherit",
                        }}
                    >
                        {/* Ícono */}
                        <div style={{
                            width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                            background: activo ? rev.color + "18" : isHovered ? rev.color + "10" : "#f7f8fa",
                            border: `1px solid ${activo ? rev.color + "30" : "#edf0f4"}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all 0.15s",
                        }}>
                            <Icon size={15} color={activo ? rev.color : isHovered ? rev.color : "#94a3b8"} />
                        </div>

                        {/* Texto */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{
                                fontSize: 12, fontWeight: activo ? 700 : 500,
                                color: activo ? rev.color : isHovered ? "#2d3748" : "#4a5568",
                                lineHeight: 1.3, transition: "color 0.15s",
                            }}>
                                {rev.label}
                            </div>
                            <div style={{
                                fontSize: 9.5, color: "#b0bac8",
                                marginTop: 2, lineHeight: 1.4,
                                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                            }}>
                                {rev.desc}
                            </div>
                        </div>
                    </button>
                );
            })}

            {/* ── Separador ── */}
            <div style={{
                margin: "14px 6px 10px", height: 1,
                background: "linear-gradient(90deg, transparent, #e2e8f0, transparent)",
            }} />

            {/* ── Estadísticas ── */}
            <div style={{
                borderRadius: 10, background: "#f8fafc",
                border: "1px solid #edf0f4", padding: "12px 12px 8px",
            }}>
                <div style={{
                    fontSize: 9, fontWeight: 800, letterSpacing: 1.5,
                    color: "#a0aec0", textTransform: "uppercase", marginBottom: 10,
                }}>
                    Estadísticas
                </div>
                {STATS.map(({ label, value, icon }) => (
                    <div key={label} style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        fontSize: 11, color: "#718096", padding: "5px 0",
                        borderBottom: "1px solid #f0f2f5",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            {icon}
                            <span>{label}</span>
                        </div>
                        <span style={{ fontWeight: 800, color: "#2d3748", fontSize: 12 }}>
                            {value}
                        </span>
                    </div>
                ))}
            </div>

            {/* ── Footer institucional ── */}
            <div style={{ marginTop: "auto", paddingTop: 16, textAlign: "center" }}>
                <div style={{
                    fontSize: 8.5, color: "#c0cad8",
                    letterSpacing: 0.8, textTransform: "uppercase", lineHeight: 1.8,
                }}>
                    Biblioteca Central<br />
                    <span style={{ color: GOLD + "99" }}>Pedro Zulen · UNMSM</span>
                </div>
            </div>

        </aside>
    );
}