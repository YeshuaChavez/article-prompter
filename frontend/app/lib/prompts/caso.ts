import type { FormData } from "../../components/shared/types";

export const PROMPTS_CASO: Record<string, (form: FormData) => string> = {

    "Resumen": (form) => `Actúa como redactor académico experto en estudios de caso cualitativos indexados en ${form.revista || "Scopus"}.

Redacta el Resumen (Abstract) del siguiente estudio de caso:

CASO: "${form.tema || "[caso no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
AUTOR: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}

El resumen debe:
1. Identificar el caso y su relevancia en una oración.
2. Declarar el objetivo del análisis.
3. Describir brevemente las fuentes de evidencia utilizadas.
4. Mencionar los hallazgos o lecciones más relevantes.
5. Cerrar con la contribución al campo.

Extensión: 150–250 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Introducción": (form) => `Actúa como investigador cualitativo experto en estudios de caso de la Facultad de ${form.facultad || "[facultad]"}.

Redacta la Introducción del estudio de caso sobre:

CASO: "${form.tema || "[caso no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
PREGUNTA CENTRAL: "${form.hipotesis || "[no especificada]"}"
UNIDAD DE ANÁLISIS: ${form.keywords || "[no especificada]"}

La introducción debe:
1. Presentar el caso y justificar su selección (por qué este caso es relevante).
2. Contextualizar el problema o fenómeno que representa.
3. Declarar la pregunta de investigación del caso.
4. Enunciar el objetivo del estudio.
5. Anunciar la estructura del artículo.

Extensión: 400–600 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Marco Teórico": (form) => `Actúa como experto en ${form.facultad || "ciencias sociales"} con dominio del sustento teórico para estudios de caso.

Redacta el Marco Teórico del estudio de caso sobre:

CASO: "${form.tema || "[caso no especificado]"}"
PREGUNTA CENTRAL: "${form.hipotesis || "[no especificada]"}"
UNIDAD DE ANÁLISIS: ${form.keywords || "[no especificada]"}

El marco teórico debe:
1. Presentar los conceptos y categorías teóricas clave para analizar el caso.
2. Revisar los enfoques o modelos teóricos más relevantes.
3. Justificar el marco interpretativo adoptado para este caso.
4. Definir operacionalmente las categorías de análisis.
5. Establecer el vínculo entre la teoría y el caso específico.

Extensión: 600–900 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Contexto del Caso": (form) => `Actúa como investigador cualitativo experto en descripción densa y contextualización de casos.

Redacta la sección de Contexto del Caso para el estudio sobre:

CASO: "${form.tema || "[caso no especificado]"}"
UNIDAD DE ANÁLISIS: ${form.keywords || "[no especificada]"}
FUENTES DE EVIDENCIA: "${form.restricciones || "entrevistas, documentos, observación"}"
FACULTAD: ${form.facultad || "[facultad]"}

La sección debe incluir:
1. Descripción detallada del caso: quién, qué, cuándo, dónde.
2. Antecedentes históricos e institucionales relevantes.
3. Actores principales involucrados y sus roles.
4. Factores contextuales que explican el caso (político, social, económico).
5. Delimitación temporal y espacial del análisis.

Extensión: 500–800 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Análisis": (form) => `Actúa como analista cualitativo experto en metodología de estudio de caso (Yin, Stake) de la Facultad de ${form.facultad || "[facultad]"}.

Desarrolla la sección de Análisis del caso sobre:

CASO: "${form.tema || "[caso no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
PREGUNTA CENTRAL: "${form.hipotesis || "[no especificada]"}"
FUENTES: "${form.restricciones || "entrevistas, documentos, observación"}"

El análisis debe:
1. Aplicar las categorías del marco teórico a la evidencia recopilada.
2. Triangular fuentes de evidencia (mínimo 2–3 fuentes distintas).
3. Identificar patrones, contradicciones o hallazgos inesperados.
4. Responder progresivamente a la pregunta central del caso.
5. Citar evidencia directa (fragmentos de entrevistas, datos documentales).

Extensión: proporcional al total de ${form.extension || "5.000–8.000 palabras"}. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Hallazgos": (form) => `Actúa como investigador cualitativo experto en presentación de hallazgos de estudios de caso.

Redacta la sección de Hallazgos del estudio de caso sobre:

CASO: "${form.tema || "[caso no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
PREGUNTA CENTRAL: "${form.hipotesis || "[no especificada]"}"

Los hallazgos deben:
1. Presentarse organizados por categorías temáticas emergentes.
2. Sustentarse con evidencia directa del caso (citas, datos, documentos).
3. Destacar los hallazgos más significativos o sorprendentes.
4. Relacionar cada hallazgo con la pregunta central del caso.
5. Diferenciar entre hallazgos principales y secundarios.

Extensión: 400–700 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Lecciones Aprendidas": (form) => `Actúa como consultor académico experto en transferibilidad y generalización analítica de estudios de caso.

Redacta la sección de Lecciones Aprendidas del estudio de caso sobre:

CASO: "${form.tema || "[caso no especificado]"}"
HALLAZGOS CLAVE: "${form.objetivo || "[no especificados]"}"
FACULTAD: ${form.facultad || "[facultad]"}

Las lecciones aprendidas deben:
1. Extraer los aprendizajes transferibles a otros contextos similares.
2. Distinguir qué fue único del caso vs. qué puede generalizarse.
3. Señalar implicaciones para la práctica profesional o política pública.
4. Identificar qué haría diferente el investigador en un caso futuro.
5. Conectar las lecciones con la teoría del marco conceptual.

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Conclusiones": (form) => `Actúa como metodólogo experto en investigación cualitativa de la Facultad de ${form.facultad || "[facultad]"}.

Redacta las Conclusiones del estudio de caso sobre:

CASO: "${form.tema || "[caso no especificado]"}"
OBJETIVO ALCANZADO: "${form.objetivo || "[objetivo no definido]"}"
PREGUNTA CENTRAL: "${form.hipotesis || "[no especificada]"}"

Las conclusiones deben:
1. Sintetizar los hallazgos más relevantes del caso.
2. Responder directamente a la pregunta central de investigación.
3. Declarar la contribución conceptual o práctica del estudio.
4. Señalar los límites de transferibilidad del caso.
5. Proponer futuras investigaciones o casos comparativos.
${form.restricciones ? `6. Consideraciones adicionales: ${form.restricciones}` : ""}

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Referencias": (form) => `Actúa como especialista en gestión bibliográfica y normas de citación académica.

Genera una guía de referencias modelo para el estudio de caso sobre:

CASO: "${form.tema || "[caso no especificado]"}"
FUENTES: "${form.restricciones || "entrevistas, documentos institucionales, literatura académica"}"
NORMA: ${form.citacion || "APA 7.ª edición"}

Por favor:
1. Genera 8–10 referencias modelo siguiendo ${form.citacion || "APA 7.ª edición"}.
2. Incluye ejemplos de: artículo académico, libro de metodología de caso (Yin, Stake), documento institucional, entrevista, informe.
3. Muestra cómo citar fuentes primarias no publicadas (entrevistas, archivos).
4. Señala errores comunes en estudios de caso cualitativos.
5. Recomienda gestores bibliográficos para este tipo de investigación.`,
};