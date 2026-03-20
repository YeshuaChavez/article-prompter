import type { FormData } from "../../components/shared/types";

export const PROMPTS_TEORICA: Record<string, (form: FormData) => string> = {

    "Reformula tu tema": (form) => `Actúa como un experto en investigación con 20 años de experiencia para realizar lo siguiente:

1. VARIABLES IDENTIFICADAS: Del tema [${form.temaT || "tema no especificado"}] identifica las categorías conceptuales principales:
   - Concepto Central (CC): La idea o teoría principal que se analiza
   - Conceptos Relacionados (CR): Teorías o enfoques que interactúan con el concepto central
   - Variables Contextuales (VC): Factores del contexto que condicionan el análisis teórico

2. DEFINICIÓN CONCEPTUAL: Para cada categoría identificada, defínela conceptualmente y busca un artículo científico indexado que contenga esa definición. Cita en formato ${form.citacion || "APA 7.ª edición"}.

3. NUEVAS VARIANTES DEL TEMA: Formula 3 nuevas variantes del tema [${form.temaT || "tema no especificado"}] claramente definidas, especificando a quién beneficiará y el aporte teórico. Por cada variante formula una pregunta de investigación teórica clara y contestable.

Corrientes a cubrir: "${form.corrientes || "[no especificadas]"}"
Autores clave: ${form.autores || "[no especificados]"}
Autor: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}
Presenta toda la información en ${form.idioma || "Español"}.`,

    "Vacíos temáticos": (form) => `Actúa como un investigador experto en revisión de literatura teórica de la Facultad de ${form.facultad || "[facultad]"}.

Realiza una revisión exhaustiva de la literatura científica actual del tema [${form.temaT || "tema no especificado"}].

Identifica y analiza 5 vacíos temáticos significativos:
- Usa artículos de revistas indexadas (${form.revista || "Scopus, WoS, Redalyc"}) para fundamentar cada vacío.
- Por cada vacío escribe 2 párrafos e incluye 2 citas en formato ${form.citacion || "APA 7.ª edición"}.
- Presenta lista enumerada. Información clara y correctamente referenciada.

Corrientes analizadas: "${form.corrientes || "[no especificadas]"}"
Período: ${form.periodo || "últimos 10 años"}
Presenta todo en ${form.idioma || "Español"}.`,

    "Formula el objetivo": (form) => `Actúa como experto en metodología de investigación de la Facultad de ${form.facultad || "[facultad]"}.

Del texto anterior elige el vacío más relevante y formula 3 objetivos para una Revisión Teórica.

Los objetivos deben:
- Iniciar con verbos en infinitivo
- Ser específicos, medibles y relevantes para el vacío
- Responder al tipo: Artículo de Revisión Teórica

Por cada objetivo presenta:
1. El objetivo formulado
2. Cómo aborda el vacío seleccionado
3. El método que se aplicará (análisis documental, hermenéutico, etc.)

Tema base: [${form.temaT || "tema no especificado"}]
Objetivo declarado: "${form.objetivoT || "[objetivo no definido]"}"
Presenta en ${form.idioma || "Español"}.`,

    "Valida el objetivo": (form) => `Actúa como par evaluador de la revista ${form.revista || "Scopus Q1"} especializada en ${form.facultad || "ciencias"}.

Del objetivo [${form.objetivoT || "objetivo no definido"}] dame feedback aplicando estos criterios:

1. CLARIDAD EN LA FORMULACIÓN: ¿Proporciona comprensión clara de lo que pretende lograr?
2. RELEVANCIA Y PERTINENCIA: ¿Es relevante para ${form.facultad || "[facultad]"}?
3. ESPECÍFICO Y MEDIBLE: ¿Ofrece un camino claro para medir su logro?
4. FACTIBILIDAD: ¿Es realista con los recursos disponibles?
5. ORIGINALIDAD E INNOVACIÓN: ¿Aporta algo nuevo al debate teórico?
6. CONSISTENCIA METODOLÓGICA: ¿Está alineado con una Revisión Teórica?
7. CLARIDAD EN TÉRMINOS: ¿Usa términos definidos sin ambigüedades?

Sé riguroso y constructivo. Presenta en ${form.idioma || "Español"}.`,

    "Esquema de redacción": (form) => `Actúa como editor senior de la revista ${form.revista || "Scopus Q1"}.

Del objetivo [${form.objetivoT || "objetivo no definido"}] escribe el esquema para una Revisión Teórica:

1. RESUMEN (máx. 200 palabras)
2. INTRODUCCIÓN: Contexto teórico, debates, vacíos, objetivo
3. METODOLOGÍA DE BÚSQUEDA: Criterios, bases de datos, período
4. DESARROLLO TEMÁTICO: Organizado por corrientes/enfoques
5. DISCUSIÓN: Comparación, implicaciones, limitaciones
6. CONCLUSIONES: Aportes conceptuales, futuras líneas
7. REFERENCIAS: Según ${form.citacion || "APA 7.ª edición"}

Para cada apartado: propósito, extensión aproximada, elementos clave y errores comunes.
Extensión total: ${form.extension || "Estándar (5.000–8.000 palabras)"}. Todo en ${form.idioma || "Español"}.`,

    "Metodología de Búsqueda": (form) => `Actúa como experto en metodología de revisión de literatura de la Facultad de ${form.facultad || "[facultad]"}.

Elabora la Metodología de Búsqueda para la revisión sobre:
TEMA: "${form.temaT || "[tema no especificado]"}"
PERÍODO: "${form.periodo || "últimos 10 años"}"
AUTORES CLAVE: ${form.autores || "[no especificados]"}

Desarrolla:
1. CRITERIOS DE SELECCIÓN: Inclusión y exclusión (período ${form.periodo || "2015-2025"}, tipo de fuente).
2. PALABRAS CLAVE Y ECUACIONES: Con operadores booleanos para Scopus, WoS, Redalyc, Google Scholar.
3. BASES DE DATOS: Con justificación de pertinencia.
4. PROCESO DE SELECCIÓN: Flujo desde búsqueda hasta selección final.
5. VOLUMEN DE FUENTES: Revisadas vs. seleccionadas con justificación.

Norma: ${form.citacion || "APA 7.ª edición"}. Todo en ${form.idioma || "Español"}.`,

    "Desarrollo Temático": (form) => `Actúa como experto con dominio del campo teórico de la Facultad de ${form.facultad || "[facultad]"}.

Elabora el Desarrollo Temático sobre:
TEMA: "${form.temaT || "[tema no especificado]"}"
CORRIENTES: "${form.corrientes || "[no especificadas]"}"
AUTORES CLAVE: ${form.autores || "[no especificados]"}

Sigue estas instrucciones:
1. EVOLUCIÓN HISTÓRICA: Desarrollo cronológico mostrando cómo cada corriente construye sobre las anteriores.
2. ANÁLISIS COMPARATIVO: Compara posiciones de ${form.autores || "los autores principales"}. Identifica convergencias y divergencias.
3. ESTADO ACTUAL: Debates vigentes y tensiones irresueltas.
4. NUEVAS PERSPECTIVAS: 3 enfoques renovados que emergen del análisis.

Extensión: proporcional a ${form.extension || "5.000–8.000 palabras"}. Norma: ${form.citacion || "APA 7.ª edición"}. Idioma: ${form.idioma || "Español"}.`,

    "Discusión": (form) => `Actúa como par evaluador senior de la revista ${form.revista || "Scopus Q1"}.

Elabora la Discusión para la revisión teórica sobre:
TEMA: "${form.temaT || "[tema no especificado]"}"
OBJETIVO: "${form.objetivoT || "[objetivo no definido]"}"
CORRIENTES: "${form.corrientes || "[no especificadas]"}"

Sigue estas instrucciones:
1. COMPARACIÓN: Por cada hallazgo conceptual, compara con estudios indexados. Formato ${form.citacion || "APA 7.ª edición"}.
2. IMPLICACIONES TEÓRICAS: ¿Qué aporta al campo? ¿Desafía supuestos existentes?
3. LIMITACIONES: Alcance y restricciones metodológicas.
4. RECOMENDACIONES: Líneas futuras de investigación teórica.

Extensión: 400–700 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Conclusiones": (form) => `Actúa como metodólogo experto en revisiones teóricas de la Facultad de ${form.facultad || "[facultad]"}.

Elabora las Conclusiones sobre:
TEMA: "${form.temaT || "[tema no especificado]"}"
OBJETIVO: "${form.objetivoT || "[objetivo no definido]"}"
CORRIENTES: "${form.corrientes || "[no especificadas]"}"

Pautas:
1. RESULTADOS CLAVE: Aportes conceptuales más significativos.
2. RESPUESTA AL OBJETIVO: Responde directamente a: "${form.objetivoT || "[objetivo]"}"
3. TIPO DE ESTUDIO: Contextualiza dentro de una Revisión Teórica.
4. REFLEXIONES FINALES: Implicaciones y líneas emergentes.
${form.restricciones ? `\n5. CONSIDERACIONES: ${form.restricciones}` : ""}

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Resumen": (form) => `Actúa como experto en revisiones teóricas con experiencia en ${form.revista || "Scopus"}.

Elabora el Resumen (máx. 200 palabras) en un párrafo fluido:
- Contexto: relevancia de "${form.temaT || "[tema]"}"
- Objetivo: "${form.objetivoT || "[objetivo]"}"
- Corrientes analizadas: "${form.corrientes || "[corrientes]"}"
- Hallazgos conceptuales más relevantes
- Contribución al campo

Autor: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}
Norma: ${form.citacion || "APA 7.ª edición"}. Idioma: ${form.idioma || "Español"}. Máximo 200 palabras.`,

    "Palabras clave": (form) => `Actúa como especialista en indexación y SEO académico.

Formula 5 palabras clave para la Revisión Teórica sobre:
TEMA: "${form.temaT || "[tema no especificado]"}"
OBJETIVO: "${form.objetivoT || "[objetivo no definido]"}"
CORRIENTES: "${form.corrientes || "[no especificadas]"}"

Para cada palabra clave:
1. Término en ${form.idioma || "Español"} y equivalente en inglés
2. Justificación para indexación en ${form.revista || "Scopus"}
3. Descriptores relacionados en Redalyc o ERIC

Presenta todo en ${form.idioma || "Español"}.`,

    "Títulos propuestos": (form) => `Actúa como editor senior de la revista ${form.revista || "Scopus Q1"}.

Para el objetivo [${form.objetivoT || "objetivo no definido"}] formula 5 títulos para la Revisión Teórica.

Cada título debe:
- Reflejar el enfoque teórico-conceptual
- Incluir las corrientes o categorías principales
- Ser conciso (máx. 20 palabras)
- Ser atractivo para revisores de ${form.revista || "Scopus"}

Presenta todo en ${form.idioma || "Español"}.`,
};