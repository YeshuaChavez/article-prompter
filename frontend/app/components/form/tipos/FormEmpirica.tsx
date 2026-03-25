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
const CAMPOS: (keyof FormData)[] = ["temaE", "objetivoE", "hipotesis", "disenio", "muestra", "instrumento"];

export default function FormEmpirica({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS.some(k => form[k] !== "");
    const limpiar = () => CAMPOS.forEach(k => onUpdate(k, ""));

    return (
        <Bloque titulo="2. Diseño de la Investigación Empírica" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Campo label="Problema de investigación" required>
                    <textarea value={form.temaE} onChange={e => onUpdate("temaE", e.target.value)}
                        rows={2} placeholder="Ej: Impacto del uso de TIC en el rendimiento académico de estudiantes universitarios..."
                        style={ta} />
                </Campo>
                <div style={grid2}>
                    <Campo label="Objetivo general" required>
                        <textarea value={form.objetivoE} onChange={e => onUpdate("objetivoE", e.target.value)}
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
                        <input value={form.disenio} onChange={e => onUpdate("disenio", e.target.value)}
                            placeholder="Ej: Cuantitativo, correlacional, corte transversal" style={inp} />
                    </Campo>
                    <Campo label="Población y muestra">
                        <input value={form.muestra} onChange={e => onUpdate("muestra", e.target.value)}
                            placeholder="Ej: 150 estudiantes de pregrado, muestreo aleatorio estratificado" style={inp} />
                    </Campo>
                </div>
                <Campo label="Instrumento de recolección de datos">
                    <input value={form.instrumento} onChange={e => onUpdate("instrumento", e.target.value)}
                        placeholder="Ej: Encuesta tipo Likert, guía de entrevista semiestructurada, ficha de observación..."
                        style={inp} />
                </Campo>
            </div>
            <div className={`expandable-container ${tieneDatos ? 'is-expanded' : ''}`}>
                <div className="expandable-content">
                    <button type="button" onClick={limpiar} className="btn-limpiar">
                        <MdDeleteOutline size={18} />
                        Limpiar sección
                    </button>
                </div>
            </div>
        </Bloque>
    );
}