import type { FormData } from "../../components/shared/types";

export const PROMPTS_INVESTIGACION: Record<string, (form: FormData) => string> = {

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

"Reformula tu tema": (form) => `Actúa como un experto en investigación con 20 años de experiencia para realizar lo siguiente:

1. ANÁLISIS ESTRUCTURAL: Del tema [${form.temaI || "tema no especificado"}] y considerando el vacío temático [${form.vacioI || "no especificado"}], identifica:
   - NATURALEZA: Este trabajo es para una **REDACCIÓN DE ARTÍCULO DE INVESTIGACIÓN ORIGINAL**.
   - CONFIGURACIÓN: Nivel ${form.nivel}, Tipo de estudio ${form.tipoI} y Enfoque específico ${form.enfoqueI}.
   - ELEMENTOS CLAVE: ${form.tipoI?.toLowerCase().includes("cuanti") ? 
     'Variable Independiente (VI), Variable Dependiente (VD) y Variable Interviniente (VIC)' : 
     'Categoría Central de estudio y Subcategorías emergentes'}.

2. DEFINICIÓN Y SUSTENTO: Define cada elemento conceptualmente y asócialos a un artículo científico indexado en ${form.revista || "Scopus/WoS"} de los últimos 5 años. Cita en ${form.citacion}.

3. PROPUESTA DE 4 NUEVAS VARIANTES (TEMA Y TÍTULO): Basado en lo anterior, formula 4 opciones para un artículo original. Para cada una presenta:
   - **Enunciado del Tema:** Definición técnica y formal del problema de investigación (orientado a ${form.tipoI}).
   - **Título sugerido:** Nombre académico atractivo, preciso y publicable para el artículo.
   - **Beneficiario:** A quién ayuda o qué sector impacta esta variante.
   
   EXIGENCIA POR NIVEL: Si es Pregrado, prioriza viabilidad. Si es Posgrado (${form.nivel}), exige originalidad, profundidad teórica y un aporte crítico al campo.
   COHERENCIA METODOLÓGICA: Deben ser consistentes con el enfoque ${form.enfoqueI} y respetar las restricciones: "${form.restricciones || "Ninguna"}".

INSTRUCCIONES DE INTERACCIÓN (OBLIGATORIO):
- Solicita al usuario que elija una variante (1, 2, 3 o 4) o proponga la suya basada en tus ideas.
- IMPORTANTE: Una vez que el usuario elija o proponga, **CORRIGE ORTOGRAFÍA Y REDACCIÓN** amablemente en caso el usuario elija uno propio y confirma el **TEMA y TÍTULO finales (REDACCIÓN COMPLETA Y PROFESIONAL)**.
- Indica que estás listo para el siguiente paso (Vacíos Temáticos) una vez validado.

Datos de contexto:
- Autor: ${form.nombre} | Facultad: ${form.facultad} | Idioma: ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

  "Vacíos temáticos": (form) => `Actúa como un investigador experto en investigación empírica de la Facultad de ${form.facultad || "[facultad]"}.

1. PRIORIDAD: Utiliza el TEMA FINAL ELEGIDO por el usuario en este chat. Ignora [${form.temaI}] si el usuario ya seleccionó una variante nueva.

2. VALIDACIÓN SEGÚN NIVEL Y MÉTODO: 
   - Revisa el vacío inicial del formulario: "${form.vacioI || "No definido"}".
   - Analiza si tiene la profundidad requerida para el nivel ${form.nivel} y si es coherente con el tipo ${form.tipoI} (Enfoque: ${form.enfoqueI}).
   - PREGUNTA AL USUARIO: "¿Deseas mantener tu vacío inicial o prefieres elegir entre estos 5 nuevos vacíos de nivel ${form.nivel} que he detectado?".

3. REVISIÓN DE EVIDENCIA: Identifica 5 vacíos empíricos significativos en ${form.revista || "Scopus, WoS"}:
   - RESTRICCIONES DE BÚSQUEDA (OBLIGATORIO): "${form.restricciones || "Ninguna"}". 
   - Los vacíos deben alinearse al método: si es ${form.tipoI}, busca brechas en ${form.tipoI?.toLowerCase().includes("cuanti") ? "mediciones, correlaciones o generalización" : "comprensión, significados o contextos poco explorados"}.
   - Por cada vacío escribe 2 párrafos e incluye 2 citas en ${form.citacion}.

4. INTERACCIÓN: Presenta la lista y solicita al usuario que elija con cuál trabajar.

Nivel: ${form.nivel} | Tipo: ${form.tipoI} | Enfoque: ${form.enfoqueI} | Idioma: ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//v

   "Formula el objetivo": (form) => `Actúa como experto en metodología de la Facultad de ${form.facultad || "[facultad]"}.

1. CONTEXTO DE TRABAJO: 
   - Utiliza el TEMA FINAL y el VACÍO TEMÁTICO que el usuario eligió/confirmó en este chat.
   - SI EL USUARIO ESCRIBIÓ EL TEMA O EL VACÍO CON ERRORES, presenta primero la versión corregida y pulida académicamente, en otro caso se tiene que mantener exactamente igual.

2. TAREA (PROPUESTA DE OPCIONES): Formula 3 opciones de Objetivos Generales estratégicos.
   - Cada opción debe ser coherente con el tipo ${form.tipoI} y el enfoque ${form.enfoqueI}.
   - Deben estar ajustados al nivel académico: ${form.nivel || "Pregrado"}.

3. REQUISITOS TÉCNICOS DE LAS OPCIONES:
   - Iniciar con verbos en infinitivo (Taxonomía de Bloom nivel superior: Analizar, Determinar, Evaluar, etc.).
   - Estructura obligatoria: [Verbo] + [Variables/Categorías] + [Muestra: ${form.poblacionI}] + [Contexto/Lugar].

4. PRESENTACIÓN DE CADA OPCIÓN:
   - **Opción [Número]:** Enunciado completo del objetivo.
   - **Justificación del vacío:** Explicación de cómo este objetivo específico resuelve el vacío seleccionado.
   - **Ruta Metodológica:** Cómo se medirá o analizará usando los instrumentos: "${form.instrumentosI || "instrumentos a validar"}".

INSTRUCCIONES DE CIERRE:
- Solicita al usuario que elija la opción de objetivo (1, 2 o 3) que prefiera, o que proponga un ajuste.
- Una vez elegido, confirma que el diseño lógico (Tema -> Vacío -> Objetivo) (REDACCIÓN COMPLETA) es sólido y procede a indicar que están listos para los "Autores Recomendados".

Citas en ${form.citacion || "APA 7.ª edición"}. Presenta en ${form.idioma || "Español"}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//v

    "Autores recomendados": (form) => `Actúa como un bibliómetra experto y documentalista científico de la Facultad de ${form.facultad || "[facultad]"}.

1. TAREA: Identifica 5 autores o grupos líderes basados en el TEMA y OBJETIVO final.
2. FILTRO DE RESTRICCIONES (CRÍTICO): "${form.restricciones || "Ninguna"}". 
   - **Ejemplo:** Si dice "evitar citas de más de 10 años", solo busca autores con hitos entre 2016-2026. 
   - **Ejemplo:** Si dice "evitar autores mexicanos", verifica la afiliación institucional antes de proponer.
3. REGLA DE ORO: Prohibido alucinar nombres o DOI. Si no hay datos, sugiere líneas de búsqueda real.
4. FORMATO: Nombre, Afiliación, Línea de investigación y Obra clave en ${form.citacion}.
5. RECOMENDACIÓN ESTRATÉGICA: 
   - Explica brevemente por qué es recomendado citar a estos autores.

Nivel académico: ${form.nivel || "Pregrado"}
Presenta toda la información en ${form.idioma || "Español"}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

"Esquema de redacción": (form) => `Actúa como un editor senior de una revista indexada en ${form.revista || "Scopus/WoS"}.

1. CONSOLIDACIÓN FINAL: Basado en el TEMA FINAL, el VACÍO SELECCIONADO y el OBJETIVO GENERAL que el usuario confirmó en este chat, elabora un esquema de redacción estructurado bajo el modelo IMRyD.

2. DOSIFICACIÓN POR EXTENSIÓN: 
   - La extensión total definida es: "${form.extension || "estándar de 15-20 páginas"}".
   - Distribuye proporcionalmente el contenido (en páginas o porcentaje) para cada sección: Introducción, Metodología, Resultados y Discusión/Conclusiones.

3. ESTRUCTURA DETALLADA DEL ESQUEMA:
   - INTRODUCCIÓN: Sugiere 3 subtemas clave (Contexto, Justificación basada en el vacío y Estado del arte con los autores recomendados).
   - METODOLOGÍA: Organiza los puntos según el diseño ${form.enfoqueI}, la muestra "${form.poblacionI}" y los instrumentos "${form.instrumentosI}".
   - RESULTADOS: Esquematiza cómo presentar los hallazgos (Tablas/Figuras sugeridas).
   - DISCUSIÓN: Puntos de contraste entre el objetivo y los autores referentes.
   - CONCLUSIONES PROYECTADAS: Redacta 3 conclusiones preliminares que cierren el vacío temático identificado y respondan al objetivo general.

4. REQUISITOS DE FORMATO:
   - Usa la norma ${form.citacion || "APA 7.ª edición"}.
   - Respeta estrictamente las restricciones: "${form.restricciones || "ninguna"}".

5. RESUMEN EJECUTIVO Y CIERRE:
   - Presenta un cuadro resumen con: [Tema Final corregido] | [Vacío] | [Tipo de investigacion] | [Objetivo] | [Técnicas e instrumentos] | [Metodología] | [Extensión Sugerida] | [Autores recomendados].
   - IMPORTANTE: Si el usuario tuvo errores de ortografía o redacción en sus elecciones previas, preséntalos aquí ya corregidos y pulidos.
   - Concluye indicando que la fase de PREPARACIÓN para la Facultad de ${form.facultad} ha terminado con éxito.

Nivel: ${form.nivel} | Idioma: ${form.idioma || "Español"}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Introducción": (form) => `Actúa como experto en investigación de la Facultad de ${form.facultad || "[facultad]"} y considera las exigencias del docente: ${form.docente || "[docente]"}.

Elabora la Introducción para un ARTÍCULO DE INVESTIGACIÓN ORIGINAL de nivel ${form.nivel || "[nivel]"} manteniendo coherencia con:
TEMA FINAL: "${form.temaI || "[tema]"}"
OBJETIVO: "${form.objetivoI || "[objetivo]"}"
VACÍO TEMÁTICO: "${form.vacioI || "[vacío]"}"

Sigue estas instrucciones (IMRyD):
1. CONTEXTUALIZACIÓN Y VACÍO: Justifica la investigación basándote en el vacío temático indicado.
2. ESTADO DEL ARTE Y AUTORES CLAVE: Integra fuentes teóricas y empíricas. OBLIGATORIO incluir a: "${form.autoresI || "autores relevantes"}".
3. CIERRE: Finaliza formulando el problema y el Objetivo General. ${form.hipotesisI ? `Incluye también la hipótesis: "${form.hipotesisI}".` : "No incluyas hipótesis, solo céntrate en el objetivo."}
4. FORMATO: Extensión para artículo de ${form.extension}. Restricciones: "${form.restricciones || "Ninguna"}".

Citas en ${form.citacion}. Idioma: ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Hipótesis": (form) => `Actúa como experto en metodología de investigación.

Formula y valida las hipótesis para esta INVESTIGACIÓN ORIGINAL:
OBJETIVO: "${form.objetivoI || "[objetivo]"}"
${form.hipotesisI ? `HIPÓTESIS INICIAL: "${form.hipotesisI}"` : "El usuario no ha proporcionado una hipótesis; por favor, propón la H0 y H1 más adecuadas basadas en el objetivo."}
DISEÑO: ${form.enfoqueI} | TIPO: ${form.tipoI}

Desarrolla:
1. VARIABLES: Definición conceptual de las variables principales.
2. HIPÓTESIS FORMALES: Redacción técnica de H₀ y H₁.
3. PRUEBA ESTADÍSTICA: Sugiere la prueba ideal para este diseño.
4. RESTRICCIONES: "${form.restricciones || "Ninguna"}".

Idioma: ${form.idioma}. Norma: ${form.citacion}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Metodología": (form) => `Actúa como experto en diseño metodológico de la Facultad de ${form.facultad}.

Elabora la Metodología para esta INVESTIGACIÓN ORIGINAL basada en el objetivo: "${form.objetivoI}".
Docente revisor: ${form.docente}.

Desarrolla (IMRyD):
1. TIPO Y ENFOQUE: Justifica el uso de ${form.tipoI} y ${form.enfoqueI}.
2. POBLACIÓN Y MUESTRA: Describe a "${form.poblacionI}".
3. TÉCNICAS E INSTRUMENTOS: Detalla "${form.instrumentosI}" y su validación.
4. PROCEDIMIENTOS: Fases de ejecución y ética.
5. RESTRICCIONES: "${form.restricciones || "Ninguna"}".

Extensión: ${form.extension}. Idioma: ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Resultados": (form) => `Actúa como redactor científico experto.

Elabora una "PLANTILLA DE RESULTADOS" para esta INVESTIGACIÓN ORIGINAL:
OBJETIVO: "${form.objetivoI}"
${form.hipotesisI ? `HIPÓTESIS: "${form.hipotesisI}"` : ""}
MUESTRA: "${form.poblacionI}"

INSTRUCCIONES IMRyD:
1. PLACEHOLDERS: Usa corchetes [ ] para valores numéricos.
2. OBJETIVIDAD: Solo describe, PROHIBIDO INTERPRETAR.
3. ESTRUCTURA: Descriptivos de la muestra y ${form.hipotesisI ? "contraste de hipótesis" : "logro de objetivos"}.
4. TABLAS/FIGURAS: Sugiere inserciones según norma ${form.citacion}.

Idioma: ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Discusión": (form) => `Actúa como investigador senior (Scopus) para una INVESTIGACIÓN ORIGINAL.

Elabora la Discusión hilada con la Introducción y los resultados previos:
OBJETIVO: "${form.objetivoI}"
${form.hipotesisI ? `HIPÓTESIS: "${form.hipotesisI}"` : ""}

INSTRUCCIONES IMRyD:
1. INTERPRETACIÓN: Explica el significado de los hallazgos.
2. CONTRASTE: Compara con los autores base: "${form.autoresI}".
3. IMPLICANCIAS: Aportes para la ${form.facultad} y limitaciones del enfoque ${form.enfoqueI}.
4. RESTRICCIONES: "${form.restricciones || "Ninguna"}".

Extensión: ${form.extension}. Idioma: ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Conclusiones": (form) => `Actúa como metodólogo experto de la Facultad de ${form.facultad}.

Elabora las Conclusiones finales para esta INVESTIGACIÓN ORIGINAL (Autor: ${form.nombre}):

Pautas IMRyD:
1. RESPUESTA AL OBJETIVO: Responde directamente a: "${form.objetivoI}".
2. ${form.hipotesisI ? `CONTRASTE DE HIPÓTESIS: Confirma o refuta: "${form.hipotesisI}".` : "LOGRO DE INVESTIGACIÓN: Resume el alcance de los hallazgos principales."}
3. RECOMENDACIONES: Líneas futuras basadas en el tema y las restricciones: "${form.restricciones}".

Idioma: ${form.idioma}. Extensión para formato de ${form.extension}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Resumen": (form) => `Actúa como experto en redacción científica para ${form.revista}.

Elabora el Resumen (Abstract) para esta INVESTIGACIÓN ORIGINAL (Autor: ${form.nombre}):
- Tema: "${form.temaI}" | Objetivo: "${form.objetivoI}"
- Metodología: ${form.tipoI} - ${form.enfoqueI}, muestra: ${form.poblacionI}, instrumentos: ${form.instrumentosI}.

REGLAS:
- Extensión: 150-250 palabras (UN SOLO PÁRRAFO).
- Estructura: Contexto -> Objetivo -> Metodología -> Resultados principales -> Conclusión.
- Restricciones: "${form.restricciones}".

Idioma: ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Referencias": (form) => `Actúa como bibliómetra experto y documentalista científico de la Facultad de ${form.facultad}.

Genera el listado de REFERENCIAS bibliográficas final para esta INVESTIGACIÓN ORIGINAL:
TEMA: "${form.temaI}"
AUTORES BASE UTILIZADOS: "${form.autoresI || "referentes del área"}"

Sigue estas instrucciones técnicas:
1. FORMATO: Aplica estrictamente la norma ${form.citacion || "APA 7.ª edición"}.
2. CALIDAD: Asegura que las fuentes provengan de bases de datos indexadas (Scopus, WoS, SciELO) y sean coherentes con el nivel ${form.nivel}.
3. FILTRO DE ACTUALIDAD Y RESTRICCIONES: Respeta rigurosamente: "${form.restricciones || "Ninguna"}". (Si se indicaron años específicos o exclusión de tipos de fuente, aplícalo aquí).
4. INTEGRIDAD: Incluye las referencias completas de los autores mencionados en la Introducción y Discusión (${form.autoresI}).
5. ORDEN: Organiza el listado alfabéticamente según el estándar de la norma requerida.

Presenta el listado en ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Palabras clave": (form) => `Actúa como especialista en indexación académica.

Formula las Palabras Clave (Keywords) para esta INVESTIGACIÓN ORIGINAL:
TEMA: "${form.temaI}" | OBJETIVO: "${form.objetivoI}"

REGLAS:
1. CANTIDAD: 3 a 6 términos.
2. TESAUROS: Usa términos validados en tesauros internacionales para la revista ${form.revista}.
3. IDIOMA: Presenta en ${form.idioma} e Inglés.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Títulos propuestos": (form) => `Actúa como editor senior de la revista ${form.revista}.

Formula 5 propuestas de títulos definitivos para esta INVESTIGACIÓN ORIGINAL (Nivel ${form.nivel}).
OBJETIVO: "${form.objetivoI}" | DOCENTE: ${form.docente}

REGLAS:
1. Máximo 20 palabras, evita rellenos innecesarios.
2. Debe reflejar variables, enfoque ${form.enfoqueI} y la muestra en la Facultad de ${form.facultad}.
3. Restricciones: "${form.restricciones}".

Presenta en ${form.idioma}.`
};