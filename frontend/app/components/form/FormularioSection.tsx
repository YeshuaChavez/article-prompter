"use client";
import React from "react";
import type { FormData } from "../shared/types";

// ── Bloques fijos ─────────────────────────────────────────────────────────────
import BloqueAutor from "./bloques/BloqueAutor";
import BloqueFormato from "./bloques/BloqueFormato";
import BloqueSecciones from "./bloques/BloqueSecciones";

// ── Formularios por tipo ──────────────────────────────────────────────────────
import FormTeorica from "./tipos/FormTeorica";
import FormSistematica from "./tipos/FormSistematica";
import FormEmpirica from "./tipos/FormEmpirica";
import FormCaso from "./tipos/FormCaso";

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
    teorica:    { color: "#e67e22", label: "Revisión Teórica" },
    sistematica:{ color: "#2980b9", label: "Revisión Sistemática" },
    empirica:   { color: "#27ae60", label: "Investigación Empírica" },
    caso:       { color: "#8e44ad", label: "Estudio de Caso" },
};

// ── Mapa tipo → formulario específico ────────────────────────────────────────
const FORM_POR_TIPO: Record<string, React.ComponentType<{ form: FormData; onUpdate: (key: keyof FormData, value: string) => void }>> = {
    teorica:     FormTeorica,
    sistematica: FormSistematica,
    empirica:    FormEmpirica,
    caso:        FormCaso,
};

export default function FormularioSection({ tipoActivo, form, secciones, onUpdate, onToggleSeccion, onGenerar }: Props) {
    const cfg = TIPO_CONFIG[tipoActivo] ?? { color: "#003087", label: "" };
    const FormEspecifico = FORM_POR_TIPO[tipoActivo] ?? FormTeorica;

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