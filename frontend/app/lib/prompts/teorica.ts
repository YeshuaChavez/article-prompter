import type { FormData } from "../../components/shared/types";

export const PROMPTS_TEORICA: Record<string, (form: FormData) => string> = {

    "Resumen": (form) => `Actúa como redactor académico experto en revisiones teóricas indexadas en ${form.revista || "Scopus"}.

Redacta el Resumen (Abstract) del siguiente artículo de revisión teórica:

TEMA: "${form.tema || "[tema no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
AUTOR: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}

El resumen debe:
1. Presentar el propósito y alcance de la revisión en 1–2 oraciones.
2. Describir brevemente el enfoque teórico y las corrientes analizadas.
3. Mencionar los principales hallazgos o aportes conceptuales.
4. Cerrar con la relevancia o contribución al campo.

Extensión: 150–250 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.
${form.restricciones ? `\nConsideraciones adicionales: ${form.restricciones}` : ""}`,

    "Introducción": (form) => `Actúa como redactor académico especializado en artículos de revisión teórica para la Facultad de ${form.facultad || "[facultad]"}.

Redacta la Introducción del siguiente artículo:

TEMA: "${form.tema || "[tema no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
CORRIENTES O ENFOQUES: "${form.hipotesis || "[no especificadas]"}"
AUTORES CLAVE: ${form.keywords || "[no especificados]"}

La introducción debe:
1. Contextualizar el campo teórico y su relevancia actual.
2. Identificar el vacío o debate no resuelto en la literatura.
3. Justificar la necesidad de esta revisión teórica.
4. Declarar el objetivo de forma clara y precisa.
5. Anunciar la estructura del artículo.

Extensión: 400–600 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Metodología de Búsqueda": (form) => `Actúa como bibliotecólogo e investigador especializado en revisiones de literatura académica.

Redacta la sección de Metodología de Búsqueda para una revisión teórica sobre:

TEMA: "${form.tema || "[tema no especificado]"}"
PERÍODO TEMPORAL: "${form.restricciones || "últimos 10 años"}"
AUTORES O TEÓRICOS CLAVE: ${form.keywords || "[no especificados]"}
BASES DE DATOS OBJETIVO: ${form.revista || "Scopus, WoS, Redalyc"}

La sección debe incluir:
1. Criterios de selección de fuentes (inclusión y exclusión).
2. Palabras clave y ecuaciones de búsqueda utilizadas.
3. Bases de datos y repositorios consultados.
4. Período temporal cubierto y justificación.
5. Número aproximado de fuentes revisadas y seleccionadas.

Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Desarrollo Temático": (form) => `Actúa como experto en ${form.facultad || "ciencias"} con amplio dominio de la literatura teórica sobre el tema.

Desarrolla el cuerpo teórico del artículo de revisión sobre:

TEMA: "${form.tema || "[tema no especificado]"}"
CORRIENTES A CUBRIR: "${form.hipotesis || "[no especificadas]"}"
AUTORES CLAVE: ${form.keywords || "[no especificados]"}
NIVEL DEL LECTOR: ${form.nivel || "pregrado"} — Facultad de ${form.facultad || "[facultad]"}

El desarrollo temático debe:
1. Organizar las corrientes o enfoques teóricos de forma lógica y progresiva.
2. Comparar y contrastar las posiciones de los principales autores.
3. Identificar puntos de convergencia y divergencia entre teorías.
4. Analizar la evolución histórica del concepto o campo.
5. Señalar los aportes originales de cada corriente al tema.

Extensión: proporcional al total de ${form.extension || "5.000–8.000 palabras"}. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Discusión": (form) => `Actúa como par evaluador senior de una revista ${form.revista || "Scopus Q1"} especializada en ${form.facultad || "ciencias"}.

Redacta la sección de Discusión para la revisión teórica sobre:

TEMA: "${form.tema || "[tema no especificado]"}"
OBJETIVO: "${form.objetivo || "[objetivo no definido]"}"
CORRIENTES ANALIZADAS: "${form.hipotesis || "[no especificadas]"}"

La discusión debe:
1. Interpretar los hallazgos teóricos más relevantes.
2. Confrontar las corrientes analizadas con el estado actual del campo.
3. Señalar las tensiones o debates irresueltos identificados.
4. Evaluar las implicaciones prácticas o epistemológicas de la revisión.
5. Reconocer las limitaciones del enfoque adoptado.

Extensión: 400–700 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Conclusiones": (form) => `Actúa como metodólogo experto en revisiones teóricas de la Facultad de ${form.facultad || "[facultad]"}.

Redacta las Conclusiones de la revisión teórica sobre:

TEMA: "${form.tema || "[tema no especificado]"}"
OBJETIVO ALCANZADO: "${form.objetivo || "[objetivo no definido]"}"
CORRIENTES REVISADAS: "${form.hipotesis || "[no especificadas]"}"

Las conclusiones deben:
1. Sintetizar los aportes teóricos más significativos identificados.
2. Responder directamente al objetivo declarado.
3. Declarar la contribución conceptual original de esta revisión.
4. Señalar las limitaciones del estudio.
5. Proponer líneas de investigación teórica futura.
${form.restricciones ? `6. Consideraciones adicionales: ${form.restricciones}` : ""}

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Referencias": (form) => `Actúa como especialista en gestión bibliográfica y normas de citación académica.

Genera una guía de referencias modelo para la revisión teórica sobre:

TEMA: "${form.tema || "[tema no especificado]"}"
AUTORES CLAVE: ${form.keywords || "[no especificados]"}
NORMA DE CITACIÓN: ${form.citacion || "APA 7.ª edición"}
IDIOMA: ${form.idioma || "Español"}

Por favor:
1. Genera 8–10 referencias modelo siguiendo estrictamente la norma ${form.citacion || "APA 7.ª edición"}.
2. Incluye una variedad de tipos: artículo de revista, libro, capítulo de libro, tesis, recurso web.
3. Prioriza fuentes de los últimos 10 años relacionadas con "${form.tema || "el tema"}".
4. Señala errores comunes al citar en ${form.citacion || "APA 7.ª edición"}.
5. Recomienda gestores bibliográficos (Zotero, Mendeley) y su configuración para esta norma.`,
};