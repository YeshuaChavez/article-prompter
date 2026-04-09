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

const COLOR = "#f1c40f";
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };
const CAMPOS: (keyof FormData)[] = [
    "temaRf", "objetivoRf", "preguntaRf",
    "enfoqueRf", "autoresRf",
];

export default function FormReflexion({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS.some(k => form[k] !== "");
    const limpiar = () => CAMPOS.forEach(k => onUpdate(k, ""));

    return (
        <Bloque titulo="2. Datos del Artículo de Reflexión" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

                <Campo label="Tema central y postura del autor" required>
                    <textarea
                        value={form.temaRf}
                        onChange={e => onUpdate("temaRf", e.target.value)}
                        rows={2}
                        placeholder="Ej: La deshumanización de la atención médica ante el avance de la inteligencia artificial diagnóstica..."
                        style={ta}
                    />
                </Campo>

                <div style={grid2}>
                    <Campo label="Objetivo del artículo" required>
                        <textarea
                            value={form.objetivoRf}
                            onChange={e => onUpdate("objetivoRf", e.target.value)}
                            rows={2}
                            placeholder="Ej: Reflexionar críticamente sobre las implicaciones éticas del uso de IA en el diagnóstico clínico..."
                            style={ta}
                        />
                    </Campo>
                    <Campo label="Pregunta de reflexión">
                        <textarea
                            value={form.preguntaRf}
                            onChange={e => onUpdate("preguntaRf", e.target.value)}
                            rows={2}
                            placeholder="Ej: ¿Puede la IA reemplazar el juicio clínico sin comprometer la relación médico-paciente?"
                            style={ta}
                        />
                    </Campo>
                </div>

                <div style={grid2}>
                    <Campo label="Enfoque o perspectiva teórica">
                        <input
                            value={form.enfoqueRf}
                            onChange={e => onUpdate("enfoqueRf", e.target.value)}
                            placeholder="Ej: Bioética, filosofía de la tecnología, hermenéutica crítica"
                            style={inp}
                        />
                    </Campo>
                    <Campo label="Autores / teorías de referencia">
                        <input
                            value={form.autoresRf}
                            onChange={e => onUpdate("autoresRf", e.target.value)}
                            placeholder="Ej: Habermas, Foucault, Zubiri, Nussbaum"
                            style={inp}
                        />
                    </Campo>
                </div>

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