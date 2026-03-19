"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import Campo from "../../ui/Campo";
import { COLORES, FACULTADES, NIVELES, ROLES, inp, grid2 } from "../../shared/constants";
import type { FormData } from "../../shared/types";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
    form: FormData;
    onUpdate: (key: keyof FormData, value: string) => void;
}

const sel: React.CSSProperties = { ...inp, cursor: "pointer" };

// Campos que pertenecen a este bloque
const CAMPOS_AUTOR: (keyof FormData)[] = ["nombre", "rol", "facultad", "nivel", "docente"];

export default function BloqueAutor({ form, onUpdate }: Props) {
    // ¿Hay algún campo con contenido?
    const tieneDatos = CAMPOS_AUTOR.some(k => form[k] !== "");

    const limpiarBloque = () => {
        CAMPOS_AUTOR.forEach(k => onUpdate(k, ""));
    };

    return (
        <Bloque titulo="1. Datos del Autor" color={COLORES.azul}>
            <div style={grid2}>
                <Campo label="Nombre completo">
                    <input value={form.nombre} onChange={e => onUpdate("nombre", e.target.value)}
                        placeholder="Ej: María García López" style={inp} />
                </Campo>
                <Campo label="Rol">
                    <select value={form.rol} onChange={e => onUpdate("rol", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {ROLES.map(r => <option key={r}>{r}</option>)}
                    </select>
                </Campo>
                <Campo label="Facultad">
                    <select value={form.facultad} onChange={e => onUpdate("facultad", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {FACULTADES.map(f => <option key={f}>{f}</option>)}
                    </select>
                </Campo>
                <Campo label="Nivel académico">
                    <select value={form.nivel} onChange={e => onUpdate("nivel", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {NIVELES.map(n => <option key={n}>{n}</option>)}
                    </select>
                </Campo>
                <Campo label="Docente / Asesor">
                    <input value={form.docente} onChange={e => onUpdate("docente", e.target.value)}
                        placeholder="Nombre del docente (opcional)" style={inp} />
                </Campo>
            </div>

            {/* Botón limpiar — solo aparece si hay datos */}
            {tieneDatos && (
                <div style={{ marginTop: 14, display: "flex", justifyContent: "center" }}>
                    <button
                        onClick={limpiarBloque}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: 6,
                            padding: "6px 16px", borderRadius: 8,
                            border: "1.5px solid #e53e3e33",
                            background: "transparent",
                            color: "#e53e3e", fontSize: 11, fontWeight: 700,
                            cursor: "pointer", fontFamily: "inherit",
                            letterSpacing: 0.8, textTransform: "uppercase",
                            transition: "all 0.15s",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = "#e53e3e10";
                            e.currentTarget.style.borderColor = "#e53e3e66";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.borderColor = "#e53e3e33";
                        }}
                    >
                        <MdDeleteOutline size={14} style={{ display: "block" }} />
                        Limpiar este bloque
                    </button>
                </div>
            )}
        </Bloque>
    );
}