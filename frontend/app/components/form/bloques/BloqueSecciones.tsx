"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import { SECCIONES_POR_TIPO } from "../../shared/constants";
import { BsStars  } from "react-icons/bs";

interface Props {
    tipoActivo: string;
    secciones: string[];
    color: string;
    onToggleSeccion: (s: string) => void;
    onGenerar: () => void;
}

export default function BloqueSecciones({ tipoActivo, secciones, color, onToggleSeccion, onGenerar }: Props) {
    const disponibles = SECCIONES_POR_TIPO[tipoActivo] ?? [];
    const total = secciones.length > 0 ? secciones.length : disponibles.length;

    return (
        <>
            <Bloque titulo="4. Secciones del Documento" color="#8e44ad">
                <p style={{ fontSize: 12, color: "#718096", margin: "0 0 12px" }}>
                    Selecciona las secciones a incluir (si no seleccionas, se usarán todas).
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {disponibles.map(s => {
                        const activa = secciones.includes(s);
                        return (
                            <button key={s} onClick={() => onToggleSeccion(s)} style={{
                                padding: "7px 14px", borderRadius: 20,
                                border: `1.5px solid ${activa ? "#8e44ad" : "#e2e8f0"}`,
                                background: activa ? "#8e44ad" : "#fff",
                                color: activa ? "#fff" : "#4a5568",
                                fontSize: 13, cursor: "pointer", fontFamily: "inherit",
                                transition: "all 0.15s", fontWeight: activa ? 600 : 400,
                            }}>
                                {activa ? "✓ " : ""}{s}
                            </button>
                        );
                    })}
                </div>
            </Bloque>

            <div style={{ textAlign: "center", marginTop: 8 }}>
                <button onClick={onGenerar} style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "14px 40px",
                    background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                    color: "#fff", border: "none", borderRadius: 10,
                    fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                    boxShadow: `0 4px 14px ${color}55`,
                    transition: "transform 0.15s, box-shadow 0.15s", letterSpacing: 0.3,
                }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 8px 24px ${color}66`;
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 4px 14px ${color}55`;
                    }}>
                    <BsStars  size={20} />
                    Generar Prompts Académicos
                </button>
                <p style={{ fontSize: 11, color: "#a0aec0", marginTop: 10 }}>
                    Se generarán {total} prompts listos para usar en cualquier IA
                </p>
            </div>
        </>
    );
}