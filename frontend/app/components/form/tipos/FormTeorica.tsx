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

const COLOR = "#e67e22";
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };
const CAMPOS: (keyof FormData)[] = ["temaT", "objetivoT", "corrientes", "autores", "periodo"];

export default function FormTeorica({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS.some(k => form[k] !== "");
    const limpiar = () => CAMPOS.forEach(k => onUpdate(k, ""));

    return (
        <Bloque titulo="2. Contenido de la Revisión Teórica" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Campo label="Tema o campo teórico a revisar" required>
                    <textarea value={form.temaT} onChange={e => onUpdate("temaT", e.target.value)}
                        rows={2} placeholder="Ej: Teorías del aprendizaje constructivista en educación superior..."
                        style={ta} />
                </Campo>
                <div style={grid2}>
                    <Campo label="Objetivo de la revisión" required>
                        <textarea value={form.objetivoT} onChange={e => onUpdate("objetivoT", e.target.value)}
                            rows={2} placeholder="Ej: Analizar las principales corrientes teóricas sobre..."
                            style={ta} />
                    </Campo>
                    <Campo label="Corrientes o enfoques teóricos a cubrir">
                        <textarea value={form.corrientes} onChange={e => onUpdate("corrientes", e.target.value)}
                            rows={2} placeholder="Ej: Constructivismo, cognitivismo, conductismo..."
                            style={ta} />
                    </Campo>
                </div>
                <div style={grid2}>
                    <Campo label="Autores o teóricos clave">
                        <input value={form.autores} onChange={e => onUpdate("autores", e.target.value)}
                            placeholder="Ej: Vygotsky, Piaget, Ausubel, Bruner" style={inp} />
                    </Campo>
                    <Campo label="Período temporal a cubrir">
                        <input value={form.periodo} onChange={e => onUpdate("periodo", e.target.value)}
                            placeholder="Ej: 2000–2024, últimos 10 años" style={inp} />
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