import type { FormData } from "../../components/shared/types";

export const PROMPTS_CASO: Record<string, (form: FormData) => string> = {

    "Reformula tu tema": (form) => `Actúa como un experto en investigación cualitativa con 20 años de experiencia para realizar lo siguiente:

1. UNIDAD DE ANÁLISIS: Del caso [${form.temaC || "caso no especificado"}] identifica:
   - Unidad Principal (UP): El sujeto, institución o fenómeno central
   - Dimensiones de Análisis (DA): Aspectos clave que se examinarán
   - Factores Contextuales (FC): Elementos del entorno que condicionan el caso

2. DEFINICIÓN CONCEPTUAL: Para cada dimensión, defínela y busca un artículo científico de referencia. Cita en formato ${form.citacion || "APA 7.ª edición"}.

3. NUEVAS VARIANTES: Formula 3 perspectivas de análisis del caso [${form.temaC || "caso no especificado"}], especificando a quién beneficiará. Por cada variante formula una pregunta cualitativa clara y contestable.

Pregunta central: "${form.preguntaCaso || "[no especificada]"}"
Unidad de análisis: ${form.unidadAnalisis || "[no especificada]"}
Fuentes de evidencia: "${form.evidencia || "[no especificadas]"}"
Autor: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}
Presenta toda la información en ${form.idioma || "Español"}.`,

    "Vacíos temáticos": (form) => `Actúa como investigador experto en estudios de caso de la Facultad de ${form.facultad || "[facultad]"}.

Realiza una revisión de la literatura sobre fenómenos similares al caso [${form.temaC || "caso no especificado"}].

Identifica y analiza 5 vacíos:
- Usa artículos de revistas indexadas (${form.revista || "Scopus, WoS"}) para fundamentar cada vacío.
- Por cada vacío escribe 2 párrafos e incluye 2 citas en formato ${form.citacion || "APA 7.ª edición"}.
- Presenta lista enumerada. Información clara y correctamente referenciada.

Fuentes de evidencia: "${form.evidencia || "[no especificadas]"}"
Unidad de análisis: ${form.unidadAnalisis || "[no especificada]"}
Presenta todo en ${form.idioma || "Español"}.`,

    "Formula el objetivo": (form) => `Actúa como experto en metodología cualitativa de la Facultad de ${form.facultad || "[facultad]"}.

Del texto anterior elige el vacío más relevante y formula 3 objetivos para un Estudio de Caso.

Los objetivos deben:
- Iniciar con verbos en infinitivo
- Ser específicos y relevantes para el vacío
- Responder al tipo: Estudio de Caso (Yin, Stake)

Por cada objetivo presenta:
1. El objetivo formulado
2. Cómo aborda el vacío seleccionado
3. El método (entrevistas, análisis documental, observación)

Caso: [${form.temaC || "caso no especificado"}]
Objetivo declarado: "${form.objetivoC || "[objetivo no definido]"}"
Presenta en ${form.idioma || "Español"}.`,

    "Valida el objetivo": (form) => `Actúa como par evaluador de la revista ${form.revista || "Scopus Q1"}.

Del objetivo [${form.objetivoC || "objetivo no definido"}] dame feedback:

1. CLARIDAD: ¿Proporciona comprensión clara de lo que pretende?
2. RELEVANCIA: ¿Es relevante para ${form.facultad || "[facultad]"}?
3. DELIMITADO: ¿Acotado a la unidad "${form.unidadAnalisis || "[unidad]"}"?
4. FACTIBILIDAD: ¿Viable con fuentes "${form.evidencia || "[fuentes]"}"?
5. ORIGINALIDAD: ¿Aporta conocimiento nuevo?
6. CONSISTENCIA: ¿Alineado con metodología de Estudio de Caso?
7. CLARIDAD EN TÉRMINOS: ¿Categorías de análisis definidas?

Sé riguroso y constructivo. Presenta en ${form.idioma || "Español"}.`,

    "Esquema de redacción": (form) => `Actúa como editor senior de la revista ${form.revista || "Scopus Q1"}.

Del objetivo [${form.objetivoC || "objetivo no definido"}] escribe el esquema para un Estudio de Caso:

1. RESUMEN (máx. 200 palabras)
2. INTRODUCCIÓN: Presentación del caso, justificación, pregunta, objetivo
3. MARCO TEÓRICO: Conceptos clave, enfoques, marco interpretativo
4. CONTEXTO DEL CASO: Quién, qué, cuándo, dónde, antecedentes
5. ANÁLISIS: Marco teórico aplicado, triangulación de fuentes
6. HALLAZGOS: Por categorías temáticas con evidencia directa
7. LECCIONES APRENDIDAS: Transferibilidad, implicaciones
8. CONCLUSIONES: Respuesta a la pregunta, contribución, limitaciones
9. REFERENCIAS: Según ${form.citacion || "APA 7.ª edición"}

Para cada apartado: propósito, extensión, elementos clave y errores comunes.
Extensión total: ${form.extension || "Estándar"}. Todo en ${form.idioma || "Español"}.`,

    "Introducción": (form) => `Actúa como experto en investigación cualitativa de la Facultad de ${form.facultad || "[facultad]"}.

Elabora la Introducción para el estudio de caso sobre:
CASO: "${form.temaC || "[caso no especificado]"}"
OBJETIVO: "${form.objetivoC || "[objetivo no definido]"}"
PREGUNTA: "${form.preguntaCaso || "[no especificada]"}"

Instrucciones:
1. PRESENTACIÓN Y JUSTIFICACIÓN: ¿Por qué este caso? 3 fuentes recientes.
2. CONTEXTO: El fenómeno que el caso representa con evidencia.
3. VACÍO: Aspectos no estudiados. 3 fuentes recientes.
4. PREGUNTA Y OBJETIVO: Formula claramente ambos.

Citas en formato ${form.citacion || "APA 7.ª edición"}. Lenguaje académico en ${form.idioma || "Español"}.`,

    "Marco Teórico": (form) => `Actúa como experto en ${form.facultad || "ciencias sociales"} con dominio teórico para estudios de caso.

Elabora el Marco Teórico sobre:
CASO: "${form.temaC || "[caso no especificado]"}"
PREGUNTA: "${form.preguntaCaso || "[no especificada]"}"
UNIDAD: ${form.unidadAnalisis || "[no especificada]"}

Desarrolla:
1. CONCEPTOS CLAVE: 3-5 conceptos con cita científica reciente por cada uno.
2. ENFOQUES: Presenta y compara modelos relevantes. Justifica el adoptado.
3. MARCO INTERPRETATIVO: Cómo se aplicarán los conceptos al caso.
4. VÍNCULO: Relación explícita entre teoría y unidad "${form.unidadAnalisis || "[unidad]"}"

Extensión: 600–900 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Contexto del Caso": (form) => `Actúa como investigador cualitativo experto en descripción densa.

Elabora el Contexto del Caso sobre:
CASO: "${form.temaC || "[caso no especificado]"}"
UNIDAD: ${form.unidadAnalisis || "[no especificada]"}
FUENTES: "${form.evidencia || "entrevistas, documentos, observación"}"

Incluye:
1. DESCRIPCIÓN: Quién, qué, cuándo, dónde. Narrativa densa y precisa.
2. ANTECEDENTES: Contexto histórico e institucional previo.
3. ACTORES: Identificación y roles de los stakeholders.
4. FACTORES CONTEXTUALES: Dimensiones política, social, económica, cultural.
5. DELIMITACIÓN: Alcance temporal y espacial con justificación.

Extensión: 500–800 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Análisis": (form) => `Actúa como analista cualitativo experto (Yin, Stake) de la Facultad de ${form.facultad || "[facultad]"}.

Elabora el Análisis del caso sobre:
CASO: "${form.temaC || "[caso no especificado]"}"
PREGUNTA: "${form.preguntaCaso || "[no especificada]"}"
FUENTES: "${form.evidencia || "entrevistas, documentos, observación"}"

Instrucciones:
1. APLICACIÓN TEÓRICA: Aplica categorías del marco teórico a la evidencia.
2. TRIANGULACIÓN: Cruza evidencia de 2-3 fuentes por hallazgo con fragmentos directos.
3. PATRONES: Identifica recurrencias, contradicciones e inesperados.
4. RESPUESTA PROGRESIVA: Responde gradualmente a "${form.preguntaCaso || "[pregunta]"}"

Extensión: proporcional a ${form.extension || "5.000–8.000 palabras"}. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Hallazgos": (form) => `Actúa como investigador cualitativo experto en presentación de hallazgos.

Elabora los Hallazgos sobre:
CASO: "${form.temaC || "[caso no especificado]"}"
PREGUNTA: "${form.preguntaCaso || "[no especificada]"}"
FUENTES: "${form.evidencia || "[fuentes no especificadas]"}"

Instrucciones:
1. ORGANIZACIÓN TEMÁTICA: Por categorías emergentes, no por fuente.
2. EVIDENCIA: Cita directa por cada hallazgo.
3. JERARQUÍA: Diferencia principales (responden la pregunta) de secundarios.
4. SORPRENDENTES: Destaca los inesperados y su relevancia teórica.
5. VINCULACIÓN: Relaciona cada hallazgo con "${form.preguntaCaso || "[pregunta]"}"

Extensión: 400–700 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Lecciones Aprendidas": (form) => `Actúa como consultor experto en transferibilidad de estudios de caso.

Elabora las Lecciones Aprendidas del caso sobre:
CASO: "${form.temaC || "[caso no especificado]"}"
UNIDAD: ${form.unidadAnalisis || "[no especificada]"}
FACULTAD: ${form.facultad || "[facultad]"}

Instrucciones:
1. TRANSFERIBLES: ¿Qué es aplicable a contextos similares? Distingue lo transferible de lo único.
2. GENERALIZACIÓN ANALÍTICA: ¿Cómo ilumina o cuestiona las teorías del campo?
3. IMPLICACIONES: ¿Qué deberían hacer diferente los profesionales o gestores?
4. AUTORREFLEXIÓN: ¿Qué haría diferente el investigador? Limitaciones del método.
5. CONEXIÓN TEÓRICA: Relaciona las lecciones con el marco conceptual.

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Conclusiones": (form) => `Actúa como metodólogo experto en investigación cualitativa de la Facultad de ${form.facultad || "[facultad]"}.

Elabora las Conclusiones sobre:
CASO: "${form.temaC || "[caso no especificado]"}"
OBJETIVO: "${form.objetivoC || "[objetivo no definido]"}"
PREGUNTA: "${form.preguntaCaso || "[no especificada]"}"

Pautas:
1. RESULTADOS CLAVE: Hallazgos relevantes con evidencia concreta.
2. RESPUESTA A LA PREGUNTA: Responde directamente a: "${form.preguntaCaso || "[pregunta]"}"
3. TIPO DE ESTUDIO: Contextualiza dentro del Estudio de Caso y sus límites de transferibilidad.
4. REFLEXIONES: Contribución, limitaciones y casos comparativos futuros.
${form.restricciones ? `\n5. CONSIDERACIONES: ${form.restricciones}` : ""}

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Resumen": (form) => `Actúa como experto en estudios de caso con experiencia en ${form.revista || "Scopus"}.

Elabora el Resumen (máx. 200 palabras) en un párrafo fluido:
- Contexto: relevancia del caso "${form.temaC || "[caso]"}"
- Objetivo: "${form.objetivoC || "[objetivo]"}"
- Metodología: Estudio de caso con fuentes "${form.evidencia || "[fuentes]"}"
- Hallazgos más relevantes
- Lección o contribución principal

Autor: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}
Norma: ${form.citacion || "APA 7.ª edición"}. Idioma: ${form.idioma || "Español"}. Máximo 200 palabras.`,

    "Palabras clave": (form) => `Actúa como especialista en indexación y SEO académico.

Formula 5 palabras clave para el Estudio de Caso sobre:
CASO: "${form.temaC || "[caso no especificado]"}"
OBJETIVO: "${form.objetivoC || "[objetivo no definido]"}"
UNIDAD: "${form.unidadAnalisis || "[no especificada]"}"

Para cada palabra clave:
1. Término en ${form.idioma || "Español"} y equivalente en inglés
2. Justificación para indexación en ${form.revista || "Scopus"}
3. Descriptores del campo en ${form.facultad || "[facultad]"}

Presenta todo en ${form.idioma || "Español"}.`,

    "Títulos propuestos": (form) => `Actúa como editor senior de la revista ${form.revista || "Scopus Q1"}.

Para el objetivo [${form.objetivoC || "objetivo no definido"}] formula 5 títulos para el Estudio de Caso.

Cada título debe:
- Identificar que es un estudio de caso
- Mencionar fenómeno y contexto: "${form.unidadAnalisis || "[unidad]"}"
- Ser conciso (máx. 20 palabras)
- Seguir convenciones de ${form.revista || "Scopus"}

Presenta todo en ${form.idioma || "Español"}.`,
};