import type { LucideIcon } from "lucide-react";

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
    periodo: string;
    exclusion: string;
    muestra: string;
    evidencia: string;
}

export interface PromptCard {
    id: string;
    titulo: string;
    descripcion?: string;
    texto: string;
    color: string;
}

export interface RevisionTipo {
    id: string;
    label: string;
    icon: LucideIcon;
    color: string;
    desc: string;
}