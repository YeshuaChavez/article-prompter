"use client";
import React, { useState } from "react";

import { TopHeader } from "../layout/Header";
import { FooterGenerador } from "../layout/Footer";
import Sidebar from "../layout/Sidebar";

import FormularioSection from "../form/FormularioSection";
import PromptOutput from "./PromptOutput";
import GuiaUsoAnimada from "../animation/GuiaAnimada";
import { buildPrompts } from "../../lib/buildPrompts";
import type { FormData, PromptCard } from "../shared/types";

const FORM_INICIAL: FormData = {
    // Datos del autor
    nombre: "", facultad: "", nivel: "", docente: "",
    // Formato y estilo
    extension: "", citacion: "", revista: "", idioma: "", restricciones: "",
    // Revisión Teórica
    temaT: "", objetivoT: "", corrientes: "", autores: "", periodo: "",
    // Revisión Sistemática
    temaS: "", objetivoS: "", preguntaPico: "", criteriosInc: "", basesDatos: "", criteriosExc: "",
    // Investigación Empírica
    temaE: "", objetivoE: "", hipotesis: "", disenio: "", muestra: "", instrumento: "",
    // Estudio de Caso
    temaC: "", objetivoC: "", preguntaCaso: "", unidadAnalisis: "", evidencia: "",
};

const CAMPOS_ESPECIFICOS: (keyof FormData)[] = [
    "temaT", "objetivoT", "corrientes", "autores", "periodo",
    "temaS", "objetivoS", "preguntaPico", "criteriosInc", "basesDatos", "criteriosExc",
    "temaE", "objetivoE", "hipotesis", "disenio", "muestra", "instrumento",
    "temaC", "objetivoC", "preguntaCaso", "unidadAnalisis", "evidencia",
];

export default function PromptGenerator() {
    const [tipoActivo, setTipoActivo] = useState("teorica");
    const [secciones, setSecciones] = useState<string[]>([]);
    const [form, setForm] = useState<FormData>(FORM_INICIAL);
    const [prompts, setPrompts] = useState<PromptCard[]>([]);
    const [tab, setTab] = useState<"form" | "prompt">("form");
    const [showGuide, setShowGuide] = useState(false);

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
        setForm(prev => {
            const limpio = { ...prev };
            CAMPOS_ESPECIFICOS.forEach(k => { (limpio as Record<string, string>)[k] = ""; });
            return limpio;
        });
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
            fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
            display: "flex",
            flexDirection: "column",
            position: "relative",
        }}>
            {/* Fondo con imagen */}
            <div style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                backgroundImage: "url('/bib-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }} />
            {/* Overlay semitransparente */}
            <div style={{
                position: "fixed",
                inset: 0,
                zIndex: 1,
                background: "rgba(240, 242, 247, 0.88)",
            }} />

            {/* Contenido */}
            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <TopHeader onGuide={() => setShowGuide(true)} />

                <div style={{ display: "flex", flex: 1 }}>
                    <Sidebar tipoActivo={tipoActivo} onCambiarTipo={handleCambiarTipo} />

                    <main style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>
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

                <FooterGenerador />
            </div>

            <GuiaUsoAnimada
                isOpen={showGuide}
                onClose={() => setShowGuide(false)}
            />
        </div>
    );
}