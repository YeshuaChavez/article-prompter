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
const CAMPOS: (keyof FormData)[] = [
    "temaM", "objetivoM", "propuestaM",
    "validacionM", "enfoqueM", "poblacionM",
];

export default function FormMetodologico({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS.some(k => form[k] !== "");
    const limpiar = () => CAMPOS.forEach(k => onUpdate(k, ""));

    return (
        <Bloque titulo="2. Datos del Artículo Metodológico" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                <Campo label="Problema y justificación de la propuesta" required>
                    <textarea
                        value={form.temaM}
                        onChange={e => onUpdate("temaM", e.target.value)}
                        rows={2}
                        placeholder="Ej: Ausencia de un instrumento validado para medir competencias digitales docentes en universidades públicas peruanas..."
                        style={ta}
                    />
                </Campo>

                <div style={grid2}>
                    <Campo label="Objetivo del estudio" required>
                        <textarea
                            value={form.objetivoM}
                            onChange={e => onUpdate("objetivoM", e.target.value)}
                            rows={2}
                            placeholder="Ej: Diseñar y validar un instrumento de evaluación de competencias digitales docentes..."
                            style={ta}
                        />
                    </Campo>
                    <Campo label="Descripción del método / modelo propuesto" required>
                        <textarea
                            value={form.propuestaM}
                            onChange={e => onUpdate("propuestaM", e.target.value)}
                            rows={2}
                            placeholder="Ej: Escala tipo Likert de 30 ítems organizada en 5 dimensiones: comunicación, creación, seguridad..."
                            style={ta}
                        />
                    </Campo>
                </div>

                <div style={grid2}>
                    <Campo label="Tipo y enfoque del estudio">
                        <input
                            value={form.enfoqueM}
                            onChange={e => onUpdate("enfoqueM", e.target.value)}
                            placeholder="Ej: Aplicado, cuantitativo, diseño metodológico"
                            style={inp}
                        />
                    </Campo>
                    <Campo label="Población y muestra (si aplica)">
                        <input
                            value={form.poblacionM}
                            onChange={e => onUpdate("poblacionM", e.target.value)}
                            placeholder="Ej: 45 docentes universitarios, muestreo intencional"
                            style={inp}
                        />
                    </Campo>
                </div>

                <Campo label="Proceso de validación">
                    <input
                        value={form.validacionM}
                        onChange={e => onUpdate("validacionM", e.target.value)}
                        placeholder="Ej: Juicio de 5 expertos, prueba piloto con 30 participantes, Alfa de Cronbach = 0.91"
                        style={inp}
                    />
                </Campo>

            </div>
            <div className={`expandable-container ${tieneDatos ? "is-expanded" : ""}`}>
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