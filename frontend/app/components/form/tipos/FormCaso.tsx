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

const COLOR = "#8e44ad";
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };

export default function FormCaso({ form, onUpdate }: Props) {
    return (
        <Bloque titulo="2. Descripción del Caso" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Campo label="Descripción del caso a analizar" required>
                    <textarea value={form.tema} onChange={e => onUpdate("tema", e.target.value)}
                        rows={2} placeholder="Ej: Transformación digital de la Biblioteca Central UNMSM durante la pandemia COVID-19 (2020-2022)..."
                        style={ta} />
                </Campo>
                <div style={grid2}>
                    <Campo label="Objetivo del estudio" required>
                        <textarea value={form.objetivo} onChange={e => onUpdate("objetivo", e.target.value)}
                            rows={2} placeholder="Ej: Analizar los factores que determinaron el éxito de la transformación digital..."
                            style={ta} />
                    </Campo>
                    <Campo label="Pregunta central del caso">
                        <textarea value={form.hipotesis} onChange={e => onUpdate("hipotesis", e.target.value)}
                            rows={2} placeholder="Ej: ¿Cómo logró la institución mantener la continuidad del servicio ante la crisis?"
                            style={ta} />
                    </Campo>
                </div>
                <div style={grid2}>
                    <Campo label="Unidad de análisis y contexto">
                        <input value={form.keywords} onChange={e => onUpdate("keywords", e.target.value)}
                            placeholder="Ej: Biblioteca universitaria, Lima, Perú, 2020-2022" style={inp} />
                    </Campo>
                    <Campo label="Fuentes de evidencia">
                        <input value={form.restricciones} onChange={e => onUpdate("restricciones", e.target.value)}
                            placeholder="Ej: Entrevistas, documentos institucionales, datos de uso" style={inp} />
                    </Campo>
                </div>
            </div>
        </Bloque>
    );
}