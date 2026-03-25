"use client";
import React, { useEffect } from "react";
import Bloque from "../../ui/Bloque";
import { SECCIONES_POR_TIPO } from "../../shared/constants";
import { BsStars } from "react-icons/bs";

interface Props {
    tipoActivo: string;
    secciones: string[];
    color: string;
    onToggleSeccion: (s: string) => void;
    onGenerar: () => void;
}

const GROUP_STYLES: Record<"preparacion" | "redaccion", { label: string; accent: string; bg: string }> = {
    preparacion: { label: "Preparación", accent: "#4a5568", bg: "#2d3748" },
    redaccion:   { label: "Redacción",   accent: "#4a5568", bg: "#2d3748" },
};

const CSS = `
.bs-chip {
    padding: 7px 14px;
    border-radius: 20px;
    font-size: 13px;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    border: 1.5px solid #e2e8f0;
    background: #fff;
    color: #4a5568;
    transition:
        background   0.22s cubic-bezier(0.4,0,0.2,1),
        border-color 0.22s cubic-bezier(0.4,0,0.2,1),
        color        0.22s cubic-bezier(0.4,0,0.2,1),
        box-shadow   0.22s cubic-bezier(0.4,0,0.2,1),
        transform    0.12s cubic-bezier(0.4,0,0.2,1);
    outline: none;
}
.bs-chip:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(0,0,0,0.08);
}
.bs-chip:active {
    transform: scale(0.96);
    transition-duration: 0.08s;
}
.bs-chip.activa {
    background: #2d3748;
    border-color: #4a5568;
    color: #fff;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(45,55,72,0.22);
}

.bs-group-label {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #4a5568;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: opacity 0.15s ease;
}
.bs-group-label:hover { opacity: 0.65; }

.bs-hint {
    font-size: 10px;
    font-weight: 400;
    text-transform: none;
    letter-spacing: 0;
    opacity: 0;
    transform: translateX(-4px);
    transition:
        opacity   0.18s ease,
        transform 0.18s ease;
}
.bs-group-label:hover .bs-hint {
    opacity: 0.55;
    transform: translateX(0);
}

.bs-check {
    display: inline-block;
    opacity: 0;
    transform: scale(0.4) rotate(-10deg);
    transition:
        opacity   0.2s cubic-bezier(0.4,0,0.2,1),
        transform 0.2s cubic-bezier(0.34,1.56,0.64,1);
}
.bs-check.visible {
    opacity: 1;
    transform: scale(1) rotate(0deg);
}

.bs-generar-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 40px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    letter-spacing: 0.3px;
    transition:
        transform  0.2s cubic-bezier(0.4,0,0.2,1),
        box-shadow 0.2s cubic-bezier(0.4,0,0.2,1),
        filter     0.2s ease;
}
.bs-generar-btn:hover {
    transform: translateY(-3px);
    filter: brightness(1.08);
}
.bs-generar-btn:active {
    transform: translateY(-1px) scale(0.97);
    filter: brightness(0.95);
    transition-duration: 0.08s;
}
`;

function useInjectStyles(id: string, css: string) {
    useEffect(() => {
        if (document.getElementById(id)) return;
        const el = document.createElement("style");
        el.id = id;
        el.textContent = css;
        document.head.appendChild(el);
        return () => { el.remove(); };
    }, []);
}

function GrupoChips({ items, secciones, onToggle }: {
    items: string[];
    secciones: string[];
    onToggle: (s: string) => void;
}) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {items.map(s => {
                const activa = secciones.includes(s);
                return (
                    <button
                        key={s}
                        onClick={() => onToggle(s)}
                        className={`bs-chip${activa ? " activa" : ""}`}
                    >
                        {s}
                    </button>
                );
            })}
        </div>
    );
}

export default function BloqueSecciones({ tipoActivo, secciones, color, onToggleSeccion, onGenerar }: Props) {
    useInjectStyles("bloque-secciones-styles", CSS);

    const grupos = SECCIONES_POR_TIPO[tipoActivo];
    const todasLasSecciones = grupos ? [...grupos.preparacion, ...grupos.redaccion] : [];
    const total = secciones.length > 0 ? secciones.length : todasLasSecciones.length;

    if (!grupos) return null;

    const handleToggleAll = (items: string[], selectAll: boolean) => {
        items.forEach(s => {
            const activa = secciones.includes(s);
            if (selectAll && !activa) onToggleSeccion(s);
            if (!selectAll && activa) onToggleSeccion(s);
        });
    };

    return (
        <>
            <Bloque titulo="4. Secciones del Documento" color="#8e44ad">
                <p style={{ fontSize: 12, color: "#718096", margin: "0 0 16px" }}>
                    Selecciona las secciones a incluir (si no seleccionas, se usarán todas).
                </p>

                {(["preparacion", "redaccion"] as const).map(grupo => {
                    const items = grupos[grupo];
                    const allSelected = items.every(s => secciones.includes(s));

                    return (
                        <div key={grupo} style={{ marginBottom: 16 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                                <span
                                    className="bs-group-label"
                                    onClick={() => handleToggleAll(items, !allSelected)}
                                    title={allSelected ? "Deseleccionar todo" : "Seleccionar todo"}
                                >
                                    <span className={`bs-check${allSelected ? " visible" : ""}`}>✓</span>
                                    {GROUP_STYLES[grupo].label}
                                    <span className="bs-hint">
                                        {allSelected ? "deseleccionar todo" : "seleccionar todo"}
                                    </span>
                                </span>
                                <div style={{ flex: 1, height: 1, background: "#4a556820" }} />
                            </div>

                            <GrupoChips
                                items={items}
                                secciones={secciones}
                                onToggle={onToggleSeccion}
                            />
                        </div>
                    );
                })}
            </Bloque>

            <div style={{ textAlign: "center", marginTop: 8 }}>
                <button
                    className="bs-generar-btn"
                    onClick={onGenerar}
                    style={{
                        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                        color: "#fff",
                        boxShadow: `0 4px 14px ${color}55`,
                    }}
                >
                    <BsStars size={20} />
                    Generar Prompts Académicos
                </button>
                <p style={{ fontSize: 11, color: "#a0aec0", marginTop: 10 }}>
                    Se generarán {total} prompts listos para usar en cualquier IA
                </p>
            </div>
        </>
    );
}