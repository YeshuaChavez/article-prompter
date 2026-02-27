import React from "react";
import { BookOpen, Microscope, BarChart2, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { RevisionTipo } from "./types";

// ─── COLORES ───────────────────────────────────────────────────────────────
export const COLORES = {
    azul: "#003087",
    rojo: "#C8102E",
    dorado: "#C9A84C",
    grisClaro: "#f4f5f7",
    grisOscuro: "#2d3748",
    blanco: "#ffffff",
};

// ─── ESTILOS COMPARTIDOS ──────────────────────────────────────────────────
export const inp: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid #d1d5db",
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "inherit",
    background: "#fff",
    color: "#1a202c",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
};

export const grid2: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
};

// ─── DATOS DE TIPOS DE REVISIÓN ───────────────────────────────────────────
export const REVISIONES: RevisionTipo[] = [
    { id: "teorica", label: "Revisión Teórica", icon: BookOpen, color: "#e67e22", desc: "Análisis y síntesis de literatura existente" },
    { id: "sistematica", label: "Revisión Sistemática", icon: Microscope, color: "#2980b9", desc: "Revisión exhaustiva con criterios explícitos" },
    { id: "empirica", label: "Investigación Empírica", icon: BarChart2, color: "#27ae60", desc: "Estudio basado en datos y evidencia" },
    { id: "caso", label: "Estudio de Caso", icon: Landmark, color: "#8e44ad", desc: "Análisis profundo de un caso específico" },
];

// ─── DATOS DE SELECTORES ──────────────────────────────────────────────────
export const FACULTADES = [
    "Letras", "Medicina", "Ingeniería de Sistemas", "Derecho",
    "Economía", "Psicología", "Arquitectura", "Ciencias",
];

export const ROLES = [
    "Estudiante de pregrado", "Estudiante de posgrado",
    "Docente / Investigador", "Profesional independiente",
];

export const NIVELES = [
    "Pregrado", "Maestría", "Doctorado", "Posdoctorado",
];

export const CITAS = [
    "APA 7.ª edición", "Vancouver", "Chicago", "MLA", "Harvard", "IEEE",
];

export const IDIOMAS = ["Español", "Inglés", "Portugués", "Francés"];

export const EXTENSIONES = [
    "Corto (3.000–5.000 palabras)",
    "Estándar (5.000–8.000 palabras)",
    "Extenso (8.000–12.000 palabras)",
];

export const REVISTAS = [
    "Scopus Q1", "Scopus Q2", "SciELO", "Redalyc", "Sin especificar",
];

export const SECCIONES_POR_TIPO: Record<string, string[]> = {
    teorica: ["Resumen", "Introducción", "Marco Teórico", "Metodología", "Resultados", "Discusión", "Conclusiones", "Referencias"],
    sistematica: ["Resumen Estructurado", "Introducción", "Criterios de Inclusión", "Estrategia de Búsqueda", "Síntesis", "Conclusiones"],
    empirica: ["Resumen", "Introducción", "Hipótesis", "Metodología", "Resultados", "Análisis Estadístico", "Discusión", "Conclusiones"],
    caso: ["Resumen", "Introducción", "Contexto del Caso", "Análisis", "Hallazgos", "Lecciones Aprendidas", "Conclusiones"],
};