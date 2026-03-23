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
Presenta toda la información en ${form.idioma || "Español"}.

Al terminar, indica cuál de las 3 variantes consideras más sólida y por qué.

INSTRUCCION PARA LA IA: Cuando el usuario responda con su elección (un número o variante propia), responde únicamente con "Excelente elección. Cuando estés listo, pega el siguiente prompt." y no agregues nada más.`,

    "Vacíos temáticos": (form) => `Actúa como un investigador experto en revisión de literatura teórica de la Facultad de ${form.facultad || "[facultad]"}.

Continuamos. La variante elegida en el paso anterior será la base de este análisis.

Realiza una revisión exhaustiva de la literatura científica actual sobre esa variante.

Identifica y analiza 5 vacíos temáticos significativos:
- Usa artículos de revistas indexadas (${form.revista || "Scopus, WoS, Redalyc"}) para fundamentar cada vacío.
- Por cada vacío escribe 2 párrafos e incluye 2 citas en formato ${form.citacion || "APA 7.ª edición"}.
- Presenta lista enumerada. Información clara y correctamente referenciada.

Corrientes analizadas: "${form.corrientes || "[no especificadas]"}"
Período: ${form.periodo || "últimos 10 años"}
Presenta todo en ${form.idioma || "Español"}.

Al terminar, indica cuál vacío consideras más relevante y urgente.

INSTRUCCION PARA LA IA: Cuando el usuario responda con su elección (un número o vacío propio), responde únicamente con "Perfecto. Cuando estés listo, pega el siguiente prompt." y no agregues nada más.`,

    "Formula el objetivo": (form) => `Actúa como experto en metodología de investigación de la Facultad de ${form.facultad || "[facultad]"}.

Continuamos. El vacío confirmado en el paso anterior es la base de este trabajo.

Formula 3 objetivos para una Revisión Teórica sobre ese vacío.

Los objetivos deben:
- Iniciar con verbos en infinitivo
- Ser específicos, medibles y relevantes para el vacío confirmado
- Responder al tipo: Artículo de Revisión Teórica

Por cada objetivo presenta:
1. El objetivo formulado
2. Cómo aborda directamente el vacío confirmado
3. El método que se aplicará (análisis documental, hermenéutico, etc.)

Tema base: [${form.temaT || "tema no especificado"}]
${form.objetivoT ? `Objetivo orientativo del autor: "${form.objetivoT}"` : ""}
Presenta en ${form.idioma || "Español"}.

Al terminar, indica cuál objetivo es más viable y pertinente.

INSTRUCCION PARA LA IA: Cuando el usuario responda con su elección (un número u objetivo propio), responde únicamente con "Muy bien. Cuando estés listo, pega el siguiente prompt." y no agregues nada más.`,

    "Valida el objetivo": (form) => `Actúa como par evaluador de la revista ${form.revista || "Scopus Q1"} especializada en ${form.facultad || "ciencias"}.

Continuamos. Evaluaremos el objetivo elegido en el paso anterior.

Aplica estos criterios:

1. CLARIDAD EN LA FORMULACIÓN: ¿Proporciona comprensión clara de lo que pretende lograr?
2. RELEVANCIA Y PERTINENCIA: ¿Es relevante para ${form.facultad || "[facultad]"}?
3. ESPECÍFICO Y MEDIBLE: ¿Ofrece un camino claro para medir su logro?
4. FACTIBILIDAD: ¿Es realista con los recursos disponibles?
5. ORIGINALIDAD E INNOVACIÓN: ¿Aporta algo nuevo al debate teórico?
6. CONSISTENCIA METODOLÓGICA: ¿Está alineado con una Revisión Teórica?
7. CLARIDAD EN TÉRMINOS: ¿Usa términos definidos sin ambigüedades?

Sé riguroso y constructivo. Si necesita ajustes, propón una versión mejorada.
Presenta en ${form.idioma || "Español"}.

Al terminar, confirma o presenta el objetivo ajustado.

INSTRUCCION PARA LA IA: Cuando el usuario responda con "listo" o confirme el objetivo, responde únicamente con "Objetivo confirmado. Cuando estés listo, pega el siguiente prompt." y no agregues nada más.`,

    "Esquema de redacción": (form) => `Actúa como editor senior de la revista ${form.revista || "Scopus Q1"}.

Continuamos. Construiremos el esquema sobre el objetivo validado en el paso anterior.

Elabora el esquema para la Revisión Teórica con estructura IMRD:

1. INTRODUCCIÓN (incluye marco teórico y antecedentes)
2. METODOLOGÍA (estrategia de búsqueda y criterios de selección)
3. RESULTADOS (síntesis y organización de la literatura)
4. DISCUSIÓN (interpretación, comparación e implicaciones)
5. CONCLUSIONES (aportes conceptuales y líneas futuras)
6. RESUMEN (máx. 200 palabras)
7. REFERENCIAS: Según ${form.citacion || "APA 7.ª edición"}

Para cada apartado indica: propósito, extensión aproximada, elementos clave y errores comunes.
Extensión total: ${form.extension || "Estándar (5.000–8.000 palabras)"}. Todo en ${form.idioma || "Español"}.

Al terminar, presenta el esquema completo y espera confirmación.

INSTRUCCION PARA LA IA: Cuando el usuario responda con "listo" o "continuar", responde un resumen de las elecciones de usuario y con "Esquema aprobado. Cuando estés listo, pega el siguiente prompt." y no agregues nada más.`,

    "Introduccion": (form) => `Actúa como editor senior de la revista ${form.revista || "Scopus Q1"} especializada en ${form.facultad || "ciencias"}.

 CONTINUACIÓN: Redactaremos la Introducción del artículo sobre el esquema aprobado en el paso anterior.

Elabora la Introducción para la Revisión Teórica sobre:
TEMA: "${form.temaT || "[tema no especificado]"}"
OBJETIVO: "${form.objetivoT || "[objetivo no definido]"}"
CORRIENTES: "${form.corrientes || "[no especificadas]"}"
AUTORES CLAVE: ${form.autores || "[no especificados]"}

Estructura en estos bloques:
1. CONTEXTO Y RELEVANCIA: Importancia actual del tema en ${form.facultad || "el campo académico"}. Mínimo 3 citas de fuentes indexadas en ${form.revista || "Scopus"}.
2. MARCO TEÓRICO: Desarrollo de las corrientes "${form.corrientes || "[corrientes]"}" y posiciones de ${form.autores || "los autores principales"}. Análisis crítico con al menos 6 citas en ${form.citacion || "APA 7.ª edición"}.
3. ANTECEDENTES: Estudios previos relevantes. Identifica convergencias y brechas en la literatura existente.
4. VACÍO Y JUSTIFICACIÓN: El problema teórico no resuelto que da origen a este artículo.
5. OBJETIVO: Presenta el objetivo confirmado en los pasos anteriores.
6. ESTRUCTURA: Anuncia brevemente cómo se organiza el artículo.

Extensión: 800–1200 palabras. Norma: ${form.citacion || "APA 7.ª edición"}. Idioma: ${form.idioma || "Español"}.`,

    "Metodología": (form) => `Actúa como experto en metodología de revisión de literatura de la Facultad de ${form.facultad || "[facultad]"}.

 CONTINUACIÓN: Redactaremos la Metodología del artículo sobre el objetivo e introducción desarrollados en los pasos anteriores.

Elabora la Metodología de Búsqueda para la revisión sobre:
TEMA: "${form.temaT || "[tema no especificado]"}"
PERÍODO: "${form.periodo || "últimos 10 años"}"
AUTORES CLAVE: ${form.autores || "[no especificados]"}

Desarrolla en prosa académica:
1. TIPO DE ESTUDIO: Justifica por qué es una Revisión Teórica y no otro diseño.
2. CRITERIOS DE INCLUSIÓN Y EXCLUSIÓN: Período ${form.periodo || "2015-2025"}, idiomas, tipo de fuente, nivel de indexación.
3. PALABRAS CLAVE Y ECUACIONES: Con operadores booleanos para Scopus, WoS, Redalyc, Google Scholar.
4. BASES DE DATOS: Con justificación de pertinencia para ${form.facultad || "el área"}.
5. PROCESO DE SELECCIÓN: Flujo desde búsqueda inicial hasta corpus final seleccionado.
6. VOLUMEN: Total de fuentes revisadas vs. seleccionadas con justificación.

Extensión: 400–600 palabras. Norma: ${form.citacion || "APA 7.ª edición"}. Idioma: ${form.idioma || "Español"}.`,

    "Resultados": (form) => `Actúa como investigador experto en síntesis de literatura teórica de la Facultad de ${form.facultad || "[facultad]"}.

 CONTINUACIÓN: Redactaremos los Resultados organizando la literatura identificada en la metodología del paso anterior.

Elabora los Resultados para la revisión sobre:
TEMA: "${form.temaT || "[tema no especificado]"}"
OBJETIVO: "${form.objetivoT || "[objetivo no definido]"}"
CORRIENTES: "${form.corrientes || "[no especificadas]"}"
AUTORES CLAVE: ${form.autores || "[no especificados]"}

Organiza los hallazgos de la siguiente manera:
1. SÍNTESIS POR CORRIENTES: Para cada corriente en "${form.corrientes || "[corrientes]"}" presenta los principales hallazgos conceptuales con sus respectivas citas.
2. ANÁLISIS COMPARATIVO: Convergencias y divergencias entre ${form.autores || "los autores principales"}. Usa tabla comparativa si es pertinente.
3. EVOLUCIÓN TEMPORAL: Cómo ha cambiado el debate en el período ${form.periodo || "analizado"}.
4. HALLAZGOS CLAVE: Los 3–5 aportes conceptuales más significativos identificados en la literatura.
5. TENDENCIAS EMERGENTES: Nuevas direcciones que aparecen en la literatura reciente.

Extensión: 600–900 palabras. Norma: ${form.citacion || "APA 7.ª edición"}. Idioma: ${form.idioma || "Español"}.`,

    "Discusión": (form) => `Actúa como par evaluador senior de la revista ${form.revista || "Scopus Q1"}.

 CONTINUACIÓN: Redactaremos la Discusión interpretando los resultados obtenidos en el paso anterior.

Elabora la Discusión para la revisión teórica sobre:
TEMA: "${form.temaT || "[tema no especificado]"}"
OBJETIVO: "${form.objetivoT || "[objetivo no definido]"}"
CORRIENTES: "${form.corrientes || "[no especificadas]"}"

Desarrolla:
1. INTERPRETACIÓN: Por cada hallazgo clave, interpreta su significado teórico y compara con estudios indexados. Norma: ${form.citacion || "APA 7.ª edición"}.
2. IMPLICACIONES TEÓRICAS: ¿Qué aporta al campo? ¿Desafía o confirma supuestos existentes?
3. LIMITACIONES: Alcance del estudio y restricciones metodológicas.
4. RECOMENDACIONES: Líneas futuras de investigación teórica derivadas de los hallazgos.

Extensión: 400–700 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Conclusiones": (form) => `Actúa como metodólogo experto en revisiones teóricas de la Facultad de ${form.facultad || "[facultad]"}.

 CONTINUACIÓN: Redactaremos las Conclusiones cerrando el artículo sobre todo lo desarrollado en los pasos anteriores.

Elabora las Conclusiones sobre:
TEMA: "${form.temaT || "[tema no especificado]"}"
OBJETIVO: "${form.objetivoT || "[objetivo no definido]"}"
CORRIENTES: "${form.corrientes || "[no especificadas]"}"

Pautas:
1. RESULTADOS CLAVE: Aportes conceptuales más significativos de la revisión.
2. RESPUESTA AL OBJETIVO: Responde directamente a: "${form.objetivoT || "[objetivo]"}"
3. APORTE AL CAMPO: Contribución original de este artículo al debate teórico en ${form.facultad || "el área"}.
4. REFLEXIONES FINALES: Implicaciones prácticas y líneas emergentes de investigación.
${form.restricciones ? `\n5. CONSIDERACIONES ESPECIALES: ${form.restricciones}` : ""}

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Resumen": (form) => `Actúa como experto en revisiones teóricas con experiencia en ${form.revista || "Scopus"}.

 CONTINUACIÓN: Redactaremos el Resumen sintetizando todo el artículo desarrollado en los pasos anteriores.

Elabora el Resumen (máx. 200 palabras) en un párrafo fluido que incluya:
- Contexto y relevancia de "${form.temaT || "[tema]"}"
- Objetivo: "${form.objetivoT || "[objetivo]"}"
- Metodología aplicada (tipo de revisión, bases consultadas)
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