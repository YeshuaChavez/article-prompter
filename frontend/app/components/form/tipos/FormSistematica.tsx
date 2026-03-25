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
const CAMPOS: (keyof FormData)[] = ["temaS", "objetivoS", "preguntaPico", "criteriosInc", "basesDatos", "criteriosExc"];

export default function FormSistematica({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS.some(k => form[k] !== "");
    const limpiar = () => CAMPOS.forEach(k => onUpdate(k, ""));

    return (
        <Bloque titulo="2. Protocolo de Revisión Sistemática" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <Campo label="Pregunta de investigación (formato PICO/SPIDER)" required>
                    <textarea value={form.preguntaPico} onChange={e => onUpdate("preguntaPico", e.target.value)}
                        rows={2} placeholder="Ej: ¿Cuál es la efectividad del aprendizaje basado en problemas en estudiantes universitarios de salud entre 2015-2024?"
                        style={ta} />
                </Campo>
                <Campo label="Área de investigación" required>
                    <textarea value={form.temaS} onChange={e => onUpdate("temaS", e.target.value)}
                        rows={2} placeholder="Ej: Efectividad del aprendizaje basado en problemas en educación en salud..."
                        style={ta} />
                </Campo>
                <div style={grid2}>
                    <Campo label="Objetivo de la revisión" required>
                        <textarea value={form.objetivoS} onChange={e => onUpdate("objetivoS", e.target.value)}
                            rows={2} placeholder="Ej: Identificar y sintetizar la evidencia sobre..."
                            style={ta} />
                    </Campo>
                    <Campo label="Criterios de inclusión">
                        <textarea value={form.criteriosInc} onChange={e => onUpdate("criteriosInc", e.target.value)}
                            rows={2} placeholder="Ej: Estudios experimentales, publicados 2015-2024, idioma español/inglés..."
                            style={ta} />
                    </Campo>
                </div>
                <div style={grid2}>
                    <Campo label="Bases de datos a consultar">
                        <input value={form.basesDatos} onChange={e => onUpdate("basesDatos", e.target.value)}
                            placeholder="Ej: PubMed, Scopus, Web of Science, Cochrane" style={inp} />
                    </Campo>
                    <Campo label="Criterios de exclusión">
                        <input value={form.criteriosExc} onChange={e => onUpdate("criteriosExc", e.target.value)}
                            placeholder="Ej: Estudios sin grupo control, muestra < 30, sin revisión por pares" style={inp} />
                    </Campo>
                </div>
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