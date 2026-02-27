import type { FormData, PromptCard } from "../components/shared/types";
import { REVISIONES, SECCIONES_POR_TIPO } from "../components/shared/constants";

export function buildPrompts(
    tipo: string,
    form: FormData,
    secciones: string[]
): PromptCard[] {
    const rev = REVISIONES.find((r) => r.id === tipo);
    const secc = secciones.length > 0 ? secciones : (SECCIONES_POR_TIPO[tipo] ?? []);
    const t = form.tema || "[tema no especificado]";
    const fac = form.facultad || "[facultad]";
    const obj = form.objetivo || "[objetivo no definido]";
    const hip = form.hipotesis || "[hipótesis no definida]";
    const kw = form.keywords || "[sin keywords]";
    const cita = form.citacion || "APA 7.ª edición";
    const ext = form.extension || "Estándar";
    const idiom = form.idioma || "Español";
    const nivel = form.nivel || "pregrado";
    const rol = form.rol || "estudiante";
    const nombre = form.nombre || "el autor";

    return [
        {
            id: "reformula",
            titulo: "Prompt 1: Reformula tu tema",
            color: "#0abf8a",
            descripcion: "Afina el enfoque del artículo",
            texto:
                `Actúa como un experto en metodología de investigación académica especializado en la Facultad de ${fac}.

Tu tarea es ayudar a ${nombre} (${rol}, nivel ${nivel}) a reformular y precisar el siguiente tema de investigación:

TEMA ORIGINAL: "${t}"
OBJETIVO DECLARADO: "${obj}"

Por favor:
1. Reformula el tema con mayor precisión y alcance académico.
2. Propón 3 variantes del título adaptadas a una ${rev?.label ?? "revisión"}.
3. Delimita el alcance temporal, geográfico y conceptual.
4. Identifica las variables o categorías centrales de análisis.

Formato de salida esperado en ${idiom}, normas ${cita}.`,
        },
        {
            id: "estructura",
            titulo: "Prompt 2: Genera la estructura",
            color: "#2980b9",
            descripcion: "Crea el esqueleto del artículo",
            texto:
                `Actúa como editor senior de una revista académica indexada en ${form.revista || "Scopus"}.

Genera la estructura completa de un artículo de tipo "${rev?.label}" sobre:
TEMA: "${t}"

SECCIONES REQUERIDAS:
${secc.map((s, i) => `${i + 1}. ${s}`).join("\n")}

Para cada sección proporciona:
- Propósito y función dentro del artículo
- Extensión aproximada (palabras)
- Elementos clave a incluir
- Advertencias o errores comunes a evitar

Extensión total objetivo: ${ext}. Idioma: ${idiom}. Citación: ${cita}.`,
        },
        {
            id: "introduccion",
            titulo: "Prompt 3: Redacta la Introducción",
            color: "#e74c3c",
            descripcion: "Primera impresión académica sólida",
            texto:
                `Actúa como redactor académico experto en artículos de ${rev?.label ?? "investigación"}.

Redacta la sección de Introducción para el siguiente artículo:

TEMA: "${t}"
HIPÓTESIS O PREGUNTA CENTRAL: "${hip}"
KEYWORDS: ${kw}
AUDIENCIA: Lectores de la Facultad de ${fac}, nivel ${nivel}.

La introducción debe:
1. Contextualizar el problema con datos actuales y relevantes.
2. Evidenciar el gap o vacío en la literatura existente.
3. Declarar claramente el objetivo: "${obj}"
4. Anunciar la estructura del artículo.

Extensión sugerida: 400–600 palabras en ${idiom}. Sigue ${cita}.`,
        },
        {
            id: "keywords",
            titulo: "Prompt 4: Optimiza Keywords",
            color: "#f39c12",
            descripcion: "Mejora la visibilidad y indexación",
            texto:
                `Actúa como especialista en indexación y SEO académico.

Para el artículo sobre "${t}" de la Facultad de ${fac}:

KEYWORDS ACTUALES: ${kw}

Por favor:
1. Evalúa la pertinencia de las keywords existentes.
2. Propón 5–8 keywords optimizadas para bases de datos como ${form.revista || "Scopus"} y WoS.
3. Incluye 2–3 términos en ${idiom === "Inglés" ? "Español" : "Inglés"} para ampliar visibilidad.
4. Sugiere un resumen (abstract) de 150 palabras que integre estas keywords de forma natural.

Norma: ${cita}.`,
        },
        {
            id: "revision",
            titulo: "Prompt 5: Revisión Crítica",
            color: "#8e44ad",
            descripcion: "Detecta debilidades antes de enviar",
            texto:
                `Actúa como par evaluador (peer reviewer) de una revista ${form.revista || "Scopus Q1"}.

Analiza críticamente el siguiente artículo en desarrollo:

TIPO: ${rev?.label}
TEMA: "${t}"
OBJETIVO: "${obj}"
NIVEL DEL AUTOR: ${nivel} — Facultad de ${fac}

Evalúa y comenta sobre:
1. Coherencia entre título, objetivo e hipótesis.
2. Solidez metodológica esperada para una ${rev?.label}.
3. Posibles sesgos o limitaciones no declaradas.
4. Riesgos de plagio o solapamiento con literatura existente.
5. Recomendaciones para fortalecer la contribución original.

Sé riguroso y constructivo. Responde en ${idiom}.`,
        },
        {
            id: "conclusiones",
            titulo: "Prompt 6: Redacta Conclusiones",
            color: "#16a085",
            descripcion: "Cierre sólido y contribución clara",
            texto:
                `Actúa como metodólogo experto en ciencias de la ${fac}.

Redacta las Conclusiones del artículo tipo "${rev?.label}" sobre:
TEMA: "${t}"
OBJETIVO ALCANZADO: "${obj}"
SECCIONES DESARROLLADAS: ${secc.join(", ")}

Las conclusiones deben:
1. Sintetizar los hallazgos más relevantes (sin repetir la introducción).
2. Responder explícitamente a la pregunta o hipótesis: "${hip}"
3. Declarar la contribución original al campo.
4. Señalar las limitaciones del estudio.
5. Proponer líneas de investigación futura.
6. ${form.restricciones ? `Consideraciones adicionales: ${form.restricciones}` : "Mantener un tono académico sobrio y preciso."}

Extensión: 300–500 palabras. Idioma: ${idiom}. Citación: ${cita}.`,
        },
    ];
}