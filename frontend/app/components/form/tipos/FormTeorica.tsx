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