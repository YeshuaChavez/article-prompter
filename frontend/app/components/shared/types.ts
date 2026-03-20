import type { LucideIcon } from "lucide-react";

export interface FormData {
    // ── Datos del autor (comunes a todos) ────────
    nombre: string;
    facultad: string;
    nivel: string;
    docente: string;
 
    // ── Formato y estilo (comunes a todos) ───────
    extension: string;
    citacion: string;
    revista: string;
    idioma: string;
    restricciones: string;
 
    // ── Revisión Teórica ─────────────────────────
    temaT: string;          // Tema o campo teórico a revisar
    objetivoT: string;      // Objetivo de la revisión teórica
    corrientes: string;     // Corrientes o enfoques teóricos
    autores: string;        // Autores o teóricos clave
    periodo: string;        // Período temporal a cubrir
 
    // ── Revisión Sistemática ─────────────────────
    temaS: string;          // Área de investigación
    objetivoS: string;      // Objetivo de la revisión sistemática
    preguntaPico: string;   // Pregunta PICO/SPIDER
    criteriosInc: string;   // Criterios de inclusión
    basesDatos: string;     // Bases de datos a consultar
    criteriosExc: string;   // Criterios de exclusión
 
    // ── Investigación Empírica ───────────────────
    temaE: string;          // Problema de investigación
    objetivoE: string;      // Objetivo general
    hipotesis: string;      // Hipótesis de investigación
    disenio: string;        // Diseño metodológico
    muestra: string;        // Población y muestra
    instrumento: string;    // Instrumento de recolección
 
    // ── Estudio de Caso ──────────────────────────
    temaC: string;          // Descripción del caso a analizar
    objetivoC: string;      // Objetivo del estudio
    preguntaCaso: string;   // Pregunta central del caso
    unidadAnalisis: string; // Unidad de análisis y contexto
    evidencia: string;      // Fuentes de evidencia
}

export interface PromptCard {
    id: string;
    titulo: string;
    descripcion?: string;
    texto: string;
    color: string;
}

export interface RevisionTipo {
    id: string;
    label: string;
    icon: LucideIcon;
    color: string;
    desc: string;
}