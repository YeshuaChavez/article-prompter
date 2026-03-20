import type { FormData } from "../../components/shared/types";

export const PROMPTS_SISTEMATICA: Record<string, (form: FormData) => string> = {

    "Reformula tu tema": (form) => `Actúa como un experto en investigación con 20 años de experiencia para realizar lo siguiente:

1. VARIABLES IDENTIFICADAS: Del tema [${form.temaS || "tema no especificado"}] identifica:
   - Variable Independiente (VI): Factor que influye o determina. Ejemplo: horas de estudio.
   - Variable Dependiente (VD): El resultado que se mide. Ejemplo: puntuación en un examen.
   - Variable Interviniente/Control (VIC): Factores que afectan la relación VI-VD.

2. DEFINICIÓN CONCEPTUAL: Para cada variable, defínela y busca un artículo científico indexado. Cita en formato ${form.citacion || "APA 7.ª edición"}.

3. NUEVAS VARIANTES: Formula 3 variantes del tema [${form.temaS || "tema no especificado"}] en formato PICO o SPIDER, especificando a quién beneficiará. Por cada variante formula una pregunta de investigación clara y contestable.

Pregunta PICO/SPIDER: "${form.preguntaPico || "[no especificada]"}"
Bases de datos: ${form.basesDatos || "Scopus, WoS, PubMed, Cochrane"}
Autor: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}
Presenta toda la información en ${form.idioma || "Español"}.`,

    "Vacíos temáticos": (form) => `Actúa como investigador experto en revisiones sistemáticas de la Facultad de ${form.facultad || "[facultad]"}.

Realiza una revisión exhaustiva de la literatura sobre [${form.temaS || "tema no especificado"}].

Identifica y analiza 5 vacíos temáticos:
- Usa artículos de revistas indexadas (${form.revista || "Scopus, WoS, PubMed"}) para fundamentar cada vacío.
- Por cada vacío escribe 2 párrafos e incluye 2 citas en formato ${form.citacion || "APA 7.ª edición"}.
- Presenta lista enumerada. Información clara y correctamente referenciada.

Bases de datos: ${form.basesDatos || "Scopus, WoS, PubMed, Cochrane"}
Período: últimos 10 años
Presenta todo en ${form.idioma || "Español"}.`,

    "Formula el objetivo": (form) => `Actúa como experto en metodología de investigación de la Facultad de ${form.facultad || "[facultad]"}.

Del texto anterior elige el vacío más relevante y formula 3 objetivos para una Revisión Sistemática.

Los objetivos deben:
- Iniciar con verbos en infinitivo
- Ser específicos, medibles y relevantes para el vacío
- Responder al tipo: Revisión Sistemática (PRISMA)

Por cada objetivo presenta:
1. El objetivo formulado
2. Cómo aborda el vacío seleccionado
3. El método (PRISMA, criterios PICO, etc.)

Tema: [${form.temaS || "tema no especificado"}]
Objetivo declarado: "${form.objetivoS || "[objetivo no definido]"}"
Presenta en ${form.idioma || "Español"}.`,

    "Valida el objetivo": (form) => `Actúa como par evaluador de la revista ${form.revista || "Scopus Q1"}.

Del objetivo [${form.objetivoS || "objetivo no definido"}] dame feedback aplicando estos criterios:

1. CLARIDAD: ¿Proporciona comprensión clara de lo que pretende lograr?
2. RELEVANCIA: ¿Es relevante para ${form.facultad || "[facultad]"}?
3. ESPECÍFICO Y MEDIBLE: ¿Ofrece camino claro para medir su logro?
4. FACTIBILIDAD: ¿Es viable con acceso a ${form.basesDatos || "[bases de datos]"}?
5. ORIGINALIDAD: ¿Aporta algo nuevo al campo?
6. CONSISTENCIA: ¿Está alineado con metodología PRISMA?
7. CLARIDAD EN TÉRMINOS: ¿Usa conceptos definidos sin ambigüedades?

Sé riguroso y constructivo. Presenta en ${form.idioma || "Español"}.`,

    "Esquema de redacción": (form) => `Actúa como editor senior de la revista ${form.revista || "Scopus Q1"}.

Del objetivo [${form.objetivoS || "objetivo no definido"}] escribe el esquema para una Revisión Sistemática:

1. RESUMEN ESTRUCTURADO (máx. 250 palabras): Antecedentes, Objetivo, Métodos, Resultados, Conclusiones
2. INTRODUCCIÓN: Bases teóricas, investigaciones previas, vacíos, objetivo
3. CRITERIOS DE INCLUSIÓN Y EXCLUSIÓN: Tabla PICO/SPIDER
4. ESTRATEGIA DE BÚSQUEDA: Ecuaciones, bases de datos, diagrama PRISMA
5. SÍNTESIS DE RESULTADOS: Por pregunta de investigación
6. DISCUSIÓN: Comparación, limitaciones, recomendaciones
7. CONCLUSIONES: Hallazgos clave, respuesta al objetivo, futuras líneas
8. REFERENCIAS: Según ${form.citacion || "APA 7.ª edición"}

Para cada apartado: propósito, extensión, elementos clave y errores comunes.
Extensión total: ${form.extension || "Estándar (5.000–8.000 palabras)"}. Todo en ${form.idioma || "Español"}.`,

    "Introducción": (form) => `Actúa como investigador experto en revisiones sistemáticas de la Facultad de ${form.facultad || "[facultad]"}.

Elabora la Introducción para la Revisión Sistemática con objetivo:
"${form.objetivoS || "[objetivo no definido]"}"

Instrucciones:
1. BASES TEÓRICAS: 3 fuentes recientes (últimos 5 años). Bases: ${form.basesDatos || "[bases de datos]"}
2. INVESTIGACIONES PREVIAS: 3 estudios clave de los últimos 5 años.
3. VACÍOS: 3 fuentes recientes que justifiquen esta revisión.
4. OBJETIVO: Define claramente respondiendo a los vacíos.

Citas en formato ${form.citacion || "APA 7.ª edición"}. Lenguaje académico en ${form.idioma || "Español"}.`,

    "Criterios de Inclusión": (form) => `Actúa como metodólogo experto en revisiones sistemáticas con dominio del protocolo PRISMA.

Formula los Criterios de Inclusión y Exclusión para:
PREGUNTA PICO/SPIDER: "${form.preguntaPico || "[no especificada]"}"
CRITERIOS DE INCLUSIÓN: "${form.criteriosInc || "[no especificados]"}"
CRITERIOS DE EXCLUSIÓN: "${form.criteriosExc || "[no especificados]"}"
BASES DE DATOS: ${form.basesDatos || "PubMed, Scopus, WoS, Cochrane"}

Desarrolla:
1. Tabla de criterios de inclusión (población, intervención, comparador, resultado, diseño)
2. Tabla de criterios de exclusión con justificación
3. Tipos de estudio aceptados
4. Restricciones de idioma (${form.idioma || "Español e Inglés"}) y fecha
5. Diagrama PRISMA: 4 fases (Identificación, Cribado, Elegibilidad, Inclusión)

Norma: ${form.citacion || "APA 7.ª edición"}. Todo en ${form.idioma || "Español"}.`,

    "Estrategia de Búsqueda": (form) => `Actúa como bibliotecólogo especializado en búsquedas sistemáticas.

Diseña la Estrategia de Búsqueda para:
PREGUNTA: "${form.preguntaPico || "[pregunta no especificada]"}"
BASES DE DATOS: ${form.basesDatos || "PubMed, Scopus, WoS, Cochrane, LILACS"}
IDIOMAS: ${form.idioma || "Español e Inglés"}

Proporciona:
1. Ecuaciones de búsqueda con operadores booleanos (AND, OR, NOT) por base de datos
2. Términos MeSH / DeCS en inglés y español
3. Estrategia en lenguaje libre para bases sin vocabulario controlado
4. Tabla: Base de datos → Ecuación → Resultados esperados
5. Literatura gris: tesis, informes, repositorios

Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Síntesis de Resultados": (form) => `Actúa como investigador senior experto en síntesis de evidencia científica.

Elabora los Resultados para la revisión sistemática sobre:
OBJETIVO: "${form.objetivoS || "[objetivo no definido]"}"
PREGUNTA: "${form.preguntaPico || "[no especificada]"}"

Por cada pregunta de investigación, analiza 3 fuentes originales. Para cada fuente:
- FUENTE: Cita en formato ${form.citacion || "APA 7.ª edición"}
- METODOLOGÍA: Diseño del estudio
- CONCLUSIÓN PRINCIPAL: Hallazgo más relevante

Fuentes únicas por pregunta, de los últimos 5-10 años.
Extensión: ${form.extension || "Estándar"}. Todo en ${form.idioma || "Español"}.`,

    "Discusión": (form) => `Actúa como par evaluador senior de la revista ${form.revista || "Scopus Q1"}.

Elabora la Discusión para la revisión sobre:
OBJETIVO: "${form.objetivoS || "[objetivo no definido]"}"
PREGUNTA: "${form.preguntaPico || "[no especificada]"}"

Instrucciones:
1. COMPARACIÓN: Por resultado principal, compara con estudios indexados. Formato ${form.citacion || "APA 7.ª edición"}.
2. LIMITACIONES: Metodológicas y su impacto en la interpretación.
3. FUTURAS INVESTIGACIONES: Áreas específicas basadas en vacíos identificados.

Extensión: 400–700 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Conclusiones": (form) => `Actúa como metodólogo experto en revisiones sistemáticas de la Facultad de ${form.facultad || "[facultad]"}.

Elabora las Conclusiones sobre:
OBJETIVO: "${form.objetivoS || "[objetivo no definido]"}"
PREGUNTA: "${form.preguntaPico || "[no especificada]"}"

Pautas:
1. RESULTADOS CLAVE: Hallazgos más importantes.
2. RESPUESTA AL OBJETIVO: Responde directamente a: "${form.objetivoS || "[objetivo]"}"
3. MARCO PRISMA: Contextualiza dentro de la metodología PRISMA.
4. REFLEXIONES FINALES: Implicaciones y líneas futuras.
${form.restricciones ? `\n5. CONSIDERACIONES: ${form.restricciones}` : ""}

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Resumen Estructurado": (form) => `Actúa como experto en revisiones sistemáticas con experiencia en ${form.revista || "Scopus Q1"}.

Elabora el Resumen Estructurado (máx. 200 palabras) con secciones etiquetadas:
- ANTECEDENTES: Contexto y justificación
- OBJETIVO: "${form.objetivoS || "[objetivo no definido]"}"
- MÉTODOS: Bases (${form.basesDatos || "[bases]"}), criterios inclusión "${form.criteriosInc || "[criterios]"}", exclusión "${form.criteriosExc || "[criterios]"}"
- RESULTADOS: Estudios incluidos y hallazgos clave
- CONCLUSIONES: Implicaciones principales

Autor: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}
Norma: ${form.citacion || "APA 7.ª edición"}. Idioma: ${form.idioma || "Español"}. Máximo 200 palabras.`,

    "Palabras clave": (form) => `Actúa como especialista en indexación y SEO académico.

Formula 5 palabras clave para la Revisión Sistemática sobre:
TEMA: "${form.temaS || "[tema no especificado]"}"
OBJETIVO: "${form.objetivoS || "[objetivo no definido]"}"
PREGUNTA: "${form.preguntaPico || "[no especificada]"}"

Para cada palabra clave:
1. Término en ${form.idioma || "Español"} y equivalente en inglés
2. Justificación para indexación en ${form.revista || "Scopus"}
3. Verificación como término MeSH o DeCS

Presenta todo en ${form.idioma || "Español"}.`,

    "Títulos propuestos": (form) => `Actúa como editor senior de la revista ${form.revista || "Scopus Q1"}.

Para el objetivo [${form.objetivoS || "objetivo no definido"}] formula 5 títulos para la Revisión Sistemática.

Cada título debe:
- Mencionar explícitamente que es una revisión sistemática
- Incluir las variables principales
- Ser conciso (máx. 20 palabras)
- Seguir convenciones de ${form.revista || "Scopus"} y Facultad de ${form.facultad || "[facultad]"}

Presenta todo en ${form.idioma || "Español"}.`,
};