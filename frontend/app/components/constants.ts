// ─── COLORES UNMSM ───────────────────────────────────────────────
export const COLORES = {
  azul: "#003087",
  azulOscuro: "#001a4d",
  azulMedio: "#004aad",
  rojo: "#C8102E",
  rojoOscuro: "#8b0000",
  dorado: "#C9A84C",
  doradoClaro: "#e8c96a",
  blanco: "#ffffff",
  grisClaro: "#f4f6fa",
  grisMedio: "#e0e4ef",
  grisTexto: "#444",
  sidebar: "#001f5c",
};

// ─── TIPOS ───────────────────────────────────────────────────────
export interface Revision {
  id: string;
  label: string;
  color: string;
  icon: string;
  desc: string;
}

export interface FormData {
  nombre: string;
  rol: string;
  facultad: string;
  nivel: string;
  tema: string;
  objetivo: string;
  hipotesis: string;
  keywords: string;
  extension: string;
  citacion: string;
  revista: string;
  idioma: string;
  docente: string;
  restricciones: string;
}

export interface PromptCard {
  id: string;
  titulo: string;
  descripcion: string;
  color: string;
  texto: string;
}

// ─── DATOS ───────────────────────────────────────────────────────
export const REVISIONES: Revision[] = [
  { id: "teorica",       label: "Revisión Teórica",       color: "#e67e22", icon: "📖", desc: "Análisis y síntesis del estado del arte sobre un tema" },
  { id: "bibliografica", label: "Revisión Bibliográfica", color: "#16a085", icon: "📚", desc: "Revisión exhaustiva de fuentes y literatura existente" },
  { id: "sistematica",   label: "Revisión Sistemática",   color: "#8e44ad", icon: "🔍", desc: "Método estructurado PRISMA con criterios de inclusión/exclusión" },
  { id: "tesis",         label: "Inv. Original de Tesis", color: "#2980b9", icon: "🎓", desc: "Investigación empírica original con hipótesis y metodología" },
  // { id: "ensayo",        label: "Ensayo Académico",       color: "#27ae60", icon: "✍️", desc: "Argumentación académica con postura crítica" },
  // { id: "reporte",       label: "Informe Técnico",        color: "#c0392b", icon: "🧪", desc: "Reporte de laboratorio o proyecto aplicado" },
  // { id: "monografia",    label: "Monografía",             color: "#6c3483", icon: "📄", desc: "Documento académico extenso sobre un tema específico" },
];

export const SECCIONES_POR_TIPO: Record<string, string[]> = {
  teorica:       ["Resumen / Abstract", "Introducción", "Objetivo de la revisión", "Marco conceptual", "Metodología de búsqueda", "Resultados de la revisión", "Discusión", "Conclusiones", "Referencias"],
  bibliografica: ["Resumen", "Introducción", "Criterios de búsqueda", "Fuentes consultadas", "Síntesis bibliográfica", "Análisis crítico", "Conclusiones", "Referencias"],
  sistematica:   ["Resumen estructurado (PRISMA)", "Introducción", "Pregunta PICO", "Criterios de inclusión/exclusión", "Estrategia de búsqueda", "Selección de estudios", "Extracción de datos", "Resultados", "Discusión", "Conclusiones", "Referencias"],
  tesis:         ["Resumen / Abstract", "Introducción", "Planteamiento del problema", "Objetivos", "Hipótesis", "Marco teórico", "Metodología", "Resultados", "Discusión", "Conclusiones", "Referencias", "Anexos"],
  ensayo:        ["Introducción con tesis", "Desarrollo argumentativo", "Contraargumentos", "Refutación", "Conclusión", "Referencias"],
  reporte:       ["Resumen ejecutivo", "Objetivos", "Marco teórico", "Materiales y métodos", "Resultados / Datos", "Análisis e interpretación", "Conclusiones y recomendaciones", "Referencias", "Anexos"],
  monografia:    ["Portada", "Índice", "Introducción", "Capítulo I: Marco teórico", "Capítulo II: Desarrollo temático", "Capítulo III: Análisis", "Conclusiones", "Bibliografía", "Anexos"],
};

export const FACULTADES: string[] = [
  "Letras y Ciencias Humanas", "Derecho y Ciencia Política", "Ciencias Contables",
  "Ciencias Administrativas", "Ciencias Económicas", "Medicina", "Farmacia y Bioquímica",
  "Odontología", "Medicina Veterinaria", "Biología", "Química e Ingeniería Química",
  "Física", "Matemática", "Ingeniería Industrial", "Ingeniería de Sistemas e Informática",
  "Ingeniería Electrónica", "Ciencias Sociales", "Educación", "Psicología",
  "Ciencias de la Comunicación", "Otra",
];

export const CITAS:       string[] = ["APA 7.ª edición", "APA 6.ª edición", "Vancouver", "IEEE", "Chicago", "MLA"];
export const NIVELES:     string[] = ["Pregrado", "Posgrado / Maestría", "Doctorado", "Investigación docente"];
export const REVISTAS:    string[] = ["Revistas Latindex", "Scielo", "Scopus", "Web of Science", "Redalyc", "No aplica"];
export const ROLES:       string[] = ["Autor principal", "Coautor", "Tesista", "Investigador docente"];
export const IDIOMAS:     string[] = ["Español", "Inglés", "Bilingüe (ES/EN)"];
export const EXTENSIONES: string[] = ["500–1,000 palabras", "1,000–2,500 palabras", "2,500–5,000 palabras", "5,000–8,000 palabras", "8,000+ palabras"];

// ─── ESTILOS REUTILIZABLES ────────────────────────────────────────
export const inp: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 12px",
  borderRadius: 7,
  border: "1px solid #cdd5e8",
  background: "#f8faff",
  color: "#222",
  fontFamily: "'Palatino Linotype', Georgia, serif",
  fontSize: 13,
  outline: "none",
};

export const grid2: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
};

// ─── BUILD PROMPTS (múltiples plantillas) ────────────────────────
export function buildPrompts(tipo: string, form: FormData, secciones: string[]): PromptCard[] {
  const rev  = REVISIONES.find(r => r.id === tipo);
  const secc = secciones.length > 0 ? secciones : SECCIONES_POR_TIPO[tipo];
  const t    = form.tema       || "[tema no especificado]";
  const cita = form.citacion   || "APA 7.ª edición";
  const fac  = form.facultad   || "UNMSM";
  const niv  = form.nivel      || "Pregrado";

  return [
    {
      id: "reformula",
      titulo: "Prompt 1: Reformula tu tema de investigación",
      descripcion: "Identifica variables y genera variantes del tema",
      color: "#0abf8a",
      texto:
`Actúa como un experto en investigación académica con 20 años de experiencia. A partir del tema [${t}] realiza lo siguiente:

1. VARIABLES IDENTIFICADAS:
   - Variable Independiente (VI): El factor que influye o determina.
   - Variable Dependiente (VD): El resultado o efecto que se mide.
   - Variable Interviniente/Control (VIC): Factores que afectan la relación VI-VD (si aplica).

2. DEFINICIÓN CONCEPTUAL DE VARIABLES:
   Para cada variable identificada, proporciona una definición conceptual rigurosa respaldada por un artículo científico indexado (${cita}).

3. TRES NUEVAS VARIANTES DEL TEMA:
   Formula tres variantes del tema [${t}] claramente delimitadas, especificando a quién beneficiarán. Por cada variante formula una pregunta de investigación clara, precisa y contestable.

Contexto: Facultad de ${fac} — UNMSM — Nivel ${niv}. Presenta toda la información en español.`,
    },
    {
      id: "vacios",
      titulo: "Prompt 2: Encuentra vacíos temáticos",
      descripcion: "Identifica brechas en la literatura científica",
      color: "#0abf8a",
      texto:
`Actúa como un investigador experto en el área de ${fac}. Realiza una revisión exhaustiva de la literatura científica actual sobre el tema [${t}].

1. Identifica y analiza CINCO VACÍOS TEMÁTICOS significativos en la investigación existente.
2. Para cada vacío:
   - Describe el vacío en 2–3 párrafos con lenguaje académico.
   - Cita al menos dos artículos científicos indexados (${cita}) que evidencien la insuficiencia de estudios.
   - Explica por qué este vacío es relevante para la comunidad académica peruana y latinoamericana.
3. Al final presenta una lista priorizada de los vacíos según su impacto potencial.

Nivel: ${niv} — UNMSM. Responde en español.`,
    },
    {
      id: "estructura",
      titulo: "Prompt 3: Genera la estructura completa",
      descripcion: "Esqueleto detallado del documento con contenido sugerido",
      color: "#2980b9",
      texto:
`Eres un asistente especializado en redacción académica para la UNMSM — Facultad de ${fac}.

Genera la estructura completa y detallada de un ${rev?.label} sobre el tema [${t}].

SECCIONES REQUERIDAS:
${secc.map((s, i) => `${i + 1}. ${s}`).join("\n")}

Para CADA sección indica:
- Objetivo de la sección (qué debe lograr)
- Extensión recomendada en palabras
- Contenido sugerido (subtemas, argumentos clave, datos a incluir)
- Tipo de fuentes recomendadas

Norma de citación: ${cita} — Extensión total: ${form.extension || "a definir"}`,
    },
    {
      id: "introduccion",
      titulo: "Prompt 4: Redacta la introducción",
      descripcion: "Introducción académica lista para usar",
      color: "#8e44ad",
      texto:
`Actúa como redactor académico experto para la Universidad Nacional Mayor de San Marcos.

Redacta la INTRODUCCIÓN completa de un ${rev?.label} con las siguientes características:
• Tema: ${t}
• Facultad: ${fac} — UNMSM — Nivel: ${niv}
• Hipótesis/Argumento: ${form.hipotesis || "a desarrollar"}
• Palabras clave: ${form.keywords || "no especificadas"}

La introducción debe incluir:
1. Presentación del problema (contexto general → específico)
2. Justificación e importancia del estudio
3. Antecedentes breves (3–5 referencias en ${cita})
4. Objetivo general del trabajo
5. Estructura del documento

Extensión: 400–600 palabras. Tono formal e impersonal. En español.`,
    },
    {
      id: "referencias",
      titulo: "Prompt 5: Busca referencias académicas",
      descripcion: "Lista de fuentes verificables para el trabajo",
      color: "#e67e22",
      texto:
`Actúa como un bibliotecólogo especializado en bases de datos académicas latinoamericanas.

Para el tema [${t}] — Facultad de ${fac}, UNMSM — busca y lista:

1. CINCO artículos de Scielo Perú o Scielo Latinoamérica (últimos 7 años)
2. TRES tesis de CYBERTESIS UNMSM o repositorios de universidades peruanas
3. DOS artículos de ALICIA CONCYTEC relacionados al tema
4. TRES libros académicos o capítulos de referencia

Para cada fuente incluye:
- Referencia completa en formato ${cita}
- Resumen de 2–3 líneas sobre su aporte al tema
- Enlace o DOI si está disponible

Restricciones: ${form.restricciones || "ninguna"} — Palabras clave: ${form.keywords || t}`,
    },
    {
      id: "completo",
      titulo: "Prompt 6: Redacta el documento completo",
      descripcion: "Prompt maestro para generar todo el documento",
      color: "#C8102E",
      texto:
`Eres un asistente especializado en redacción académica universitaria para la Universidad Nacional Mayor de San Marcos (UNMSM) — la universidad decana de América.

━━━ PERFIL DEL TRABAJO ━━━
• Tipo de documento: ${rev?.label}
• Autor / Rol: ${form.nombre || "No especificado"} — ${form.rol || "Autor principal"}
• Facultad: ${fac}
• Nivel académico: ${niv}
• Tema principal: ${t}
• Idioma: ${form.idioma || "Español"}
• Extensión aproximada: ${form.extension || "A definir"}
• Norma de citación: ${cita}
• Revista objetivo: ${form.revista || "No aplica"}
• Docente / Cátedra: ${form.docente || "No especificado"}

━━━ CONTENIDO ━━━
• Objetivo: ${form.objetivo || "No especificado"}
• Hipótesis / Argumento central: ${form.hipotesis || "No especificado"}
• Palabras clave: ${form.keywords || "No especificadas"}
• Restricciones: ${form.restricciones || "Ninguna"}

━━━ ESTRUCTURA REQUERIDA ━━━
${secc.map((s, i) => `${i + 1}. ${s}`).join("\n")}

━━━ INSTRUCCIONES ━━━
1. Lenguaje académico formal según estándares UNMSM.
2. Normas ${cita} en todas las citas y referencias.
3. Mínimo 10 referencias de CYBERTESIS UNMSM, ALICIA CONCYTEC, Scielo Perú.
4. Tono impersonal y argumentativo basado en evidencia.
5. Resumen/abstract en español e inglés (si aplica).
6. Cada sección con extensión proporcional y delimitación clara.

Redacta el documento completo siguiendo todas las indicaciones.`,
    },
  ];
}