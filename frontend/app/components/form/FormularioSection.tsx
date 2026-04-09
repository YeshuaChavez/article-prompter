"use client";
import React from "react";
import type { FormData } from "../shared/types";

// ── Bloques fijos ─────────────────────────────────────────────────────────────
import BloqueAutor from "./bloques/BloqueAutor";
import BloqueFormato from "./bloques/BloqueFormato";
import BloqueSecciones from "./bloques/BloqueSecciones";

// ── Formularios por tipo ──────────────────────────────────────────────────────
import FormInvestigacion from "./tipos/FormInvestigacion";
import FormRevision from "./tipos/FormRevision";
import FormMetodologico from "./tipos/FormMetodologico";
import FormCaso from "./tipos/FormCaso";
import FormReflexion from "./tipos/FormReflexion";

interface Props {
    tipoActivo: string;
    form: FormData;
    secciones: string[];
    onUpdate: (key: keyof FormData, value: string) => void;
    onToggleSeccion: (s: string) => void;
    onGenerar: () => void;
}

// ── Config de colores y labels por tipo ───────────────────────────────────────
const TIPO_CONFIG: Record<string, { color: string; label: string }> = {
    investigación_original: { color: "#e67e22", label: "Artículo de Investigación Original" },
    revisión:               { color: "#2980b9", label: "Artículo de Revisión" },
    metodológico:           { color: "#27ae60", label: "Artículo Metodológico" },
    caso:                   { color: "#8e44ad", label: "Estudio de Caso" },
    reflexión:              { color: "#f1c40f", label: "Artículo de Reflexión" },
};

// ── Mapa tipo → formulario específico ────────────────────────────────────────
const FORM_POR_TIPO: Record<string, React.ComponentType<{ form: FormData; onUpdate: (key: keyof FormData, value: string) => void }>> = {
    investigación_original: FormInvestigacion,
    revisión:               FormRevision,
    metodológico:           FormMetodologico,
    caso:                   FormCaso,
    reflexión:              FormReflexion,
};

export default function FormularioSection({ tipoActivo, form, secciones, onUpdate, onToggleSeccion, onGenerar }: Props) {
    const cfg = TIPO_CONFIG[tipoActivo] ?? { color: "#003087", label: "" };
    const FormEspecifico = FORM_POR_TIPO[tipoActivo] ?? FormInvestigacion;

    return (
        <div style={{ padding: "28px 32px 48px", maxWidth: 880, margin: "0 auto" }}>

            {/* Etiqueta del tipo activo */}
            <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 16px", borderRadius: 20, marginBottom: 20,
                background: cfg.color + "15",
                border: `1.5px solid ${cfg.color}40`,
                fontSize: 12, fontWeight: 700, color: cfg.color,
                letterSpacing: 0.5, textTransform: "uppercase",
            }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: cfg.color, display: "inline-block" }} />
                {cfg.label}
            </div>

            {/* Bloque 1 — Datos del autor (siempre fijo) */}
            <BloqueAutor form={form} onUpdate={onUpdate} />

            {/* Bloque 2 — Específico por tipo */}
            <FormEspecifico form={form} onUpdate={onUpdate} />

            {/* Bloque 3 — Formato y estilo (siempre fijo) */}
            <BloqueFormato form={form} onUpdate={onUpdate} />

            {/* Bloque 4 — Secciones + Generar (siempre fijo) */}
            <BloqueSecciones
                tipoActivo={tipoActivo}
                secciones={secciones}
                color={cfg.color}
                onToggleSeccion={onToggleSeccion}
                onGenerar={onGenerar}
            />
        </div>
    );
}