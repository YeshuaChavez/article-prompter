"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShield } from "react-icons/fa6";
import { 
  BookOpen, 
  X, 
  FileText, 
  User, 
  PenTool, 
  Settings, 
  Lightbulb, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface GuiaProps {
    isOpen: boolean;
    onClose: () => void;
}

const GuiaUsoAnimada: React.FC<GuiaProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{
                        position: "fixed", inset: 0, zIndex: 200,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        padding: 16,
                        background: "rgba(4,8,20,0.85)",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.94, y: 24, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.94, y: 24, opacity: 0 }}
                        transition={{ type: "spring", damping: 22, stiffness: 280 }}
                        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                        style={{
                            width: "100%", maxWidth: 800,
                            borderRadius: 20,
                            background: "#ffffff",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
                            overflow: "hidden",
                            display: "flex", flexDirection: "column",
                            fontFamily: "'Palatino Linotype', 'Book Antiqua', Georgia, serif",
                        }}
                    >
                        {/* ── Header ── */}
                        <div style={{
                            background: "linear-gradient(164deg, #634812, #000000 36%, #302613 120%)",
                            padding: "16px 24px",
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            borderBottom: "2.5px solid #C9A84C",
                            position: "relative", overflow: "hidden",
                        }}>
                            <div style={{
                                position: "absolute", top: -40, right: -40,
                                width: 120, height: 120, borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)",
                                pointerEvents: "none",
                            }} />
                            <div>
                                <div style={{
                                    display: "inline-flex", alignItems: "center", gap: 5,
                                    padding: "2px 10px", borderRadius: 20, marginBottom: 6,
                                    background: "rgba(201,168,76,0.15)",
                                    border: "1px solid rgba(201,168,76,0.4)",
                                    fontSize: 8, fontWeight: 800, letterSpacing: 2,
                                    color: "#C9A84C", textTransform: "uppercase",
                                }}>
                                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#C9A84C", display: "inline-block" }} />
                                    Sistema de Bibliotecas UNMSM
                                </div>
                                <h2 style={{ 
                                    margin: 0, fontSize: 20, fontWeight: 900, color: "#fff", 
                                    letterSpacing: -0.3, display: "flex", alignItems: "center", gap: 8 
                                }}>
                                    <BookOpen size={22} color="#C9A84C" strokeWidth={2.5} /> 
                                    Guía de uso
                                </h2>
                                <p style={{ margin: "3px 0 0", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                                    Genera prompts académicos en <strong style={{ color: "#C9A84C" }}>6 pasos</strong> · Biblioteca Central Pedro Zulen
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                style={{
                                    width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                                    background: "rgba(255,255,255,0.1)",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    color: "rgba(255,255,255,0.7)",
                                    cursor: "pointer",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    transition: "all 0.15s",
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,16,46,0.4)"; e.currentTarget.style.color = "#fff"; }}
                                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* ── Cuerpo ── */}
                        <div style={{
                            display: "grid", gridTemplateColumns: "1fr 1fr",
                            gap: 16, padding: "20px 24px 24px",
                            background: "#f8fafc",
                            overflowY: "auto", maxHeight: "70vh",
                        }}>
                            {/* PASOS */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                {[
                                    {
                                        num: "01", title: "Tipo de artículo", icon: <FileText size={14} />,
                                        desc: "Selecciona en el panel lateral el tipo de investigación a redactar.",
                                        tags: ["Teórica", "Sistemática", "Empírica", "Caso"],
                                        color: "#003087",
                                    },
                                    {
                                        num: "02", title: "Datos del autor", icon: <User size={14} />,
                                        desc: "Ingresa tu nombre, facultad, nivel académico y nombre de tu asesor.",
                                        tags: ["Nombre", "Facultad", "Nivel", "Docente"],
                                        color: "#C8102E",
                                    },
                                    {
                                        num: "03", title: "Contenido del artículo", icon: <PenTool size={14} />,
                                        desc: "Rellena el tema, objetivo e hipótesis según el tipo de artículo elegido.",
                                        tags: ["Tema", "Objetivo", "Hipótesis"],
                                        color: "#C9A84C",
                                    },
                                    {
                                        num: "04", title: "Formato y estilo", icon: <Settings size={14} />,
                                        desc: "Configura la extensión, norma de citación, idioma y revista objetivo.",
                                        tags: ["APA", "Vancouver", "Scopus", "Idioma"],
                                        color: "#27ae60",
                                    },
                                    {
                                        num: "05", title: "¿Dudas sobre tu tema?", icon: <Lightbulb size={14} />,
                                        desc: "En Secciones del Documento selecciona solo \"Preparación\" — te ayudará a definir y validar tu tema.",
                                        tags: ["Preparación", "Reformula", "Vacíos", "Valida"],
                                        color: "#8e44ad",
                                        highlight: true,
                                    },
                                    {
                                        num: "06", title: "Genera y copia", icon: <Sparkles size={14} />,
                                        desc: "Presiona Generar y obtén prompts listos para usar en cualquier IA.",
                                        tags: ["ChatGPT", "Claude", "Gemini", "Copilot"],
                                        color: "#2980b9",
                                    },
                                ].map((step, i) => (
                                    <motion.div
                                        key={step.num}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.08 * i, duration: 0.35 }}
                                        style={{
                                            borderRadius: 12,
                                            background: (step as any).highlight ? `${step.color}08` : "#fff",
                                            border: (step as any).highlight ? `1.5px solid ${step.color}40` : "1px solid #e2e8f0",
                                            borderTop: `3px solid ${step.color}`,
                                            padding: "12px 14px",
                                            position: "relative", overflow: "hidden",
                                            cursor: "default",
                                        }}
                                        whileHover={{ y: -2, boxShadow: `0 6px 20px ${step.color}22` }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                                            <div style={{
                                                width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                                                background: step.color + "14",
                                                border: `1.5px solid ${step.color}35`,
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                color: step.color,
                                            }}>
                                                {step.icon}
                                            </div>
                                            <h3 style={{ margin: 0, fontSize: 12, fontWeight: 800, color: "#1a202c", letterSpacing: -0.2 }}>
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p style={{ margin: "0 0 8px", fontSize: 10.5, color: "#718096", lineHeight: 1.5 }}>{step.desc}</p>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                                            {step.tags.map(tag => (
                                                <span key={tag} style={{
                                                    padding: "2px 7px", borderRadius: 20,
                                                    background: step.color + "10",
                                                    border: `1px solid ${step.color}25`,
                                                    fontSize: 9, fontWeight: 700,
                                                    color: step.color, letterSpacing: 0.3,
                                                }}>{tag}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* LADO DERECHO: Mini preview animado */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                <div style={{
                                    borderRadius: 14, overflow: "hidden",
                                    border: "1px solid #e2e8f0",
                                    background: "#fff",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                                    flex: 1,
                                }}>
                                    {/* Header simulado */}
                                    <div style={{
                                        background: "linear-gradient(164deg, #634812, #000 36%, #302613 120%)",
                                        padding: "10px 14px",
                                        borderBottom: "2px solid #C9A84C",
                                        display: "flex", alignItems: "center", gap: 8,
                                    }}>
                                        <div style={{ width: 20, height: 20, borderRadius: 4, background: "rgba(201,168,76,0.3)", border: "1px solid rgba(201,168,76,0.5)", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                             <FaShield size={10} color="#C9A84C" />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <motion.div
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                                style={{ width: "60%", height: 7, background: "#C9A84C", borderRadius: 3, marginBottom: 3 }}
                                            />
                                            <div style={{ width: "40%", height: 5, background: "rgba(201,168,76,0.3)", borderRadius: 3 }} />
                                        </div>
                                    </div>

                                    {/* Cuerpo simulado */}
                                    <div style={{ display: "flex", height: 260 }}>
                                        {/* Sidebar simulado */}
                                        <div style={{
                                            width: 72, background: "#f8fafc",
                                            borderRight: "1px solid #e2e8f0",
                                            padding: "10px 8px", display: "flex",
                                            flexDirection: "column", gap: 6,
                                        }}>
                                            {[
                                                { c: "#e67e22", label: "Teórica" },
                                                { c: "#003087", label: "Sistemática" },
                                                { c: "#C8102E", label: "Empírica" },
                                                { c: "#27ae60", label: "Caso" },
                                            ].map(({ c, label }, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -8 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + idx * 0.15 }}
                                                    style={{
                                                        width: "100%", borderRadius: 7,
                                                        background: idx === 0 ? c + "18" : "#fff",
                                                        border: idx === 0 ? `2px solid ${c}` : "1px solid #e2e8f0",
                                                        padding: "5px 6px",
                                                        display: "flex", alignItems: "center", gap: 5,
                                                    }}
                                                >
                                                    <div style={{ width: 7, height: 7, borderRadius: 2, background: c, flexShrink: 0 }} />
                                                    <div style={{ fontSize: 7, color: idx === 0 ? c : "#94a3b8", fontWeight: idx === 0 ? 700 : 400, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{label}</div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Formulario simulado */}
                                        <div style={{ flex: 1, padding: "10px 10px", display: "flex", flexDirection: "column", gap: 7, overflowY: "hidden" }}>
                                            <div style={{ borderRadius: 7, border: "1px solid #e2e8f0", borderLeft: "3px solid #003087", padding: "6px 8px", background: "#fff" }}>
                                                <div style={{ fontSize: 7, fontWeight: 800, color: "#003087", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5 }}>Datos del autor</div>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                                                    <div style={{ height: 12, background: "#f1f5f9", borderRadius: 3, border: "1px solid #e2e8f0" }} />
                                                    <div style={{ height: 12, background: "#f1f5f9", borderRadius: 3, border: "1px solid #e2e8f0" }} />
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                

                                {/* Botón cerrar */}
                                <button
                                    onClick={onClose}
                                    style={{
                                        width: "100%", padding: "12px 0",
                                        borderRadius: 10, border: "none",
                                        background: "linear-gradient(135deg, #003087, #0055cc)",
                                        color: "#fff",
                                        fontSize: 13, fontWeight: 800,
                                        cursor: "pointer", fontFamily: "inher   it",
                                        letterSpacing: 0.3,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                        boxShadow: "0 4px 16px rgba(0,48,135,0.35)",
                                        transition: "all 0.2s",
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,48,135,0.45)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,48,135,0.35)"; }}
                                >
                                    ¡Entendido, comenzar! <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GuiaUsoAnimada;