import type { FormData } from "../../components/shared/types";

export const PROMPTS_SISTEMATICA: Record<string, (form: FormData) => string> = {

    "Resumen Estructurado": (form) => `Actúa como redactor experto en revisiones sistemáticas con experiencia en publicación en revistas ${form.revista || "Scopus Q1"}.

Redacta el Resumen Estructurado (structured abstract) para la revisión sistemática sobre:

PREGUNTA DE INVESTIGACIÓN: "${form.tema || "[pregunta no especificada]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
AUTOR: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}

El resumen estructurado debe incluir estas secciones etiquetadas:
- ANTECEDENTES: contexto y justificación
- OBJETIVO: propósito de la revisión
- MÉTODOS: bases de datos, criterios, período
- RESULTADOS: número de estudios incluidos y hallazgos clave
- CONCLUSIONES: implicaciones principales

Extensión total: 250–300 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Introducción": (form) => `Actúa como investigador experto en revisiones sistemáticas y medicina basada en evidencia para la Facultad de ${form.facultad || "[facultad]"}.

Redacta la Introducción de la revisión sistemática sobre:

PREGUNTA PICO/SPIDER: "${form.tema || "[pregunta no especificada]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
CRITERIOS DE INCLUSIÓN: "${form.hipotesis || "[no especificados]"}"

La introducción debe:
1. Contextualizar el problema clínico, social o científico abordado.
2. Justificar la necesidad de una revisión sistemática (vs. narrativa).
3. Presentar la pregunta en formato PICO o SPIDER.
4. Declarar el objetivo de la revisión.
5. Mencionar brevemente el protocolo seguido (PRISMA, PROSPERO).

Extensión: 400–600 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Criterios de Inclusión": (form) => `Actúa como metodólogo especializado en revisiones sistemáticas con dominio del protocolo PRISMA.

Define los Criterios de Inclusión y Exclusión para la revisión sistemática sobre:

PREGUNTA: "${form.tema || "[pregunta no especificada]"}"
CRITERIOS DECLARADOS: "${form.hipotesis || "[no especificados]"}"
BASES DE DATOS: ${form.keywords || "PubMed, Scopus, WoS, Cochrane"}
PERÍODO: "${form.restricciones || "últimos 10 años"}"

Desarrolla:
1. Tabla de criterios de inclusión detallados (población, intervención, comparador, resultado, diseño).
2. Tabla de criterios de exclusión con justificación de cada uno.
3. Tipos de estudio aceptados (RCT, cohorte, caso-control, etc.).
4. Restricciones de idioma, fecha y acceso.
5. Proceso de selección: diagrama de flujo PRISMA recomendado.

Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Estrategia de Búsqueda": (form) => `Actúa como bibliotecólogo especializado en búsquedas sistemáticas en bases de datos científicas.

Diseña la Estrategia de Búsqueda para la revisión sistemática sobre:

PREGUNTA: "${form.tema || "[pregunta no especificada]"}"
BASES DE DATOS: ${form.keywords || "PubMed, Scopus, Web of Science, Cochrane, LILACS"}
PERÍODO: "${form.restricciones || "2015–2025"}"
IDIOMAS: ${form.idioma || "Español e Inglés"}

Proporciona:
1. Ecuaciones de búsqueda completas para cada base de datos con operadores booleanos (AND, OR, NOT).
2. Términos MeSH / DeCS equivalentes al tema.
3. Estrategia de búsqueda en lenguaje libre para bases no controladas.
4. Tabla resumen: base de datos → ecuación → resultados esperados.
5. Recomendaciones para búsqueda en literatura gris (tesis, informes, repositorios).

Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Síntesis": (form) => `Actúa como investigador senior experto en síntesis de evidencia científica y meta-análisis.

Redacta la sección de Síntesis de Resultados para la revisión sistemática sobre:

PREGUNTA: "${form.tema || "[pregunta no especificada]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
FACULTAD: ${form.facultad || "[facultad]"}

La síntesis debe:
1. Describir las características de los estudios incluidos (tabla resumen).
2. Agrupar los hallazgos por categorías temáticas o resultados.
3. Evaluar la heterogeneidad entre estudios.
4. Presentar la síntesis narrativa o cuantitativa según corresponda.
5. Señalar sesgos identificados y nivel de evidencia de cada estudio.
6. Usar tabla de evidencia GRADE si aplica.

Extensión: proporcional al total de ${form.extension || "5.000–8.000 palabras"}. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Conclusiones": (form) => `Actúa como metodólogo experto en revisiones sistemáticas de la Facultad de ${form.facultad || "[facultad]"}.

Redacta las Conclusiones de la revisión sistemática sobre:

PREGUNTA: "${form.tema || "[pregunta no especificada]"}"
OBJETIVO ALCANZADO: "${form.objetivo || "[objetivo no definido]"}"

Las conclusiones deben:
1. Responder directamente a la pregunta PICO/SPIDER planteada.
2. Resumir la fuerza de la evidencia encontrada.
3. Señalar implicaciones para la práctica clínica, educativa o política.
4. Declarar las limitaciones metodológicas de la revisión.
5. Proponer investigaciones futuras basadas en los vacíos identificados.
${form.restricciones ? `6. Consideraciones adicionales: ${form.restricciones}` : ""}

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Referencias": (form) => `Actúa como especialista en gestión bibliográfica y normas de citación académica.

Genera una guía de referencias modelo para la revisión sistemática sobre:

TEMA: "${form.tema || "[tema no especificado]"}"
BASES DE DATOS: ${form.keywords || "PubMed, Scopus, WoS"}
NORMA: ${form.citacion || "APA 7.ª edición"}

Por favor:
1. Genera 8–10 referencias modelo de artículos científicos siguiendo ${form.citacion || "APA 7.ª edición"}.
2. Incluye ejemplos de: artículo con DOI, artículo sin DOI, revisión sistemática, guía clínica, base de datos.
3. Muestra cómo citar el protocolo PRISMA y PROSPERO.
4. Señala errores frecuentes al citar estudios clínicos.
5. Recomienda gestores bibliográficos y su exportación desde cada base de datos.`,
};