"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import Campo from "../../ui/Campo";
import { inp, grid2, TIPOS_REVISION } from "../../shared/constants";
import type { FormData } from "../../shared/types";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
    form: FormData;
    onUpdate: (key: keyof FormData, value: string) => void;
}

const COLOR = "#2980b9";
// Altura mínima ajustada para compactar el bloque
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 65 };

const CAMPOS: (keyof FormData)[] = [
    "temaRev", "objetivoRev", "tipoRevision",
    "basesDatos", "criteriosRev", "periodoRev",
];

export default function FormRevision({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS.some(k => form[k] !== "");
    const limpiar = () => CAMPOS.forEach(k => onUpdate(k, ""));

    const descripcionTipo = TIPOS_REVISION.find(t => t.value === form.tipoRevision)?.desc;

    return (
        <Bloque titulo="2. Datos del Artículo de Revisión" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

                {/* Tema a ancho completo */}
                <Campo label="Tema central de la revisión" required>
                    <textarea
                        value={form.temaRev}
                        onChange={e => onUpdate("temaRev", e.target.value)}
                        rows={2}
                        placeholder="Ej: Estrategias de gamificación en la educación superior (2015–2024)..."
                        style={ta}
                    />
                </Campo>

                {/* Rejilla: Objetivo y Tipo de Revisión */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Campo label="Objetivo de la revisión" required>
                        <textarea
                            value={form.objetivoRev}
                            onChange={e => onUpdate("objetivoRev", e.target.value)}
                            rows={2}
                            placeholder="Ej: Sintetizar la evidencia sobre..."
                            style={ta}
                        />
                    </Campo>

                    <Campo label="Tipo de revisión" required>
                        <select
                            value={form.tipoRevision}
                            onChange={e => onUpdate("tipoRevision", e.target.value)}
                            style={inp}
                        >
                            <option value="">Selecciona el tipo...</option>
                            {TIPOS_REVISION.map(t => (
                                <option key={t.value} value={t.value}>
                                    {t.value}
                                </option>
                            ))}
                        </select>
                        {descripcionTipo && (
                            <p style={{
                                margin: "4px 0 0",
                                fontSize: 11,
                                color: "#6b7280",
                                lineHeight: 1.3,
                                fontStyle: "italic",
                            }}>
                                {descripcionTipo}
                            </p>
                        )}
                    </Campo>
                </div>

                {/* Rejilla: Metodología de búsqueda */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Campo label="Bases de datos consultadas">
                        <input
                            value={form.basesDatos}
                            onChange={e => onUpdate("basesDatos", e.target.value)}
                            placeholder="Ej: Scopus, WOS, SciELO..."
                            style={inp}
                        />
                    </Campo>
                    <Campo label="Período de análisis">
                        <input
                            value={form.periodoRev}
                            onChange={e => onUpdate("periodoRev", e.target.value)}
                            placeholder="Ej: 2015–2024"
                            style={inp}
                        />
                    </Campo>
                </div>

                {/* Criterios a ancho completo para facilitar la lectura de listas */}
                <Campo label="Criterios de inclusión / exclusión">
                    <input
                        value={form.criteriosRev}
                        onChange={e => onUpdate("criteriosRev", e.target.value)}
                        placeholder="Ej: Artículos en español e inglés, indexados, con acceso completo..."
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