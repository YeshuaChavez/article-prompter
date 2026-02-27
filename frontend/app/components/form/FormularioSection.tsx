"use client";
import React from "react";
import Bloque from "../ui/Bloque";
import Campo from "../ui/Campo";
import {
    COLORES, SECCIONES_POR_TIPO, FACULTADES, CITAS,
    NIVELES, REVISTAS, ROLES, IDIOMAS, EXTENSIONES, inp, grid2,
} from "../shared/constants";
import type { FormData } from "../shared/types";

interface Props {
    tipoActivo: string;
    form: FormData;
    secciones: string[];
    onUpdate: (key: keyof FormData, value: string) => void;
    onToggleSeccion: (s: string) => void;
    onGenerar: () => void;
}

const sel: React.CSSProperties = { ...inp, cursor: "pointer" };
const ta = (rows = 2): React.CSSProperties => ({ ...inp, resize: "vertical", minHeight: rows * 40 });

// ─── BLOQUE COMÚN: Datos del Autor ───────────────────────────────────────────
function BloqueAutor({ form, onUpdate }: Pick<Props, "form" | "onUpdate">) {
    return (
        <Bloque titulo="1. Datos del Autor" color={COLORES.azul}>
            <div style={grid2}>
                <Campo label="Nombre completo">
                    <input value={form.nombre} onChange={e => onUpdate("nombre", e.target.value)}
                        placeholder="Ej: María García López" style={inp} />
                </Campo>
                <Campo label="Rol">
                    <select value={form.rol} onChange={e => onUpdate("rol", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {ROLES.map(r => <option key={r}>{r}</option>)}
                    </select>
                </Campo>
                <Campo label="Facultad">
                    <select value={form.facultad} onChange={e => onUpdate("facultad", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {FACULTADES.map(f => <option key={f}>{f}</option>)}
                    </select>
                </Campo>
                <Campo label="Nivel académico">
                    <select value={form.nivel} onChange={e => onUpdate("nivel", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {NIVELES.map(n => <option key={n}>{n}</option>)}
                    </select>
                </Campo>
                <Campo label="Docente / Asesor">
                    <input value={form.docente} onChange={e => onUpdate("docente", e.target.value)}
                        placeholder="Nombre del docente (opcional)" style={inp} />
                </Campo>
            </div>
        </Bloque>
    );
}

// ─── BLOQUE COMÚN: Formato y Estilo ──────────────────────────────────────────
function BloqueFormato({ form, onUpdate }: Pick<Props, "form" | "onUpdate">) {
    return (
        <Bloque titulo="Formato y Estilo" color={COLORES.dorado}>
            <div style={grid2}>
                <Campo label="Extensión del artículo">
                    <select value={form.extension} onChange={e => onUpdate("extension", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {EXTENSIONES.map(e => <option key={e}>{e}</option>)}
                    </select>
                </Campo>
                <Campo label="Norma de citación">
                    <select value={form.citacion} onChange={e => onUpdate("citacion", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {CITAS.map(c => <option key={c}>{c}</option>)}
                    </select>
                </Campo>
                <Campo label="Idioma">
                    <select value={form.idioma} onChange={e => onUpdate("idioma", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {IDIOMAS.map(i => <option key={i}>{i}</option>)}
                    </select>
                </Campo>
                <Campo label="Revista objetivo">
                    <select value={form.revista} onChange={e => onUpdate("revista", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {REVISTAS.map(r => <option key={r}>{r}</option>)}
                    </select>
                </Campo>
            </div>
            <div style={{ marginTop: 14 }}>
                <Campo label="Restricciones o instrucciones especiales">
                    <textarea value={form.restricciones} onChange={e => onUpdate("restricciones", e.target.value)}
                        rows={2} placeholder="Ej: Evitar fuentes anteriores a 2018, perspectiva latinoamericana..."
                        style={ta()} />
                </Campo>
            </div>
        </Bloque>
    );
}

// ─── BLOQUE COMÚN: Secciones + Botón Generar ─────────────────────────────────
function BloqueSecciones({ tipoActivo, secciones, onToggleSeccion, onGenerar, color }: {
    tipoActivo: string; secciones: string[];
    onToggleSeccion: (s: string) => void; onGenerar: () => void; color: string;
}) {
    const disponibles = SECCIONES_POR_TIPO[tipoActivo] ?? [];
    return (
        <>
            <Bloque titulo="Secciones del Documento" color="#8e44ad">
                <p style={{ fontSize: 12, color: "#718096", margin: "0 0 12px" }}>
                    Selecciona las secciones a incluir (si no seleccionas, se usarán todas).
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {disponibles.map(s => {
                        const activa = secciones.includes(s);
                        return (
                            <button key={s} onClick={() => onToggleSeccion(s)} style={{
                                padding: "7px 14px", borderRadius: 20,
                                border: `1.5px solid ${activa ? "#8e44ad" : "#e2e8f0"}`,
                                background: activa ? "#8e44ad" : "#fff",
                                color: activa ? "#fff" : "#4a5568",
                                fontSize: 13, cursor: "pointer", fontFamily: "inherit",
                                transition: "all 0.15s", fontWeight: activa ? 600 : 400,
                            }}>
                                {activa ? "✓ " : ""}{s}
                            </button>
                        );
                    })}
                </div>
            </Bloque>

            <div style={{ textAlign: "center", marginTop: 8 }}>
                <button onClick={onGenerar} style={{
                    padding: "14px 40px",
                    background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                    color: "#fff", border: "none", borderRadius: 10,
                    fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                    boxShadow: `0 4px 14px ${color}55`,
                    transition: "transform 0.15s, box-shadow 0.15s", letterSpacing: 0.3,
                }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 8px 24px ${color}66`;
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 4px 14px ${color}55`;
                    }}>
                    ⚡ Generar Prompts Académicos
                </button>
                <p style={{ fontSize: 11, color: "#a0aec0", marginTop: 10 }}>
                    Se generarán 6 prompts listos para usar en cualquier IA
                </p>
            </div>
        </>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FORMULARIOS ESPECÍFICOS POR TIPO
// ═══════════════════════════════════════════════════════════════════════════════

// ── 📖 REVISIÓN TEÓRICA ───────────────────────────────────────────────────────
function FormTeorica({ form, onUpdate }: Pick<Props, "form" | "onUpdate">) {
    const COLOR = "#e67e22";
    return (
        <>
            <Bloque titulo="2. Contenido de la Revisión Teórica" color={COLOR}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <Campo label="Tema o campo teórico a revisar" required>
                        <textarea value={form.tema} onChange={e => onUpdate("tema", e.target.value)}
                            rows={2} placeholder="Ej: Teorías del aprendizaje constructivista en educación superior..."
                            style={ta()} />
                    </Campo>
                    <div style={grid2}>
                        <Campo label="Objetivo de la revisión" required>
                            <textarea value={form.objetivo} onChange={e => onUpdate("objetivo", e.target.value)}
                                rows={2} placeholder="Ej: Analizar las principales corrientes teóricas sobre..."
                                style={ta()} />
                        </Campo>
                        <Campo label="Corrientes o enfoques teóricos a cubrir">
                            <textarea value={form.hipotesis} onChange={e => onUpdate("hipotesis", e.target.value)}
                                rows={2} placeholder="Ej: Constructivismo, cognitivismo, conductismo..."
                                style={ta()} />
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
        </>
    );
}

// ── 🔬 REVISIÓN SISTEMÁTICA ───────────────────────────────────────────────────
function FormSistematica({ form, onUpdate }: Pick<Props, "form" | "onUpdate">) {
    const COLOR = "#2980b9";
    return (
        <>
            <Bloque titulo="2. Protocolo de Revisión Sistemática" color={COLOR}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <Campo label="Pregunta de investigación (formato PICO/SPIDER)" required>
                        <textarea value={form.tema} onChange={e => onUpdate("tema", e.target.value)}
                            rows={2} placeholder="Ej: ¿Cuál es la efectividad del aprendizaje basado en problemas en estudiantes universitarios de salud entre 2015-2024?"
                            style={ta()} />
                    </Campo>
                    <div style={grid2}>
                        <Campo label="Objetivo de la revisión" required>
                            <textarea value={form.objetivo} onChange={e => onUpdate("objetivo", e.target.value)}
                                rows={2} placeholder="Ej: Identificar y sintetizar la evidencia sobre..."
                                style={ta()} />
                        </Campo>
                        <Campo label="Criterios de inclusión">
                            <textarea value={form.hipotesis} onChange={e => onUpdate("hipotesis", e.target.value)}
                                rows={2} placeholder="Ej: Estudios experimentales, publicados 2015-2024, idioma español/inglés..."
                                style={ta()} />
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
        </>
    );
}

// ── 📊 INVESTIGACIÓN EMPÍRICA ─────────────────────────────────────────────────
function FormEmpirica({ form, onUpdate }: Pick<Props, "form" | "onUpdate">) {
    const COLOR = "#27ae60";
    return (
        <>
            <Bloque titulo="2. Diseño de la Investigación Empírica" color={COLOR}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <Campo label="Problema de investigación" required>
                        <textarea value={form.tema} onChange={e => onUpdate("tema", e.target.value)}
                            rows={2} placeholder="Ej: Impacto del uso de TIC en el rendimiento académico de estudiantes universitarios..."
                            style={ta()} />
                    </Campo>
                    <div style={grid2}>
                        <Campo label="Objetivo general" required>
                            <textarea value={form.objetivo} onChange={e => onUpdate("objetivo", e.target.value)}
                                rows={2} placeholder="Ej: Determinar la relación entre el uso de TIC y el rendimiento académico..."
                                style={ta()} />
                        </Campo>
                        <Campo label="Hipótesis de investigación" required>
                            <textarea value={form.hipotesis} onChange={e => onUpdate("hipotesis", e.target.value)}
                                rows={2} placeholder="Ej: H1: El uso intensivo de TIC se correlaciona positivamente con el rendimiento..."
                                style={ta()} />
                        </Campo>
                    </div>
                    <div style={grid2}>
                        <Campo label="Diseño metodológico">
                            <input value={form.keywords} onChange={e => onUpdate("keywords", e.target.value)}
                                placeholder="Ej: Cuantitativo, correlacional, corte transversal" style={inp} />
                        </Campo>
                        <Campo label="Población y muestra">
                            <input value={form.restricciones} onChange={e => onUpdate("restricciones", e.target.value)}
                                placeholder="Ej: 150 estudiantes de pregrado, muestreo aleatorio estratificado" style={inp} />
                        </Campo>
                    </div>
                </div>
            </Bloque>
        </>
    );
}

// ── 🏛️ ESTUDIO DE CASO ────────────────────────────────────────────────────────
function FormCaso({ form, onUpdate }: Pick<Props, "form" | "onUpdate">) {
    const COLOR = "#8e44ad";
    return (
        <>
            <Bloque titulo="2. Descripción del Caso" color={COLOR}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <Campo label="Descripción del caso a analizar" required>
                        <textarea value={form.tema} onChange={e => onUpdate("tema", e.target.value)}
                            rows={2} placeholder="Ej: Transformación digital de la Biblioteca Central UNMSM durante la pandemia COVID-19 (2020-2022)..."
                            style={ta()} />
                    </Campo>
                    <div style={grid2}>
                        <Campo label="Objetivo del estudio" required>
                            <textarea value={form.objetivo} onChange={e => onUpdate("objetivo", e.target.value)}
                                rows={2} placeholder="Ej: Analizar los factores que determinaron el éxito de la transformación digital..."
                                style={ta()} />
                        </Campo>
                        <Campo label="Pregunta central del caso">
                            <textarea value={form.hipotesis} onChange={e => onUpdate("hipotesis", e.target.value)}
                                rows={2} placeholder="Ej: ¿Cómo logró la institución mantener la continuidad del servicio ante la crisis?"
                                style={ta()} />
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
        </>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL — decide qué formulario renderizar
// ═══════════════════════════════════════════════════════════════════════════════
const TIPO_CONFIG: Record<string, { color: string; label: string }> = {
    teorica: { color: "#e67e22", label: "Revisión Teórica" },
    sistematica: { color: "#2980b9", label: "Revisión Sistemática" },
    empirica: { color: "#27ae60", label: "Investigación Empírica" },
    caso: { color: "#8e44ad", label: "Estudio de Caso" },
};

export default function FormularioSection({
    tipoActivo, form, secciones, onUpdate, onToggleSeccion, onGenerar,
}: Props) {
    const cfg = TIPO_CONFIG[tipoActivo] ?? { color: COLORES.azul, label: "" };

    const FormEspecifico = {
        teorica: FormTeorica,
        sistematica: FormSistematica,
        empirica: FormEmpirica,
        caso: FormCaso,
    }[tipoActivo] ?? FormTeorica;

    return (
        <div style={{ padding: "28px 32px 48px", maxWidth: 880, margin: "0 auto" }}>

            {/* Etiqueta del tipo activo */}
            <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 16px", borderRadius: 20, marginBottom: 20,
                background: cfg.color + "15",
                border: `1.5px solid ${cfg.color}40`,
                fontSize: 12, fontWeight: 700, color: cfg.color,
                letterSpacing: 0.5, textTransform: "uppercase",
            }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: cfg.color, display: "inline-block" }} />
                {cfg.label}
            </div>

            {/* Bloque 1 — igual para todos */}
            <BloqueAutor form={form} onUpdate={onUpdate} />

            {/* Bloque 2 — específico por tipo */}
            <FormEspecifico form={form} onUpdate={onUpdate} />

            {/* Bloque 3 — Formato (igual para todos) */}
            <BloqueFormato form={form} onUpdate={onUpdate} />

            {/* Bloque 4 — Secciones + Generar */}
            <BloqueSecciones
                tipoActivo={tipoActivo}
                secciones={secciones}
                onToggleSeccion={onToggleSeccion}
                onGenerar={onGenerar}
                color={cfg.color}
            />
        </div>
    );
}