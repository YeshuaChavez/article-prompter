import type { FormData } from "../../components/shared/types";

export const PROMPTS_EMPIRICA: Record<string, (form: FormData) => string> = {

    "Reformula tu tema": (form) => `Actúa como un experto en investigación con 20 años de experiencia para realizar lo siguiente:

1. VARIABLES IDENTIFICADAS: Del tema [${form.temaE || "tema no especificado"}] identifica:
   - Variable Independiente (VI): Factor que influye o determina. Ejemplo: horas de estudio.
   - Variable Dependiente (VD): El resultado o efecto que se mide. Ejemplo: puntuación en un examen.
   - Variable Interviniente/Control (VIC): Factores que afectan la relación VI-VD. Ejemplo: nivel de fatiga.

2. DEFINICIÓN CONCEPTUAL DE LAS VARIABLES: Para cada variable, defínela conceptualmente y busca un artículo científico indexado. Cita en formato ${form.citacion || "APA 7.ª edición"}.

3. NUEVAS VARIANTES DEL TEMA: Formula 3 nuevas variantes del tema [${form.temaE || "tema no especificado"}], especificando a quién beneficiará. Por cada variante formula una pregunta clara, precisa y contestable.

Diseño metodológico: "${form.disenio || "[no especificado]"}"
Muestra: "${form.muestra || "[no especificada]"}"
Autor: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}
Presenta toda la información en ${form.idioma || "Español"}.`,

    "Vacíos temáticos": (form) => `Actúa como un investigador experto en investigación empírica de la Facultad de ${form.facultad || "[facultad]"}.

Realiza una revisión exhaustiva de la evidencia científica actual sobre [${form.temaE || "tema no especificado"}].

Identifica y analiza 5 vacíos empíricos significativos:
- Utiliza artículos de revistas indexadas (${form.revista || "Scopus, WoS"}) para fundamentar cada vacío.
- Por cada vacío escribe 2 párrafos e incluye 2 citas en formato ${form.citacion || "APA 7.ª edición"}.
- Presenta lista enumerada. Información clara y correctamente referenciada.

Hipótesis inicial: "${form.hipotesis || "[no especificada]"}"
Presenta todo en ${form.idioma || "Español"}.`,

    "Formula el objetivo": (form) => `Actúa como experto en metodología de investigación empírica de la Facultad de ${form.facultad || "[facultad]"}.

Del texto anterior elige el vacío más relevante y formula 3 objetivos para una Investigación Empírica.

Los objetivos deben:
- Iniciar con verbos en infinitivo
- Ser específicos, medibles y relevantes para el vacío
- Responder al tipo: Investigación Empírica (${form.disenio || "[diseño]"})

Por cada objetivo presenta:
1. El objetivo formulado
2. Cómo aborda el vacío empírico seleccionado
3. El método que se aplicará (cuantitativo, cualitativo, mixto)

Tema base: [${form.temaE || "tema no especificado"}]
Objetivo declarado: "${form.objetivoE || "[objetivo no definido]"}"
Presenta en ${form.idioma || "Español"}.`,

    "Valida el objetivo": (form) => `Actúa como par evaluador de la revista ${form.revista || "Scopus Q1"} especializada en ${form.facultad || "ciencias"}.

Del objetivo [${form.objetivoE || "objetivo no definido"}] dame feedback aplicando estos criterios:

1. CLARIDAD EN LA FORMULACIÓN: ¿Proporciona comprensión clara de lo que pretende lograr?
2. RELEVANCIA Y PERTINENCIA: ¿Es relevante para la Facultad de ${form.facultad || "[facultad]"}?
3. ESPECÍFICO Y MEDIBLE: ¿Las variables están claramente definidas y son medibles?
4. FACTIBILIDAD: ¿Es viable con la muestra "${form.muestra || "[muestra]"}" y el instrumento "${form.instrumento || "[instrumento]"}"?
5. ORIGINALIDAD E INNOVACIÓN: ¿Aporta evidencia nueva al campo?
6. CONSISTENCIA METODOLÓGICA: ¿Está alineado con el diseño ${form.disenio || "[diseño]"}?
7. CLARIDAD EN TÉRMINOS: ¿Las variables están operacionalmente definidas?

Sé riguroso y constructivo. Presenta en ${form.idioma || "Español"}.`,

    "Esquema de redacción": (form) => `Actúa como editor senior de la revista ${form.revista || "Scopus Q1"}.

Del objetivo [${form.objetivoE || "objetivo no definido"}] escribe el esquema para una Investigación Empírica:

1. RESUMEN (máx. 200 palabras)
2. INTRODUCCIÓN: Bases teóricas, estudios previos, vacío, objetivo e hipótesis
3. HIPÓTESIS: H₀ y H₁, variables, definición operacional
4. METODOLOGÍA: Diseño, muestra, instrumento, procedimiento, análisis
5. RESULTADOS: Estadística descriptiva e inferencial
6. DISCUSIÓN: Comparación, implicaciones, limitaciones
7. CONCLUSIONES: Hallazgos, contraste de hipótesis, futuras líneas
8. REFERENCIAS: Según ${form.citacion || "APA 7.ª edición"}

Para cada apartado indica propósito, extensión aproximada, elementos clave y errores comunes.
Extensión total: ${form.extension || "Estándar"}. Todo en ${form.idioma || "Español"}.`,

    "Introducción": (form) => `Actúa como experto en investigación empírica de la Facultad de ${form.facultad || "[facultad]"}.

Elabora la Introducción para el artículo empírico sobre:
PROBLEMA: "${form.temaE || "[problema no especificado]"}"
OBJETIVO: "${form.objetivoE || "[objetivo no definido]"}"
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"

Sigue estas instrucciones:
1. BASES TEÓRICAS: 3 fuentes recientes (últimos 5 años) de revistas indexadas.
2. INVESTIGACIONES PREVIAS: 3 estudios empíricos clave con datos estadísticos relevantes.
3. VACÍO EMPÍRICO: 3 fuentes que justifiquen la necesidad de este estudio.
4. OBJETIVO E HIPÓTESIS: Define claramente el objetivo y la hipótesis: "${form.hipotesis || "[hipótesis]"}"

Citas en formato ${form.citacion || "APA 7.ª edición"}. Lenguaje académico en ${form.idioma || "Español"}.`,

    "Hipótesis": (form) => `Actúa como experto en metodología de investigación cuantitativa con 20 años de experiencia.

Formula y valida las hipótesis para el estudio sobre:
PROBLEMA: "${form.temaE || "[problema no especificado]"}"
HIPÓTESIS INICIAL: "${form.hipotesis || "[no especificada]"}"
DISEÑO: ${form.disenio || "[no especificado]"}

Desarrolla:
1. VARIABLES: VI, VD y VIC con definición conceptual y cita de artículo científico por cada una.
2. HIPÓTESIS FORMALES:
   - H₀ (Nula): formulación precisa
   - H₁ (Alternativa): con dirección esperada y justificación en literatura
3. PRUEBA ESTADÍSTICA: Especifica la prueba apropiada según el diseño ${form.disenio || "[diseño]"} y justifica.

Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Metodología": (form) => `Actúa como experto en diseño metodológico de la Facultad de ${form.facultad || "[facultad]"}.

Elabora la Metodología para el estudio sobre:
DISEÑO: "${form.disenio || "[no especificado]"}"
MUESTRA: "${form.muestra || "[no especificada]"}"
INSTRUMENTO: "${form.instrumento || "[no especificado]"}"
OBJETIVO: "${form.objetivoE || "[objetivo no definido]"}"

Desarrolla:
1. TIPO Y DISEÑO: Describe y justifica el diseño ${form.disenio || "[diseño]"}.
2. POBLACIÓN Y MUESTRA: "${form.muestra || "[muestra]"}" — técnica de muestreo, criterios y tamaño justificado.
3. INSTRUMENTO: "${form.instrumento || "[instrumento]"}" — validez (juicio de expertos) y confiabilidad (Alpha de Cronbach).
4. PROCEDIMIENTO: Fases de aplicación y control de sesgos.
5. PLAN DE ANÁLISIS: Software, pruebas estadísticas y nivel de significancia.
6. ÉTICA: Consentimiento informado y confidencialidad.

Extensión: 600–900 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Análisis Estadístico": (form) => `Actúa como bioestadístico experto en análisis de datos para ${form.facultad || "ciencias"}.

Diseña el plan de Análisis Estadístico para el estudio sobre:
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"
DISEÑO: ${form.disenio || "[no especificado]"}
MUESTRA: "${form.muestra || "[no especificada]"}"
INSTRUMENTO: "${form.instrumento || "[no especificado]"}"

El plan debe incluir:
1. SOFTWARE: Justifica SPSS, R, Stata o Python según el diseño.
2. SUPUESTOS: Normalidad (Kolmogorov-Smirnov, Shapiro-Wilk), homogeneidad de varianzas.
3. ESTADÍSTICA DESCRIPTIVA: Medidas según tipo de variable (nominal, ordinal, continua).
4. PRUEBAS INFERENCIALES: Pruebas específicas por hipótesis con justificación.
5. SIGNIFICANCIA Y EFECTO: Alpha, potencia y tamaño del efecto (d de Cohen, eta², r).
6. DATOS PERDIDOS: Estrategia de manejo (imputación, eliminación, sensibilidad).

Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Resultados": (form) => `Actúa como estadístico y redactor científico experto en presentación de resultados empíricos.

Elabora el apartado Resultados para el estudio sobre:
TEMA: "${form.temaE || "[tema no especificado]"}"
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"
MUESTRA: "${form.muestra || "[no especificada]"}"

Sigue estas instrucciones:
1. ESTADÍSTICA DESCRIPTIVA: Características de la muestra con medidas apropiadas por tipo de variable.
2. CONTRASTE DE HIPÓTESIS: Por cada hipótesis reporta prueba usada, valores exactos (p, IC 95%, tamaño del efecto), decisión e interpretación.
3. TABLAS Y FIGURAS: Sugiere 2-3 con títulos y notas según ${form.citacion || "APA 7.ª edición"}.
4. OBJETIVIDAD: Solo describe, no interpreta. La interpretación va en Discusión.

Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Discusión": (form) => `Actúa como investigador senior con experiencia en ${form.revista || "Scopus"}.

Elabora la Discusión para el estudio empírico sobre:
OBJETIVO: "${form.objetivoE || "[objetivo no definido]"}"
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"

Sigue estas instrucciones:
1. COMPARACIÓN CON ESTUDIOS PREVIOS: Por resultado principal, compara con estudios indexados. Formato ${form.citacion || "APA 7.ª edición"}. Explica convergencias y divergencias.
2. IMPLICACIONES PRÁCTICAS: Significado para la práctica en ${form.facultad || "[facultad]"}.
3. LIMITACIONES: Metodológicas (muestra, instrumento, diseño) y su impacto en la generalización.
4. FUTURAS INVESTIGACIONES: Líneas específicas basadas en resultados y limitaciones.

Extensión: 500–800 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Conclusiones": (form) => `Actúa como metodólogo experto de la Facultad de ${form.facultad || "[facultad]"}.

Elabora las Conclusiones del estudio empírico sobre:
OBJETIVO: "${form.objetivoE || "[objetivo no definido]"}"
HIPÓTESIS: "${form.hipotesis || "[hipótesis no definida]"}"

Sigue estas pautas:
1. RESULTADOS CLAVE: Hallazgos más importantes con datos concretos y significancia estadística.
2. RESPUESTA AL OBJETIVO: Cómo el estudio responde a: "${form.objetivoE || "[objetivo]"}"
3. CONTRASTE DE HIPÓTESIS: Confirma o refuta: "${form.hipotesis || "[hipótesis]"}" con base en resultados.
4. REFLEXIONES FINALES: Implicaciones, limitaciones y líneas de investigación futura.
${form.restricciones ? `\n5. CONSIDERACIONES: ${form.restricciones}` : ""}

Extensión: 300–500 palabras. Idioma: ${form.idioma || "Español"}. Norma: ${form.citacion || "APA 7.ª edición"}.`,

    "Resumen": (form) => `Actúa como experto en investigación empírica con experiencia en ${form.revista || "Scopus"}.

Elabora el Resumen (máx. 200 palabras) en un solo párrafo fluido:
- Contexto: relevancia del problema "${form.temaE || "[tema]"}"
- Objetivo: "${form.objetivoE || "[objetivo]"}"
- Metodología: diseño "${form.disenio || "[diseño]"}", muestra "${form.muestra || "[muestra]"}", instrumento "${form.instrumento || "[instrumento]"}"
- Resultados más significativos con datos concretos
- Conclusión más relevante para el campo

Autor: ${form.nombre || "el autor"} — Facultad de ${form.facultad || "[facultad]"}, nivel ${form.nivel || "pregrado"}
Norma: ${form.citacion || "APA 7.ª edición"}. Idioma: ${form.idioma || "Español"}. Máximo 200 palabras.`,

    "Palabras clave": (form) => `Actúa como especialista en indexación y SEO académico.

Formula 5 palabras clave para el artículo empírico sobre:
TEMA: "${form.temaE || "[tema no especificado]"}"
OBJETIVO: "${form.objetivoE || "[objetivo no definido]"}"
VARIABLES: VI y VD identificadas

Para cada palabra clave:
1. Presenta el término en ${form.idioma || "Español"} y equivalente en inglés
2. Justifica su relevancia para indexación en ${form.revista || "Scopus"}
3. Verifica si existe como descriptor en bases especializadas

Presenta todo en ${form.idioma || "Español"}.`,

    "Títulos propuestos": (form) => `Actúa como editor senior de la revista ${form.revista || "Scopus Q1"}.

Para el objetivo [${form.objetivoE || "objetivo no definido"}] formula 5 propuestas de títulos para la Investigación Empírica.

Cada título debe:
- Mencionar las variables principales (VI y VD)
- Especificar la población o contexto: Facultad de ${form.facultad || "[facultad]"}
- Ser conciso (máx. 20 palabras)
- Seguir convenciones de publicación en ${form.revista || "Scopus"}

Presenta todo en ${form.idioma || "Español"}.`,
};