"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import Campo from "../../ui/Campo";
import { inp, grid2 } from "../../shared/constants";
import type { FormData } from "../../shared/types";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
    form: FormData;
    onUpdate: (key: keyof FormData, value: string) => void;
}

const COLOR = "#2980b9";
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };
const CAMPOS: (keyof FormData)[] = ["tema", "objetivo", "hipotesis", "keywords", "exclusion"];

export default function FormSistematica({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS.some(k => form[k] !== "");
    const limpiar = () => CAMPOS.forEach(k => onUpdate(k, ""));

    return (
        <Bloque titulo="2. Protocolo de Revisión Sistemática" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Campo label="Pregunta de investigación (formato PICO/SPIDER)" required>
                    <textarea value={form.tema} onChange={e => onUpdate("tema", e.target.value)}
                        rows={2} placeholder="Ej: ¿Cuál es la efectividad del aprendizaje basado en problemas en estudiantes universitarios de salud entre 2015-2024?"
                        style={ta} />
                </Campo>
                <div style={grid2}>
                    <Campo label="Objetivo de la revisión" required>
                        <textarea value={form.objetivo} onChange={e => onUpdate("objetivo", e.target.value)}
                            rows={2} placeholder="Ej: Identificar y sintetizar la evidencia sobre..."
                            style={ta} />
                    </Campo>
                    <Campo label="Criterios de inclusión">
                        <textarea value={form.hipotesis} onChange={e => onUpdate("hipotesis", e.target.value)}
                            rows={2} placeholder="Ej: Estudios experimentales, publicados 2015-2024, idioma español/inglés..."
                            style={ta} />
                    </Campo>
                </div>
                <div style={grid2}>
                    <Campo label="Bases de datos a consultar">
                        <input value={form.keywords} onChange={e => onUpdate("keywords", e.target.value)}
                            placeholder="Ej: PubMed, Scopus, Web of Science, Cochrane" style={inp} />
                    </Campo>
                    <Campo label="Criterios de exclusión">
                        <input value={form.exclusion} onChange={e => onUpdate("exclusion", e.target.value)}
                            placeholder="Ej: Estudios sin grupo control, muestra < 30, sin revisión por pares" style={inp} />
                    </Campo>
                </div>
            </div>

            {tieneDatos && (
                <div style={{ marginTop: 14, display: "flex", justifyContent: "center" }}>
                    <button onClick={limpiar} style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "6px 16px", borderRadius: 8,
                        border: "1.5px solid #e53e3e33", background: "transparent",
                        color: "#e53e3e", fontSize: 11, fontWeight: 700,
                        cursor: "pointer", fontFamily: "inherit",
                        letterSpacing: 0.8, textTransform: "uppercase", transition: "all 0.15s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#e53e3e10"; e.currentTarget.style.borderColor = "#e53e3e66"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#e53e3e33"; }}>
                        <MdDeleteOutline size={14} style={{ display: "block" }} />
                        Limpiar este bloque
                    </button>
                </div>
            )}
        </Bloque>
    );
}