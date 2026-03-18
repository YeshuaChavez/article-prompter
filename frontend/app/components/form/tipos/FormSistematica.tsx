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

const COLOR = "#2980b9";
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };

export default function FormSistematica({ form, onUpdate }: Props) {
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
                        <input value={form.restricciones} onChange={e => onUpdate("restricciones", e.target.value)}
                            placeholder="Ej: Estudios sin grupo control, muestra < 30, sin revisión por pares" style={inp} />
                    </Campo>
                </div>
            </div>
        </Bloque>
    );
}