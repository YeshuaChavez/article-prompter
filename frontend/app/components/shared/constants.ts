import React from "react";
import { BookOpen, Microscope, BarChart2, Landmark, Lightbulb } from "lucide-react";
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
    { id: "investigación_original", label: "Artículo de investigación original", icon: BookOpen, color: "#e67e22", desc: "Estudio basado en datos y evidencia primaria" },
    { id: "revisión", label: "Artículo de revisión", icon: Microscope, color: "#2980b9", desc: "Análisis y síntesis de literatura existente" },
    { id: "metodológico", label: "Artículo Metodológico", icon: BarChart2, color: "#27ae60", desc: "Diseño o validación de métodos e instrumentos" },
    { id: "caso", label: "Estudio de Caso", icon: Landmark, color: "#8e44ad", desc: "Análisis profundo de un caso específico" },
    { id: "reflexión", label: "Artículo de Reflexión", icon: Lightbulb, color: "#f1c40f", desc: "Perspectiva crítica y analítica del autor" },
];

// ─── DATOS DE SELECTORES ──────────────────────────────────────────────────
export const FACULTADES = [
    "Medicina Humana", "Odontología", "Farmacia y Bioquímica", "Medicina Veterinaria", "Psicología",
    "Ciencias Biológicas", "Ciencias Físicas", "Ciencias Matemáticas", "Química e Ingeniería Química",
    "Ingeniería de Sistemas e Informática", "Ingeniería Electrónica y Eléctrica", "Ingeniería Geológica, Minera, Metalúrgica y Geográfica", "Ingeniería Industrial",
    "Ciencias Administrativas", "Ciencias Contables", "Ciencias Económicas",
    "Letras y Ciencias Humanas", "Derecho y Ciencia Política", "Ciencias Sociales", "Educación",
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

export const TIPOS_REVISION = [
    {
        value: "Revisión Narrativa",
        desc: "Síntesis cualitativa y descriptiva de la literatura sin protocolo estandarizado",
    },
    {
        value: "Revisión Sistemática",
        desc: "Búsqueda exhaustiva con protocolo riguroso, criterios explícitos y diagrama PRISMA",
    },
    {
        value: "Meta-análisis",
        desc: "Revisión sistemática con análisis estadístico combinado de resultados cuantitativos",
    },
];

export const IDIOMAS = ["Español", "Inglés", "Portugués", "Francés", "Alemán", "Italiano", "Chino (Mandarín)", "Japonés", "Árabe", "Ruso"];

export const EXTENSIONES = [
    "Corto (3.000–5.000 palabras)",
    "Estándar (5.000–8.000 palabras)",
    "Extenso (8.000–12.000 palabras)",
];

export const REVISTAS = [
    "Scopus Q1", "Scopus Q2", "SciELO", "Redalyc", "Sin especificar",
];
export const TIPOS_INVESTIGACION = [
    "Cuantitativo",
    "Cualitativo",
    "Mixto",
];
export const TIPOS_ESTUDIO_CASO = ["Cualitativo", "Descriptivo", "Exploratorio"];

export const DISENOS_CASO = ["Caso Único", "Caso Múltiple"];

export const TECNICAS_RECOLECCION = [
    "Entrevistas", 
    "Observación", 
    "Análisis documental", 
    "Análisis temático"
];
export const ENFOQUES_INVESTIGACION: Record<string, string[]> = {
    Cuantitativo: [
        "Descriptivo",
        "Correlacional",
        "Explicativo / Causal",
        "Experimental",
        "Cuasi-experimental",
        "No experimental",
        "Transversal",
        "Longitudinal",
    ],
    Cualitativo: [
        "Fenomenológico",
        "Etnográfico",
        "Investigación-acción",
        "Teoría fundamentada",
        "Estudio de caso",
        "Narrativo",
    ],
    Mixto: [
        "Exploratorio secuencial",
        "Explicativo secuencial",
        "Convergente paralelo",
        "Transformador",
    ],
};
const PREPARACION_COMUN = [
    "Reformula tu tema",
    "Vacíos temáticos",
    "Formula el objetivo",
    "Valida el objetivo",
    "Esquema de redacción",
];

export const SECCIONES_POR_TIPO: Record<string, { preparacion: string[]; redaccion: string[] }> = {
    investigación_original: {
        preparacion: [
            "Reformula tu tema",
            "Vacíos temáticos",
            "Formula el objetivo",
            "Autores recomendados",
            "Esquema de redacción",
        ],
        redaccion: [
            "Introducción",
            "Metodología",
            "Resultados",
            "Discusión",
            "Conclusiones",
            "Referencias",
            "Resumen",
            "Palabras clave",
            "Títulos propuestos",
        ],
    },
    revisión: {
        preparacion: [
            "Reformula tu tema",
            "Enfoque de revisión",
            "Formula el objetivo",
            "Estrategia de búsqueda",
            "Criterios y delimitación",
            "Esquema de redacción",
        ],
        redaccion: [
            "Introducción",
            "Metodología",
            "Desarrollo",
            "Discusión",
            "Conclusiones",
            "Referencias",
            "Resumen",
            "Palabras clave",
            "Títulos propuestos",
        ],
    },
    metodológico: {
        preparacion: PREPARACION_COMUN,
        redaccion: [
            "Introducción",
            "Fundamentación teórica",
            "Metodología",
            "Desarrollo de la propuesta",
            "Validación",
            "Resultados",
            "Discusión",
            "Conclusiones",
            "Resumen",
        ],
    },
    caso: {
        preparacion: PREPARACION_COMUN,
        redaccion: [
            "Introducción",
            "Descripción del caso",
            "Metodología",
            "Implementación",
            "Resultados / Impacto",
            "Discusión",
            "Conclusiones",
            "Resumen",
            "Palabras clave",
        ],
    },
    reflexión: {
        preparacion: PREPARACION_COMUN,
        redaccion: [
            "Introducción",
            "Desarrollo argumentativo",
            "Discusión",
            "Conclusiones",
            "Referencias",
            "Resumen",
            "Palabras clave",
            "Títulos propuestos",
        ],
    },
};