"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import Campo from "../../ui/Campo";
import { inp, grid2 } from "../../shared/constants";
import type { FormData } from "../../shared/types";

interface Props {
    form: FormData;
    onUpdate: (key: keyof FormData, value: string) => void;
}

const COLOR = "#27ae60";
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };

export default function FormEmpirica({ form, onUpdate }: Props) {
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
                        <input value={form.restricciones} onChange={e => onUpdate("restricciones", e.target.value)}
                            placeholder="Ej: 150 estudiantes de pregrado, muestreo aleatorio estratificado" style={inp} />
                    </Campo>
                </div>
            </div>
        </Bloque>
    );
}