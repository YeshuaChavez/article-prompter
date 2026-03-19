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

const COLOR = "#27ae60";
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };
const CAMPOS: (keyof FormData)[] = ["tema", "objetivo", "hipotesis", "keywords", "muestra"];

export default function FormEmpirica({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS.some(k => form[k] !== "");
    const limpiar = () => CAMPOS.forEach(k => onUpdate(k, ""));

    return (
        <Bloque titulo="2. Diseño de la Investigación Empírica" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Campo label="Problema de investigación" required>
                    <textarea value={form.tema} onChange={e => onUpdate("tema", e.target.value)}
                        rows={2} placeholder="Ej: Impacto del uso de TIC en el rendimiento académico de estudiantes universitarios..."
                        style={ta} />
                </Campo>
                <div style={grid2}>
                    <Campo label="Objetivo general" required>
                        <textarea value={form.objetivo} onChange={e => onUpdate("objetivo", e.target.value)}
                            rows={2} placeholder="Ej: Determinar la relación entre el uso de TIC y el rendimiento académico..."
                            style={ta} />
                    </Campo>
                    <Campo label="Hipótesis de investigación" required>
                        <textarea value={form.hipotesis} onChange={e => onUpdate("hipotesis", e.target.value)}
                            rows={2} placeholder="Ej: H1: El uso intensivo de TIC se correlaciona positivamente con el rendimiento..."
                            style={ta} />
                    </Campo>
                </div>
                <div style={grid2}>
                    <Campo label="Diseño metodológico">
                        <input value={form.keywords} onChange={e => onUpdate("keywords", e.target.value)}
                            placeholder="Ej: Cuantitativo, correlacional, corte transversal" style={inp} />
                    </Campo>
                    <Campo label="Población y muestra">
                        <input value={form.muestra} onChange={e => onUpdate("muestra", e.target.value)}
                            placeholder="Ej: 150 estudiantes de pregrado, muestreo aleatorio estratificado" style={inp} />
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