import type { FormData, PromptCard } from "../../components/shared/types";
import { SECCIONES_POR_TIPO } from "../../components/shared/constants";
import { PROMPTS_TEORICA } from "./teorica";
import { PROMPTS_SISTEMATICA } from "./sistematica";
import { PROMPTS_EMPIRICA } from "./empirica";
import { PROMPTS_CASO } from "./caso";

const BUILDERS: Record<string, Record<string, (form: FormData) => string>> = {
    teorica: PROMPTS_TEORICA,
    sistematica: PROMPTS_SISTEMATICA,
    empirica: PROMPTS_EMPIRICA,
    caso: PROMPTS_CASO,
};

const COLORES_SECCION: Record<string, string> = {
    "Resumen": "#0abf8a",
    "Resumen Estructurado": "#0abf8a",
    "Introducción": "#e74c3c",
    "Metodología de Búsqueda": "#2980b9",
    "Metodología": "#2980b9",
    "Criterios de Inclusión": "#2980b9",
    "Estrategia de Búsqueda": "#8e44ad",
    "Desarrollo Temático": "#e67e22",
    "Síntesis": "#16a085",
    "Discusión": "#f39c12",
    "Hipótesis": "#e67e22",
    "Resultados": "#27ae60",
    "Análisis Estadístico": "#c0392b",
    "Marco Teórico": "#e67e22",
    "Contexto del Caso": "#2980b9",
    "Análisis": "#8e44ad",
    "Hallazgos": "#27ae60",
    "Lecciones Aprendidas": "#16a085",
    "Conclusiones": "#16a085",
    "Referencias": "#718096",
    // Secciones de preparación
    "Reformula tu tema": "#003087",
    "Vacíos temáticos": "#003087",
    "Formula el objetivo": "#003087",
    "Valida el objetivo": "#003087",
    "Esquema de redacción": "#003087",
    // Secciones adicionales
    "Síntesis de Resultados": "#16a085",
    "Palabras clave": "#718096",
    "Títulos propuestos": "#718096",
    "Criterios de Exclusión": "#c0392b",
};

export function buildPrompts(
    tipo: string,
    form: FormData,
    secciones: string[]
): PromptCard[] {
    const builder = BUILDERS[tipo];
    if (!builder) return [];

    // ✅ Aplanar los dos grupos en un array plano
    const grupos = SECCIONES_POR_TIPO[tipo];
    const todasLasSecciones = grupos ? [...grupos.preparacion, ...grupos.redaccion] : [];
    const secc = secciones.length > 0 ? secciones : todasLasSecciones;

    return secc.map((seccion, i) => {
        const generarTexto = builder[seccion];
        return {
            id: `${tipo}-${seccion.toLowerCase().replace(/\s+/g, "-")}-${i}`,
            titulo: `Prompt ${i + 1}: ${seccion}`,
            descripcion: `Sección especializada para ${seccion.toLowerCase()}`,
            color: COLORES_SECCION[seccion] ?? "#4a5568",
            texto: generarTexto
                ? generarTexto(form)
                : `[Prompt para "${seccion}" no disponible aún]`,
        };
    });
}