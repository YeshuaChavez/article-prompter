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

const COLOR = "#e67e22";
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };

export default function FormTeorica({ form, onUpdate }: Props) {
    return (
        <Bloque titulo="2. Contenido de la Revisión Teórica" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Campo label="Tema o campo teórico a revisar" required>
                    <textarea value={form.tema} onChange={e => onUpdate("tema", e.target.value)}
                        rows={2} placeholder="Ej: Teorías del aprendizaje constructivista en educación superior..."
                        style={ta} />
                </Campo>
                <div style={grid2}>
                    <Campo label="Objetivo de la revisión" required>
                        <textarea value={form.objetivo} onChange={e => onUpdate("objetivo", e.target.value)}
                            rows={2} placeholder="Ej: Analizar las principales corrientes teóricas sobre..."
                            style={ta} />
                    </Campo>
                    <Campo label="Corrientes o enfoques teóricos a cubrir">
                        <textarea value={form.hipotesis} onChange={e => onUpdate("hipotesis", e.target.value)}
                            rows={2} placeholder="Ej: Constructivismo, cognitivismo, conductismo..."
                            style={ta} />
                    </Campo>
                </div>
                <div style={grid2}>
                    <Campo label="Autores o teóricos clave">
                        <input value={form.keywords} onChange={e => onUpdate("keywords", e.target.value)}
                            placeholder="Ej: Vygotsky, Piaget, Ausubel, Bruner" style={inp} />
                    </Campo>
                    <Campo label="Período temporal a cubrir">
                        <input value={form.restricciones} onChange={e => onUpdate("restricciones", e.target.value)}
                            placeholder="Ej: 2000–2024, últimos 10 años" style={inp} />
                    </Campo>
                </div>
            </div>
        </Bloque>
    );
}