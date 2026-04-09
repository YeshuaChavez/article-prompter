"use client";
import React, { useState } from "react";
import { FaMicroscope } from "react-icons/fa";
import { RiClaudeFill } from "react-icons/ri";
import { VscCopilot } from "react-icons/vsc";
import { TbBrandOpenai } from "react-icons/tb";
import { MdAutoAwesome, MdContentCopy, MdCheckCircle } from "react-icons/md";
import { BsPerplexity } from "react-icons/bs";
import { REVISIONES, COLORES } from "../shared/constants";
import type { PromptCard } from "../shared/types";

interface PromptOutputProps {
    prompts: PromptCard[];
    tipoActivo: string;
    facultad: string;
    onEditarFormulario: () => void;
    onNuevoPrompt: () => void;
}

const AI_LINKS = [
    { name: "scite.ai", url: "https://scite.ai", color: "#003087", bg: "#003087", icon: <FaMicroscope size={14} style={{ display: "block" }} />, featured: true },
    { name: "ChatGPT", url: "https://chat.openai.com", color: "#10a37f", bg: "#10a37f", icon: <TbBrandOpenai size={14} style={{ display: "block" }} />, featured: false },
    { name: "Claude", url: "https://claude.ai", color: "#C9A84C", bg: "#C9A84C", icon: <RiClaudeFill size={14} style={{ display: "block" }} />, featured: false },
    { name: "Gemini", url: "https://gemini.google.com", color: "#4285F4", bg: "#4285F4", icon: <MdAutoAwesome size={14} style={{ display: "block" }} />, featured: false },
    { name: "Perplexity", url: "https://www.perplexity.ai", color: "#20b2aa", bg: "#20b2aa", icon: <BsPerplexity size={14} style={{ display: "block" }} />, featured: false },
    { name: "Copilot", url: "https://copilot.microsoft.com", color: "#0078d4", bg: "#0078d4", icon: <VscCopilot size={14} style={{ display: "block" }} />, featured: false },
];

function AILinksBar({ promptColor }: { promptColor: string }) {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div style={{ marginTop: 16, borderTop: "1px solid #e2e8f0", paddingTop: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1.2, color: "#a0aec0", textTransform: "uppercase", marginBottom: 10 }}>
                Usa este prompt en →
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                {/* scite.ai — destacado */}
                <a href={AI_LINKS[0].url} target="_blank" rel="noopener noreferrer"
                    onMouseEnter={() => setHovered("scite.ai")}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: 7,
                        padding: "8px 14px", borderRadius: 9,
                        background: hovered === "scite.ai" ? "#002070" : "linear-gradient(135deg, #003087, #004ab5)",
                        border: "1.5px solid #C9A84C", color: "#fff",
                        fontSize: 12, fontWeight: 800, textDecoration: "none",
                        transition: "all 0.18s", lineHeight: 1,
                        boxShadow: hovered === "scite.ai" ? "0 6px 20px rgba(0,48,135,0.45)" : "0 3px 10px rgba(0,48,135,0.3)",
                        transform: hovered === "scite.ai" ? "translateY(-2px)" : "translateY(0)",
                    }}>
                    {AI_LINKS[0].icon}
                    <span>scite.ai</span>
                    <span style={{ padding: "1px 7px", borderRadius: 20, background: "#C9A84C", color: "#000", fontSize: 8, fontWeight: 900, letterSpacing: 0.5, textTransform: "uppercase", marginLeft: 2 }}>
                        ★ Recomendado
                    </span>
                </a>

                <div style={{ width: 1, height: 26, background: "#e2e8f0", margin: "0 2px" }} />

                {AI_LINKS.slice(1).map((ai) => (
                    <a key={ai.name} href={ai.url} target="_blank" rel="noopener noreferrer"
                        onMouseEnter={() => setHovered(ai.name)}
                        onMouseLeave={() => setHovered(null)}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: 5,
                            padding: "7px 12px", borderRadius: 8,
                            background: hovered === ai.name ? ai.bg + "18" : "#f8fafc",
                            border: `1.5px solid ${hovered === ai.name ? ai.color + "60" : "#e2e8f0"}`,
                            color: hovered === ai.name ? ai.color : "#4a5568",
                            fontSize: 11.5, fontWeight: 700, textDecoration: "none",
                            transition: "all 0.18s", lineHeight: 1,
                            transform: hovered === ai.name ? "translateY(-1px)" : "translateY(0)",
                        }}>
                        {ai.icon}
                        {ai.name}
                    </a>
                ))}
            </div>

            <div style={{ marginTop: 10, padding: "8px 12px", borderRadius: 8, background: "linear-gradient(135deg, rgba(0,48,135,0.04), rgba(201,168,76,0.06))", border: "1px solid rgba(0,48,135,0.1)", fontSize: 10.5, color: "#4a5568", lineHeight: 1.6 }}>
                <strong style={{ color: "#003087" }}>¿Por qué scite.ai?</strong>{" "}
                A diferencia de otras IAs, scite muestra citas reales de artículos académicos verificados —
                ideal para investigación rigurosa en la Biblioteca Central Pedro Zulen.
            </div>
        </div>
    );
}

export default function PromptOutput({ prompts, tipoActivo, facultad, onEditarFormulario, onNuevoPrompt }: PromptOutputProps) {
    const [copiados, setCopiados] = useState<Record<string, boolean>>({});
    const [expandido, setExpandido] = useState<string | null>(prompts[0]?.id ?? null);
    const rev = REVISIONES.find((r) => r.id === tipoActivo);

    const handleCopiar = async (id: string, texto: string) => {
        try {
            await navigator.clipboard.writeText(texto);
        } catch {
            // Fallback para contextos sin clipboard API (HTTP, SSR)
            const el = document.createElement("textarea");
            el.value = texto;
            el.style.position = "fixed";
            el.style.opacity = "0";
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
        }
        setCopiados((prev) => ({ ...prev, [id]: true }));
        setTimeout(() => setCopiados((prev) => ({ ...prev, [id]: false })), 2200);
    };

    if (!prompts || prompts.length === 0) {
        return <div style={{ padding: 48, textAlign: "center", color: "#a0aec0" }}>No hay prompts generados.</div>;
    }

    return (
        <div style={{ padding: "28px 32px 48px", maxWidth: 860, margin: "0 auto" }}>

            {/* Barra de acciones */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
                <div>
                    <h2 style={{ margin: 0, fontSize: 18, color: COLORES.grisOscuro, display: "flex", alignItems: "center", gap: 8 }}>
                        {rev?.icon && (() => { const Icon = rev.icon; return <Icon size={20} color={rev.color} />; })()}
                        Prompts generados — {rev?.label}
                    </h2>
                    {facultad && (
                        <p style={{ margin: "4px 0 0", fontSize: 12, color: "#718096" }}>
                            Facultad de {facultad} · {prompts.length} prompts listos
                        </p>
                    )}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={onEditarFormulario} style={{ padding: "9px 18px", borderRadius: 8, border: `1.5px solid ${COLORES.azul}`, background: "#fff", color: COLORES.azul, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                        ← Editar formulario
                    </button>
                    <button onClick={onNuevoPrompt} style={{ padding: "9px 18px", borderRadius: 8, border: "none", background: COLORES.rojo, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                        + Nuevo prompt
                    </button>
                </div>
            </div>

            {/* Tarjetas */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {prompts.map((p) => {
                    const abierto = expandido === p.id;
                    return (
                        <div key={p.id} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", borderLeft: `4px solid ${p.color}`, overflow: "hidden", boxShadow: abierto ? "0 4px 16px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s" }}>
                            <button onClick={() => setExpandido(abierto ? null : p.id)}
                                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit", textAlign: "left", gap: 12 }}>
                                <div>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: p.color }}>{p.titulo}</div>
                                    {p.descripcion && <div style={{ fontSize: 12, color: "#718096", marginTop: 2 }}>{p.descripcion}</div>}
                                </div>
                                <span style={{ fontSize: 18, color: "#a0aec0", flexShrink: 0 }}>{abierto ? "▲" : "▼"}</span>
                            </button>

                            {abierto && (
                                <div style={{ padding: "0 20px 20px" }}>
                                    <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "16px", fontSize: 13, lineHeight: 1.7, color: "#2d3748", margin: "0 0 14px", fontFamily: "'Georgia', serif", maxHeight: 320, overflowY: "auto" }}>
                                        {p.texto}
                                    </pre>

                                    {/* Botón copiar con iconos */}
                                    <button onClick={() => handleCopiar(p.id, p.texto)}
                                        style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 20px", borderRadius: 8, border: "none", background: copiados[p.id] ? "#38a169" : p.color, color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s", lineHeight: 1 }}>
                                        {copiados[p.id]
                                            ? <><MdCheckCircle size={16} style={{ display: "block" }} /> Copiado al portapapeles</>
                                            : <><MdContentCopy size={16} style={{ display: "block" }} /> Copiar prompt</>
                                        }
                                    </button>

                                    <AILinksBar promptColor={p.color} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}