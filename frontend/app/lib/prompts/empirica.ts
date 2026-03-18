import type { FormData } from "../../components/shared/types";

export const PROMPTS_EMPIRICA: Record<string, (form: FormData) => string> = {

    "Resumen": (form) => `Actúa como redactor académico experto en investigación empírica cuantitativa/cualitativa indexada en ${form.revista || "Scopus"}.

Redacta el Resumen (Abstract) del siguiente artículo empírico:

PROBLEMA: "${form.tema || "[problema no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"
AUTOR: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}

El resumen debe incluir:
1. Contexto y justificación del problema (1–2 oraciones).
2. Objetivo general del estudio.
3. Diseño metodológico y muestra en una oración.
4. Principales resultados con datos concretos.
5. Conclusión y aporte al campo.

Extensión: 150–250 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Introducción": (form) => `Actúa como investigador empírico experto de la Facultad de ${form.facultad || "[facultad]"}.

Redacta la Introducción del artículo de investigación empírica sobre:

PROBLEMA: "${form.tema || "[problema no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"
KEYWORDS: ${form.keywords || "[no especificados]"}

La introducción debe:
1. Presentar el problema con evidencia estadística o empírica reciente.
2. Revisar brevemente los antecedentes más relevantes (últimos 5 años).
3. Identificar el vacío empírico que justifica este estudio.
4. Declarar el objetivo general y los objetivos específicos.
5. Presentar la hipótesis de investigación.
6. Anunciar la estructura del artículo.

Extensión: 500–800 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Hipótesis": (form) => `Actúa como metodólogo especializado en diseño de investigación cuantitativa de la Facultad de ${form.facultad || "[facultad]"}.

Formula y desarrolla las hipótesis de investigación para el estudio sobre:

PROBLEMA: "${form.tema || "[problema no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
HIPÓTESIS INICIAL: "${form.hipotesis || "[no especificada]"}"
DISEÑO: ${form.keywords || "[diseño no especificado]"}

Por favor:
1. Formula la hipótesis nula (H₀) y alternativa (H₁) de forma precisa.
2. Identifica las variables dependientes e independientes.
3. Define operacionalmente cada variable.
4. Especifica la dirección esperada de la relación.
5. Justifica la hipótesis con base en la literatura existente.
6. Señala qué prueba estadística corresponde para contrastarla.

Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Metodología": (form) => `Actúa como experto en diseño metodológico cuantitativo/cualitativo de la Facultad de ${form.facultad || "[facultad]"}.

Redacta la sección de Metodología para el estudio empírico sobre:

PROBLEMA: "${form.tema || "[problema no especificado]"}"
DISEÑO DECLARADO: "${form.keywords || "[no especificado]"}"
MUESTRA: "${form.restricciones || "[no especificada]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"

La metodología debe detallar:
1. Tipo y diseño de investigación (con justificación).
2. Población, muestra y técnica de muestreo.
3. Instrumentos de recolección de datos (validez y confiabilidad).
4. Procedimiento de aplicación y recolección.
5. Plan de análisis de datos.
6. Consideraciones éticas del estudio.

Extensión: 600–900 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Resultados": (form) => `Actúa como estadístico y redactor científico experto en presentación de resultados empíricos.

Redacta la sección de Resultados para el estudio sobre:

TEMA: "${form.tema || "[tema no especificado]"}"
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"
MUESTRA: "${form.restricciones || "[no especificada]"}"
FACULTAD: ${form.facultad || "[facultad]"}

La sección de Resultados debe:
1. Presentar los hallazgos en orden lógico (de general a específico).
2. Describir las características de la muestra (estadística descriptiva).
3. Reportar los resultados de cada prueba estadística con valores exactos (p, IC, d).
4. Indicar si se acepta o rechaza cada hipótesis.
5. Incluir sugerencias de tablas y figuras con sus títulos.
6. Mantener objetividad: solo describir, no interpretar.

Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Análisis Estadístico": (form) => `Actúa como bioestadístico experto en análisis de datos para investigación en ${form.facultad || "ciencias"}.

Diseña el plan de Análisis Estadístico para el estudio sobre:

TEMA: "${form.tema || "[tema no especificado]"}"
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"
DISEÑO: ${form.keywords || "[no especificado]"}
MUESTRA: "${form.restricciones || "[no especificada]"}"

El plan debe incluir:
1. Software estadístico recomendado (SPSS, R, Stata, Python) y justificación.
2. Pruebas de normalidad y supuestos a verificar.
3. Estadística descriptiva: medidas a reportar según tipo de variable.
4. Pruebas inferenciales específicas según el diseño y las hipótesis.
5. Nivel de significancia y tamaño del efecto a reportar.
6. Manejo de datos perdidos y valores atípicos.

Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Discusión": (form) => `Actúa como investigador senior con amplia experiencia en publicación de estudios empíricos en ${form.revista || "Scopus"}.

Redacta la sección de Discusión para el estudio sobre:

TEMA: "${form.tema || "[tema no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"
FACULTAD: ${form.facultad || "[facultad]"}

La discusión debe:
1. Interpretar los resultados más relevantes (sin repetirlos).
2. Comparar con hallazgos de estudios similares (coincidencias y diferencias).
3. Explicar resultados inesperados o contradictorios.
4. Señalar las implicaciones prácticas o teóricas de los hallazgos.
5. Reconocer las limitaciones del estudio.

Extensión: 500–800 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Conclusiones": (form) => `Actúa como metodólogo experto de la Facultad de ${form.facultad || "[facultad]"}.

Redacta las Conclusiones del estudio empírico sobre:

TEMA: "${form.tema || "[tema no especificado]"}"
OBJETIVO ALCANZADO: "${form.objetivo || "[objetivo no definido]"}"
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"

Las conclusiones deben:
1. Sintetizar los hallazgos más importantes.
2. Confirmar o refutar explícitamente la hipótesis planteada.
3. Declarar la contribución empírica original del estudio.
4. Señalar las limitaciones y su impacto en la generalización.
5. Proponer líneas de investigación futura.
${form.restricciones ? `6. Consideraciones adicionales: ${form.restricciones}` : ""}

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,
};