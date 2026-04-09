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

    // ── Investigación Original ───────────────────
    temaI: string;          // Tema / problema de investigación
    objetivoI: string;      // Objetivo general
    hipotesisI: string;     // Hipótesis (si aplica)
    tipoI: string;          // Tipo de investigación (Cuantitativo, Cualitativo, Mixto)
    enfoqueI: string;       // Enfoque de investigación (dependiente de tipoI)
    poblacionI: string;     // Población y muestra
    instrumentosI: string;  // Técnicas e instrumentos
    vacioI: string;
    autoresI: string;

    // ── Artículo de Revisión ─────────────────────
    temaRev: string;        // Tema central de la revisión
    objetivoRev: string;    // Objetivo de la revisión
    tipoRevision: string;   // Tipo de revisión (sistemática, narrativa, etc.)
    basesDatos: string;     // Bases de datos consultadas
    periodoRev: string;     // Período de análisis
    criteriosRev: string;   // Criterios de inclusión / exclusión

    // ── Artículo Metodológico ────────────────────
    temaM: string;          // Problema y justificación de la propuesta
    objetivoM: string;      // Objetivo del estudio
    propuestaM: string;     // Descripción del método / modelo propuesto
    enfoqueM: string;       // Tipo y enfoque del estudio
    poblacionM: string;     // Población y muestra (si aplica)
    validacionM: string;    // Proceso de validación

    // ── Estudio de Caso ──────────────────────────
    temaC: string;          // Descripción del caso a analizar
    objetivoC: string;      // Objetivo del estudio
    preguntaCaso: string;   // Pregunta central del caso
    unidadAnalisis: string; // Unidad de análisis y contexto
    evidencia: string;      // Fuentes de evidencia
    tipoEstudioC: string;   // Tipo de estudio (cualitativo, descriptivo, etc.)
    disenoCaso: string;
    tecnicasRecoleccion: string[];

    // ── Artículo de Reflexión ────────────────────
    temaRf: string;         // Tema central y postura del autor
    objetivoRf: string;     // Objetivo del artículo
    preguntaRf: string;     // Pregunta de reflexión
    enfoqueRf: string;      // Enfoque o perspectiva teórica
    autoresRf: string;      // Autores / teorías de referencia
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

export interface MultiSelectProps {
    label: string;
    options: string[];
    selected: string[];
    onToggle: (v: string) => void;
}