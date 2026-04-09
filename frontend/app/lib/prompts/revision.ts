import type { FormData } from "../../components/shared/types";

export const PROMPTS_REVISION: Record<string, (form: FormData) => string> = {
"Reformula tu tema": (form) => `Actúa como mentor de investigación senior para el estudiante ${form.nombre || "[nombre]"}.
    
CONTEXTO ACADÉMICO:
- Facultad: ${form.facultad} | Nivel: ${form.nivel}
- Docente revisor: ${form.docente}

TU TEMA INICIAL: "${form.temaRev || "[tema]"}"

TAREA: Analiza la idea y propón 3 versiones profesionales. 
- La primera más descriptiva (narrativa).
- La segunda con enfoque sistemático.
- La tercera orientada a la frontera del conocimiento (Estado del arte).

HILACIÓN: Explica brevemente cómo cada título define el camino que tomarás en el siguiente paso (el enfoque). Proporciona estas opciones de forma que el investigador pueda elegir la que mejor se adapte a las exigencias de ${form.docente}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Enfoque de revisión": (form) => `Actúa como metodólogo experto. 
Para el tema "${form.temaRev || "[tema]"}" y considerando que apuntas a la revista ${form.revista || "[revista]"}, debemos definir el rigor del estudio.

Analiza y da opciones sobre qué diseño metodológico seguir:
1. SI BUSCAS RIGOR (Sistemática): Ideal si ya tienes una ecuación de búsqueda clara.
2. SI BUSCAS SÍNTESIS TEÓRICA (Narrativa): Ideal para nivel ${form.nivel}.
3. SI BUSCAS ACTUALIZACIÓN (Scoping Review): Ideal si el tema es muy reciente.

HILACIÓN: Conecta esta elección con el objetivo. Explica que elegir "Sistemática" te obligará a usar verbos como "Evaluar" o "Sintetizar", mientras que una "Narrativa" se enfoca en "Analizar" o "Describir".`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Formula el objetivo": (form) => `Actúa como asesor metodológico para ${form.nombre}. 
Basado en el diseño elegido (${form.tipoRevision || "tu tipo de revisión"}) y el tema "${form.temaRev}", vamos a estructurar el propósito del estudio.

TAREA: Propón 3 niveles de objetivos:
- Opción A: Exploratorio (Mapear la literatura).
- Opción B: Analítico (Contrastar teorías existentes).
- Opción C: Crítico (Identificar vacíos y futuras líneas).

HILACIÓN: Explica que este objetivo será el que dicte qué palabras clave usaremos en la estrategia de búsqueda. Asegúrate de que el objetivo sea coherente con la extensión de ${form.extension} solicitada.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Estrategia de búsqueda": (form) => `Actúa como documentalista científico especializado en ${form.facultad}.
Para cumplir el objetivo "${form.objetivoRev}" sobre "${form.temaRev}", necesitamos la ruta de recolección de datos.

1. DESCRIPTORES: Entrega términos clave en español e inglés (MeSH/DeCS).
2. ECUACIÓN DE BÚSQUEDA: Crea 2 opciones de cadenas con operadores booleanos (AND, OR) optimizadas para ${form.revista}.
3. FUENTES: Recomienda las 3 bases de datos más potentes para tu área.

HILACIÓN: Indica que los resultados de esta búsqueda pasarán por un filtro necesario que definiremos en el siguiente paso (criterios de inclusión).`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Criterios y delimitación": (form) => `Actúa como experto en protocolos PRISMA. 
Ya tenemos la estrategia, ahora debemos delimitar qué artículos entrarán al estudio para el nivel ${form.nivel}.

TAREA: Propón opciones para:
1. RANGO TEMPORAL: Sugiere si usar los últimos 5 años (${form.periodoRev}) o un rango histórico.
2. CRITERIOS TÉCNICOS: Da 3 opciones de inclusión (ej. solo artículos originales, solo acceso abierto) y 2 de exclusión (ej. literatura gris, tesis no publicadas).

HILACIÓN: Explica que estos filtros son los que garantizan que la "Discusión" final del artículo tenga calidad científica y no sea una simple opinión.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Esquema de redacción": (form) => `Actúa como editor senior de la revista ${form.revista}. 
Para finalizar la preparación del investigador ${form.nombre}, organizaremos el cuerpo del manuscrito.

TAREA: Presenta un esquema de contenidos (Índice sugerido) basado en:
- El tema: "${form.temaRev}".
- El tipo: ${form.tipoRevision}.
- Las restricciones: "${form.restricciones}".

HILACIÓN FINAL: Propón 3 subtítulos específicos para la sección de "Desarrollo" que agrupen la literatura de forma lógica (ej. por variables, por evolución temporal o por posturas teóricas). Este esquema es tu mapa final para empezar a escribir con la norma ${form.citacion}.`,

"Títulos propuestos": (form) => `Actúa como editor en jefe de la revista ${form.revista}.

Formula 5 propuestas de títulos definitivos y diseña el bloque de autoría para el manuscrito del investigador ${form.nombre}.
- Tema: "${form.temaRev}" | Objetivo: "${form.objetivoRev}"

REGLAS PARA TÍTULOS:
1. Máximo 20 palabras, precisos y atractivos.
2. OBLIGATORIO: Los títulos deben incluir al final el tipo de diseño (Ej: "... : una ${form.tipoRevision}").
3. REFLEJO: Deben denotar el período temporal (${form.periodoRev}).

REGLAS PARA BLOQUE DE AUTOR(ES) Y AFILIACIÓN:
Debajo de los títulos, genera una plantilla de "Encabezado de Autor" que incluya:
- Nombre completo: ${form.nombre}
- Institución/Afiliación: Facultad de ${form.facultad}
- [Espacio para ORCID opcional]
- Indicación de "Autor de correspondencia".

Cumple con las restricciones: "${form.restricciones}". Presenta en ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Resumen": (form) => `Actúa como experto en redacción científica.

Elabora el Resumen (Abstract) para el artículo del investigador ${form.nombre}, destinado a la revista ${form.revista}.
- Tema: "${form.temaRev}" | Objetivo: "${form.objetivoRev}"
- Método: ${form.tipoRevision}, consultando las bases ${form.basesDatos} bajo los criterios ${form.criteriosRev} en el período ${form.periodoRev}.

REGLAS DE FORMATO:
- Extensión: Entre 150 y 250 palabras (UN SOLO PÁRRAFO CONTINUO).
- Estructura OBLIGATORIA: Breve objetivo de la revisión -> Metodología (bases de datos y criterios de selección) -> Principales hallazgos esperados -> Conclusiones globales.
- Nivel: ${form.nivel}. Restricciones: "${form.restricciones}".

Idioma: ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Palabras clave": (form) => `Actúa como especialista en indexación para la revista ${form.revista}.

Formula las Palabras Clave (Keywords) para el artículo del autor ${form.nombre}:
TEMA: "${form.temaRev}"

REGLAS:
1. CANTIDAD: Entre 3 y 6 términos representativos del tema.
2. TESAUROS: Usa términos validados en la disciplina de la Facultad de ${form.facultad}.
3. OBLIGATORIO: Incluye el tipo de revisión (${form.tipoRevision}) como uno de los términos.
4. IDIOMA: Presenta en ${form.idioma} y su equivalente en Inglés.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Introducción": (form) => `Actúa como investigador experto y documentalista.
    
CONTEXTO DEL MANUSCRITO:
- Autor: ${form.nombre} | Nivel: ${form.nivel} | Facultad: ${form.facultad} | Docente: ${form.docente}

Elabora la Introducción para este ARTÍCULO DE REVISIÓN.
Tema: "${form.temaRev}" | Objetivo: "${form.objetivoRev}"

Sigue ESTRICTAMENTE esta estructura:
1. CONTEXTUALIZACIÓN: Introduce el tema y su panorama actual.
2. IMPORTANCIA DEL PROBLEMA: Explica la relevancia de investigar esto hoy.
3. JUSTIFICACIÓN DE LA REVISIÓN: Señala por qué es necesaria esta síntesis bibliográfica específica.
4. TIPO DE REVISIÓN: Menciona de forma explícita que este documento es una ${form.tipoRevision}.
5. OBJETIVO: Cierra el apartado declarando el objetivo general del artículo.

Aplica la extensión ${form.extension}, norma ${form.citacion} y restricciones: "${form.restricciones}". Idioma: ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Metodología": (form) => `Actúa como especialista en metodología documental.

Elabora la sección de Metodología (muy importante para este nivel ${form.nivel}) del autor ${form.nombre}.

Integra orgánicamente los siguientes parámetros:
1. TIPO DE REVISIÓN: Define el diseño como ${form.tipoRevision}.
2. BASES DE DATOS: Describe la consulta en "${form.basesDatos}".
3. ESTRATEGIA DE BÚSQUEDA: Explica el uso de palabras clave y operadores booleanos (AND, OR, NOT) aplicados a la búsqueda.
4. CRITERIOS DE SELECCIÓN: Detalla los criterios de inclusión y exclusión: "${form.criteriosRev}".
5. PERÍODO DE ANÁLISIS: Menciona y justifica el rango: "${form.periodoRev}".
6. PROCESO DE SELECCIÓN: Describe el flujograma metodológico (ej. diagrama PRISMA), indicando fases de identificación, cribado e inclusión.

Extensión: ${form.extension}. Restricciones: "${form.restricciones}". Idioma: ${form.idioma}. Citas en ${form.citacion}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Desarrollo": (form) => `Actúa como redactor científico experto en síntesis bibliográfica.

Elabora la "PLANTILLA DE DESARROLLO / CUERPO DE LA REVISIÓN" para el artículo del investigador ${form.nombre} (Facultad de ${form.facultad}).
- Tema: "${form.temaRev}" | Objetivo: "${form.objetivoRev}"

INSTRUCCIONES CLAVE:
1. REEMPLAZO DE "RESULTADOS": Aclara que esta sección actúa como el cuerpo de la revisión.
2. ESTRUCTURACIÓN: Propón subtítulos basados en Categorías temáticas, Variables, Enfoques teóricos o Tendencias de investigación.
3. SÍNTESIS Y COMPARACIÓN: Instruye al autor (usando placeholders [ ]) sobre dónde debe insertar la síntesis de estudios, la comparación de resultados entre autores y la identificación de vacíos.
4. FORMATO: Considera las restricciones "${form.restricciones}".

Idioma: ${form.idioma}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Discusión": (form) => `Actúa como investigador senior apuntando a la revista ${form.revista}.

Elabora la Discusión para el artículo de revisión del autor ${form.nombre}.
- Tema: "${form.temaRev}" | Objetivo: "${form.objetivoRev}" | Tipo: ${form.tipoRevision}

Sigue ESTRICTAMENTE esta estructura analítica:
1. ANÁLISIS CRÍTICO: Evalúa la literatura revisada del período (${form.periodoRev}).
2. COINCIDENCIAS Y CONTRADICCIONES: Explica los debates y puntos de acuerdo entre los estudios extraídos de ${form.basesDatos}.
3. TENDENCIAS: Identifica las tendencias de investigación actuales en este campo.
4. IMPLICANCIAS: Detalla las implicancias teóricas y prácticas de los hallazgos.
5. RESTRICCIONES: Aplica el rigor del nivel ${form.nivel} y cumple: "${form.restricciones}".

Extensión: ${form.extension}. Idioma: ${form.idioma}. Citas en ${form.citacion}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Conclusiones": (form) => `Actúa como metodólogo experto.

Elabora las Conclusiones para este ARTÍCULO DE REVISIÓN.
- Autor: ${form.nombre} | Facultad: ${form.facultad} | Docente: ${form.docente}

Sigue estas pautas excluyentes:
1. SÍNTESIS GLOBAL: Resume el análisis de forma contundente en relación al objetivo: "${form.objetivoRev}".
2. APORTE DEL ARTÍCULO: Menciona el valor agregado de esta revisión para la comunidad académica.
3. VACÍOS IDENTIFICADOS: Señala qué problemas persisten en la literatura actual.
4. LÍNEAS FUTURAS: Propón investigaciones futuras derivadas de estos vacíos.
5. RESTRICCIONES: Cumple con: "${form.restricciones}".

Idioma: ${form.idioma}. Ajustado a extensión ${form.extension}.`,

//***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***////***//

    "Referencias": (form) => `Actúa como documentalista científico.

Genera la estructura de REFERENCIAS para el artículo del autor ${form.nombre} (Revista: ${form.revista}).
- Tema: "${form.temaRev}" | Criterios aplicados: "${form.criteriosRev}"

Sigue estas instrucciones:
1. ADVERTENCIA DE VOLUMEN: Indica explícitamente al autor que, al ser una ${form.tipoRevision}, se espera un alto número de referencias (típicamente entre 20 y 80+ fuentes).
2. FUENTES REVISADAS: Recuerda al autor que SOLO debe incluir las fuentes primarias finalmente analizadas en el cuerpo del texto.
3. FORMATO NORMALIZADO: Exige y aplica estrictamente la norma ${form.citacion}.
4. EJEMPLOS SIMULADOS: Crea 3 ejemplos de referencias perfectamente formateados en ${form.citacion} sobre "${form.temaRev}".

Idioma: ${form.idioma}.`
};