"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import Campo from "../../ui/Campo";
import { inp, TIPOS_INVESTIGACION, ENFOQUES_INVESTIGACION } from "../../shared/constants";
import type { FormData } from "../../shared/types";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
    form: FormData;
    onUpdate: (key: keyof FormData, value: string) => void;
}

const COLOR = "#e67e22";
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 65 };

const CAMPOS: (keyof FormData)[] = [
    "temaI", "vacioI", "objetivoI", "hipotesisI", 
    "tipoI", "enfoqueI", "poblacionI", "instrumentosI", "autoresI"
];

export default function FormInvestigacion({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS.some(k => form[k] !== "");
    const limpiar = () => CAMPOS.forEach(k => onUpdate(k, ""));

    const handleTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onUpdate("tipoI", e.target.value);
        onUpdate("enfoqueI", ""); 
    };

    return (
        <Bloque titulo="2. Datos del Artículo de Investigación Original" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

                {/* 1. Definición del Problema */}
                <Campo label="Tema / problema de investigación" required>
                    <textarea
                        value={form.temaI}
                        onChange={e => onUpdate("temaI", e.target.value)}
                        rows={2}
                        placeholder="Ej: Impacto del uso de inteligencia artificial en el rendimiento académico..."
                        style={ta}
                    />
                </Campo>

                <Campo label="Vacío temático (Gap de conocimiento)" required>
                    <textarea
                        value={form.vacioI || ""}
                        onChange={e => onUpdate("vacioI", e.target.value)}
                        rows={2}
                        placeholder="¿Qué falta por investigar? Ej: No existen estudios previos en el contexto local sobre..."
                        style={ta}
                    />
                </Campo>

                {/* 2. Dirección y Metas */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Campo label="Objetivo general" required>
                        <textarea
                            value={form.objetivoI}
                            onChange={e => onUpdate("objetivoI", e.target.value)}
                            rows={2}
                            placeholder="Ej: Determinar la relación entre..."
                            style={ta}
                        />
                    </Campo>
                    <Campo label="Hipótesis (si aplica)">
                        <textarea
                            value={form.hipotesisI}
                            onChange={e => onUpdate("hipotesisI", e.target.value)}
                            rows={2}
                            placeholder="Ej: El uso de IA se asocia positivamente..."
                            style={ta}
                        />
                    </Campo>
                </div>

                {/* 3. Metodología */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Campo label="Tipo de investigación" required>
                        <select
                            value={form.tipoI}
                            onChange={handleTipoChange}
                            style={inp}
                        >
                            <option value="">Selecciona el tipo...</option>
                            {TIPOS_INVESTIGACION.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </Campo>

                    <Campo label="Enfoque de investigación" required>
                        <select
                            value={form.enfoqueI}
                            onChange={e => onUpdate("enfoqueI", e.target.value)}
                            disabled={!form.tipoI}
                            style={{
                                ...inp,
                                color: !form.tipoI ? "#9ca3af" : "#1a202c",
                                cursor: !form.tipoI ? "not-allowed" : "pointer",
                            }}
                        >
                            <option value="">
                                {form.tipoI ? "Selecciona el enfoque..." : "Primero elige el tipo"}
                            </option>
                            {(ENFOQUES_INVESTIGACION[form.tipoI] ?? []).map(e => (
                                <option key={e} value={e}>{e}</option>
                            ))}
                        </select>
                    </Campo>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Campo label="Población y muestra">
                        <input
                            value={form.poblacionI}
                            onChange={e => onUpdate("poblacionI", e.target.value)}
                            placeholder="Ej: 320 estudiantes universitarios..."
                            style={inp}
                        />
                    </Campo>

                    <Campo label="Técnicas e instrumentos">
                        <input
                            value={form.instrumentosI}
                            onChange={e => onUpdate("instrumentosI", e.target.value)}
                            placeholder="Ej: Encuesta tipo Likert / Entrevista..."
                            style={inp}
                        />
                    </Campo>
                </div>

                {/* 4. Identificación Final */}
                <Campo label="Autores recomendados">
                    <input
                        value={form.autoresI || ""}
                        onChange={e => onUpdate("autoresI", e.target.value)}
                        placeholder="Ej: Nombre Completo (Institución) - ORCID"
                        style={inp}
                    />
                </Campo>

                {/* Botón Limpiar */}
                <div className={`expandable-container ${tieneDatos ? "is-expanded" : ""}`} style={{ marginTop: 4 }}>
                    <div className="expandable-content">
                        <button type="button" onClick={limpiar} className="btn-limpiar">
                            <MdDeleteOutline size={18} />
                            Limpiar sección
                        </button>
                    </div>
                </div>
            </div>
        </Bloque>
    );
}