"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import Campo from "../../ui/Campo";
import { COLORES, CITAS, REVISTAS, IDIOMAS, EXTENSIONES, inp, grid2 } from "../../shared/constants";
import type { FormData } from "../../shared/types";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
    form: FormData;
    onUpdate: (key: keyof FormData, value: string) => void;
}

const sel: React.CSSProperties = { ...inp, cursor: "pointer" };
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };

const CAMPOS_FORMATO: (keyof FormData)[] = ["extension", "citacion", "idioma", "revista", "restricciones"];

export default function BloqueFormato({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS_FORMATO.some(k => form[k] !== "");

    const limpiarBloque = () => {
        CAMPOS_FORMATO.forEach(k => onUpdate(k, ""));
    };

    return (
        <Bloque titulo="3. Formato y Estilo" color={COLORES.dorado}>
            <div style={grid2}>
                <Campo label="Extensión del artículo">
                    <select value={form.extension} onChange={e => onUpdate("extension", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {EXTENSIONES.map(e => <option key={e}>{e}</option>)}
                    </select>
                </Campo>
                <Campo label="Norma de citación">
                    <select value={form.citacion} onChange={e => onUpdate("citacion", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {CITAS.map(c => <option key={c}>{c}</option>)}
                    </select>
                </Campo>
                <Campo label="Idioma">
                    <select value={form.idioma} onChange={e => onUpdate("idioma", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {IDIOMAS.map(i => <option key={i}>{i}</option>)}
                    </select>
                </Campo>
                <Campo label="Revista objetivo">
                    <select value={form.revista} onChange={e => onUpdate("revista", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {REVISTAS.map(r => <option key={r}>{r}</option>)}
                    </select>
                </Campo>
            </div>
            <div style={{ marginTop: 14 }}>
                <Campo label="Restricciones o instrucciones especiales">
                    <textarea value={form.restricciones} onChange={e => onUpdate("restricciones", e.target.value)}
                        rows={2} placeholder="Ej: Evitar fuentes anteriores a 2018, perspectiva latinoamericana..."
                        style={ta} />
                </Campo>
            </div>

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