"use client";

import React, { useState } from "react";
import AppHeader from "./Header";
import AppFooter from "./Footer";
import Sidebar from "./Sidebar";
import FormularioSection from "./FormularioSection";
import PromptOutput from "./PromptOutput";
import { COLORES, FormData, PromptCard, buildPrompts } from "./constants";

const FORM_INICIAL: FormData = {
  nombre: "", rol: "", facultad: "", nivel: "",
  tema: "", objetivo: "", hipotesis: "", keywords: "",
  extension: "", citacion: "", revista: "", idioma: "",
  docente: "", restricciones: "",
};

export default function PromptGenerator() {
  const [tipoActivo, setTipoActivo] = useState("teorica");
  const [secciones, setSecciones]   = useState<string[]>([]);
  const [form, setForm]             = useState<FormData>(FORM_INICIAL);
  const [prompts, setPrompts]       = useState<PromptCard[]>([]);
  const [tab, setTab]               = useState<"form" | "prompt">("form");

  const handleUpdate = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleToggleSeccion = (s: string) =>
    setSecciones((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleCambiarTipo = (id: string) => {
    setTipoActivo(id);
    setSecciones([]);
    setTab("form");
    setPrompts([]);
  };

  const handleGenerar = () => {
    setPrompts(buildPrompts(tipoActivo, form, secciones));
    setTab("prompt");
  };

  const handleNuevoPrompt = () => {
    setForm(FORM_INICIAL);
    setSecciones([]);
    setPrompts([]);
    setTab("form");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: COLORES.grisClaro,
      fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* ── HEADER ── */}
      <AppHeader />

      {/* ── MAIN ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* ── SIDEBAR ── */}
        <Sidebar tipoActivo={tipoActivo} onCambiarTipo={handleCambiarTipo} />

        {/* ── CONTENIDO ── */}
        <main style={{ flex: 1, overflowY: "auto" }}>

          {/* Tabs */}
          <div style={{
            background: COLORES.blanco,
            borderBottom: `2px solid ${COLORES.grisMedio}`,
            display: "flex",
            padding: "0 28px",
            position: "sticky",
            top: 0,
            zIndex: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}>
            {([
              ["form",   "📋 Formulario"],
              ["prompt", "⚡ Prompts Generados"],
            ] as const).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                style={{
                  padding: "14px 22px",
                  border: "none",
                  background: "transparent",
                  borderBottom: tab === id ? `3px solid ${COLORES.rojo}` : "3px solid transparent",
                  color: tab === id ? COLORES.rojo : "#888",
                  fontFamily: "inherit",
                  fontSize: 14,
                  fontWeight: tab === id ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  marginBottom: -2,
                }}
              >
                {label}
                {id === "prompt" && prompts.length > 0 && (
                  <span style={{
                    marginLeft: 7, background: COLORES.rojo, color: "#fff",
                    fontSize: 10, padding: "1px 7px", borderRadius: 20,
                  }}>
                    {prompts.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Vista activa */}
          {tab === "form" ? (
            <FormularioSection
              tipoActivo={tipoActivo}
              form={form}
              secciones={secciones}
              onUpdate={handleUpdate}
              onToggleSeccion={handleToggleSeccion}
              onGenerar={handleGenerar}
            />
          ) : (
            <PromptOutput
              prompts={prompts}
              tipoActivo={tipoActivo}
              facultad={form.facultad}
              onEditarFormulario={() => setTab("form")}
              onNuevoPrompt={handleNuevoPrompt}
            />
          )}
        </main>
      </div>

      {/* ── FOOTER ── */}
      <AppFooter />
    </div>
  );
}