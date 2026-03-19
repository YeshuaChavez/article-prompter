"use client";
import React, { useState } from "react";

import { TopHeader } from "../layout/Header";
import { FooterGenerador } from "../layout/Footer";
import Sidebar from "../layout/Sidebar";

import FormularioSection from "../form/FormularioSection";
import PromptOutput from "./PromptOutput";
import { buildPrompts } from "../../lib/buildPrompts";
import type { FormData, PromptCard } from "../shared/types";

const FORM_INICIAL: FormData = {
    nombre: "", rol: "", facultad: "", nivel: "",
    tema: "", objetivo: "", hipotesis: "", keywords: "",
    extension: "", citacion: "", revista: "", idioma: "",
    docente: "", restricciones: "", periodo: "", exclusion: "",muestra: "",evidencia: ""
};

const GUIDE_STEPS = [
    { num: "01", title: "Tipo de artículo", desc: "Selecciona en el panel lateral el tipo de investigación que vas a redactar.", detail: "Teórica · Sistemática · Empírica · Estudio de caso", color: "#003087" },
    { num: "02", title: "Datos del autor", desc: "Ingresa tu nombre, facultad, nivel académico y el nombre de tu asesor.", detail: "Nombre · Rol · Facultad · Nivel · Docente", color: "#C8102E" },
    { num: "03", title: "Contenido del artículo", desc: "Define el tema, objetivo e hipótesis. Cada tipo tiene campos específicos.", detail: "Tema · Objetivo · Hipótesis · Keywords", color: "#C9A84C" },
    { num: "04", title: "Formato y estilo", desc: "Configura la extensión, norma de citación, idioma y revista objetivo.", detail: "APA · Vancouver · Scopus · Español · Inglés", color: "#27ae60" },
    { num: "05", title: "Secciones del documento", desc: "Elige qué secciones incluirá tu artículo. Si no seleccionas, se usan todas.", detail: "Resumen · Introducción · Metodología · Conclusiones", color: "#8e44ad" },
    { num: "06", title: "Genera y copia", desc: "Presiona Generar y obtendrás prompts listos. Expande y copia con un clic.", detail: "ChatGPT · Claude · Gemini · Copilot", color: "#2980b9" },
];

function GuideModal({ onClose }: { onClose: () => void }) {
    return (
        <div onClick={onClose} style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(4,8,20,0.82)", backdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: "16px",
        }}>
            <div onClick={e => e.stopPropagation()} style={{
                width: "100%", maxWidth: 800, maxHeight: "88vh",
                borderRadius: 20, background: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
                animation: "fadeUp 0.35s cubic-bezier(0.16,1,0.3,1)",
                overflow: "hidden", display: "flex", flexDirection: "column",
            }}>
                <div style={{
                    background: "linear-gradient(164deg, #634812, #000000 36%, #302613 120%)",
                    padding: "18px 28px 16px", borderBottom: "3px solid #C9A84C",
                    position: "relative", overflow: "hidden", flexShrink: 0,
                }}>
                    <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "2px 10px", borderRadius: 20, marginBottom: 7, background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", fontSize: 8, fontWeight: 800, letterSpacing: 2, color: "#C9A84C", textTransform: "uppercase" }}>
                                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C9A84C", display: "inline-block" }} />
                                Sistema de Bibliotecas UNMSM
                            </div>
                            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: -0.5 }}>Guía de uso</h2>
                            <p style={{ margin: "4px 0 0", fontSize: 11.5, color: "rgba(255,255,255,0.55)" }}>
                                Genera prompts académicos en <strong style={{ color: "#C9A84C" }}>6 pasos</strong> · Biblioteca Central Pedro Zulen
                            </p>
                        </div>
                        <button onClick={onClose} style={{ width: 30, height: 30, borderRadius: 7, flexShrink: 0, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,16,46,0.4)"; e.currentTarget.style.color = "#fff"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
                            ✕
                        </button>
                    </div>
                </div>
                <div style={{ overflowY: "auto", flex: 1 }}>
                    <div style={{ padding: "18px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, background: "#f8fafc" }}>
                        {GUIDE_STEPS.map((step, i) => (
                            <div key={i} style={{ borderRadius: 12, background: "#fff", border: "1px solid #e2e8f0", borderTop: `3px solid ${step.color}`, padding: "14px 16px 12px", position: "relative", overflow: "hidden", transition: "box-shadow 0.2s, transform 0.2s", cursor: "default" }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${step.color}20`; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                                <div style={{ position: "absolute", top: -6, right: 10, fontSize: 56, fontWeight: 900, color: step.color, opacity: 0.05, lineHeight: 1, fontFamily: "Georgia, serif", pointerEvents: "none", userSelect: "none" }}>{step.num}</div>
                                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                                    <div style={{ width: 28, height: 28, borderRadius: 7, flexShrink: 0, background: step.color + "12", border: `1.5px solid ${step.color}35`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 900, color: step.color, fontFamily: "Georgia, serif" }}>{step.num}</div>
                                    <div style={{ flex: 1, height: 1.5, borderRadius: 2, background: `linear-gradient(90deg, ${step.color}50, transparent)` }} />
                                </div>
                                <h3 style={{ margin: "0 0 5px", fontSize: 12.5, fontWeight: 800, color: "#1a202c", letterSpacing: -0.2 }}>{step.title}</h3>
                                <p style={{ margin: "0 0 9px", fontSize: 11, color: "#718096", lineHeight: 1.6 }}>{step.desc}</p>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                                    {step.detail.split(" · ").map(tag => (
                                        <span key={tag} style={{ padding: "2px 7px", borderRadius: 20, background: step.color + "10", border: `1px solid ${step.color}25`, fontSize: 9.5, fontWeight: 700, color: step.color, letterSpacing: 0.3 }}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ padding: "0 24px 22px" }}>
                        <button onClick={onClose} style={{ width: "100%", padding: "12px", borderRadius: 10, border: "none", background: "linear-gradient(135deg, #003087, #0055cc)", color: "#fff", fontSize: 13, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", letterSpacing: 0.3, transition: "opacity 0.2s, transform 0.2s", boxShadow: "0 4px 16px rgba(0,48,135,0.35)" }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,48,135,0.45)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,48,135,0.35)"; }}>
                            ¡Entendido, comenzar! →
                        </button>
                    </div>
                </div>
            </div>
            <style>{`@keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        </div>
    );
}

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
            // ✅ Imagen de fondo con overlay semitransparente
            position: "relative",
        }}>
            {/* Fondo con imagen y overlay */}
            <div style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                backgroundImage: "url('/bib-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }} />
            {/* Overlay blanco semitransparente para no tapar el contenido */}
            <div style={{
                position: "fixed",
                inset: 0,
                zIndex: 1,
                background: "rgba(240, 242, 247, 0.88)",
            }} />

            {/* Contenido por encima del fondo */}
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

            {showGuide && <GuideModal onClose={() => setShowGuide(false)} />}
        </div>
    );
}