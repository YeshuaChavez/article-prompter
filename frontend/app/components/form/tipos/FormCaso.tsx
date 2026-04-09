"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import Campo from "../../ui/Campo";
import { inp, grid2, TIPOS_ESTUDIO_CASO, DISENOS_CASO, TECNICAS_RECOLECCION } from "../../shared/constants";
import type { FormData, MultiSelectProps } from "../../shared/types";
import { MdDeleteOutline } from "react-icons/md";

// ─── PROPS ────────────────────────────────────────────────────────────────
interface Props {
    form: FormData;
    onUpdate: (key: keyof FormData, value: string | string[]) => void;
}

// ─── ESTILOS LOCALES ──────────────────────────────────────────────────────
const COLOR = "#8e44ad";
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };

const CAMPOS_TEXTO: (keyof FormData)[] = [
    "temaC", "objetivoC", "preguntaCaso",
    "unidadAnalisis", "evidencia", "tipoEstudioC", "disenoCaso",
];

const selectStyle: React.CSSProperties = {
    ...inp,
    cursor: "pointer",
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    paddingRight: 36,
    appearance: "none",
};

// ─── SUB-COMPONENTE: MULTI-SELECT CHIPS ──────────────────────────────────
function MultiSelect({ label, options, selected, onToggle }: MultiSelectProps) {
    return (
        <Campo label={label}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                {options.map((opt) => {
                    const active = selected.includes(opt);
                    return (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => onToggle(opt)}
                            style={{
                                padding: "6px 14px",
                                borderRadius: 20,
                                border: `1.5px solid ${active ? COLOR : "#d1d5db"}`,
                                background: active ? `${COLOR}15` : "#f9fafb",
                                color: active ? COLOR : "#6b7280",
                                fontWeight: active ? 600 : 400,
                                fontSize: 13,
                                cursor: "pointer",
                                transition: "all 0.15s",
                                fontFamily: "inherit",
                            }}
                        >
                            {opt}
                        </button>
                    );
                })}
            </div>
        </Campo>
    );
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────
export default function FormCaso({ form, onUpdate }: Props) {

    const tecnicasSeleccionadas: string[] = Array.isArray(form.tecnicasRecoleccion)
        ? (form.tecnicasRecoleccion as unknown as string[])
        : [];

    const toggleTecnica = (v: string) => {
        const next = tecnicasSeleccionadas.includes(v)
            ? tecnicasSeleccionadas.filter((t) => t !== v)
            : [...tecnicasSeleccionadas, v];
        onUpdate("tecnicasRecoleccion", next);
    };

    const tieneDatos =
        CAMPOS_TEXTO.some((k) => (form[k] as string) !== "") ||
        tecnicasSeleccionadas.length > 0;

    const limpiar = () => {
        CAMPOS_TEXTO.forEach((k) => onUpdate(k, ""));
        onUpdate("tecnicasRecoleccion", []);
    };

    return (
        <Bloque titulo="2. Descripción del Caso" color={COLOR}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                {/* Descripción del caso */}
                <Campo label="Descripción del caso a analizar" required>
                    <textarea
                        value={form.temaC as string}
                        onChange={(e) => onUpdate("temaC", e.target.value)}
                        rows={2}
                        placeholder="Ej: Transformación digital de la Biblioteca Central UNMSM..."
                        style={ta}
                    />
                </Campo>

                {/* Objetivo y Pregunta */}
                <div style={grid2}>
                    <Campo label="Objetivo del estudio" required>
                        <textarea
                            value={form.objetivoC as string}
                            onChange={(e) => onUpdate("objetivoC", e.target.value)}
                            rows={2}
                            placeholder="Ej: Analizar los factores que determinaron el éxito..."
                            style={ta}
                        />
                    </Campo>
                    <Campo label="Pregunta central del caso">
                        <textarea
                            value={form.preguntaCaso as string}
                            onChange={(e) => onUpdate("preguntaCaso", e.target.value)}
                            rows={2}
                            placeholder="Ej: ¿Cómo logró la institución mantener la continuidad?"
                            style={ta}
                        />
                    </Campo>
                </div>

                {/* Unidad de análisis + Diseño del caso */}
                <div style={grid2}>
                    <Campo label="Unidad de análisis y contexto">
                        <input
                            value={form.unidadAnalisis as string}
                            onChange={(e) => onUpdate("unidadAnalisis", e.target.value)}
                            placeholder="Ej: Biblioteca universitaria, Lima, 2020-2022"
                            style={inp}
                        />
                    </Campo>
                    <Campo label="Diseño del caso">
                        <select
                            value={(form.disenoCaso as string) ?? ""}
                            onChange={(e) => onUpdate("disenoCaso", e.target.value)}
                            style={selectStyle}
                        >
                            <option value="">Selecciona un diseño...</option>
                            {DISENOS_CASO.map((d) => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                    </Campo>
                </div>

                {/* Tipo de estudio */}
                <Campo label="Tipo de estudio" required>
                    <select
                        value={form.tipoEstudioC as string}
                        onChange={(e) => onUpdate("tipoEstudioC", e.target.value)}
                        style={selectStyle}
                    >
                        <option value="">Selecciona el tipo de estudio...</option>
                        {TIPOS_ESTUDIO_CASO.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </Campo>

                {/* Técnicas de recolección — chips */}
                <MultiSelect
                    label="Fuentes de evidencia / Técnicas de recolección"
                    options={TECNICAS_RECOLECCION}
                    selected={tecnicasSeleccionadas}
                    onToggle={toggleTecnica}
                />

                {/* Campo libre para otras fuentes */}
                <Campo label="Otras fuentes de evidencia">
                    <input
                        value={form.evidencia as string}
                        onChange={(e) => onUpdate("evidencia", e.target.value)}
                        placeholder="Ej: Documentos institucionales, registros internos..."
                        style={inp}
                    />
                </Campo>

                {/* Botón limpiar */}
                <div className={`expandable-container ${tieneDatos ? "is-expanded" : ""}`}>
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