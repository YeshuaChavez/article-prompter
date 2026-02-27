"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// ── Colores institucionales ───────────────────────────────────────────────────
const PRIMARY_GOLD = "#C9A84C";

interface HeaderProps {
    onGuide?: () => void;
}

export function TopHeader({ onGuide }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const btnStyle: React.CSSProperties = {
        width: 36, height: 36, borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.2)",
        background: "rgba(255,255,255,0.08)", color: "#fff",
        cursor: "pointer", display: "flex", alignItems: "center",
        justifyContent: "center", transition: "all 0.15s", flexShrink: 0,
        fontSize: 14,
    };

    return (
        <header style={{
            width: "100%", position: "sticky", top: 0, zIndex: 50, flexShrink: 0,
            background: "linear-gradient(164deg, #634812ee, #000000ee 36%, #302613ee 120%)",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            boxShadow: scrolled ? "0 4px 28px rgba(0,0,0,0.5)" : "0 2px 16px rgba(0,0,0,0.3)",
            transition: "all 0.3s",
        }}>
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "0 24px", height: 64,
            }}>

                {/* LEFT — Logo + nombre sistema */}
                <Link href="/" title="Volver al inicio"
                    style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>

                    {/* Si tienes /public/bibcentral_blanco-min2.png, reemplaza este div por <Image src="..." /> */}
                    <div style={{
                        height: 40, display: "flex", alignItems: "center", gap: 10,
                    }}>
                        {/* Escudo institucional SVG placeholder */}
                        <svg width="36" height="40" viewBox="0 0 36 40" fill="none">
                            <path d="M18 2L2 8v12c0 10 8 16 16 18 8-2 16-8 16-18V8L18 2z"
                                fill={PRIMARY_GOLD} opacity="0.9" />
                            <path d="M18 8L8 12v8c0 6 4.5 10 10 12 5.5-2 10-6 10-12v-8L18 8z"
                                fill="#07050e" opacity="0.5" />
                            <text x="18" y="26" textAnchor="middle" fill="#fff"
                                fontSize="11" fontWeight="bold" fontFamily="serif">BC</text>
                        </svg>

                        <div style={{ lineHeight: 1.2 }}>
                            <div style={{
                                color: "#fff", fontSize: 11, fontWeight: 800,
                                letterSpacing: 1.5, textTransform: "uppercase",
                            }}>
                                Sistema de Bibliotecas
                            </div>
                            <div style={{
                                color: "rgba(255,255,255,0.55)", fontSize: 9,
                                letterSpacing: 1.2, textTransform: "uppercase",
                            }}>
                                Y Biblioteca Central
                            </div>
                        </div>
                    </div>
                </Link>

                {/* CENTER — Nombre de la herramienta */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    <span style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: 24, fontWeight: 800,
                        color: PRIMARY_GOLD, letterSpacing: 0.5, lineHeight: 1,
                    }}>
                        Generador de Prompts
                    </span>
                    <span style={{
                        fontSize: 7.5, color: "rgba(255,255,255,0.4)",
                        letterSpacing: 3.5, textTransform: "uppercase",
                    }}>
                        Herramienta de apoyo a la investigación
                    </span>
                </div>

                {/* RIGHT — Guía + Logo UNMSM */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>

                    {/* Botón Guía */}
                    {onGuide && (
                        <button onClick={onGuide} style={{
                            padding: "7px 14px", borderRadius: 8,
                            border: "1px solid rgba(255,255,255,0.2)",
                            background: "rgba(255,255,255,0.08)", color: "#fff",
                            fontSize: 12, fontWeight: 600, cursor: "pointer",
                            fontFamily: "inherit", transition: "all 0.15s",
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "rgba(201,168,76,0.22)";
                                e.currentTarget.style.borderColor = PRIMARY_GOLD;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                            }}>
                            📚 Guía de uso
                        </button>
                    )}

                    {/* Logo UNMSM — SVG placeholder hasta que añadas /public/logo-unmsm.svg */}
                    <a href="https://www.unmsm.edu.pe/" target="_blank" rel="noopener noreferrer"
                        title="Ir a la página de la UNMSM"
                        style={{ flexShrink: 0, textDecoration: "none" }}>
                        <div style={{ ...btnStyle, width: 40, height: 40 }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "rgba(201,168,76,0.22)";
                                e.currentTarget.style.borderColor = PRIMARY_GOLD;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                            }}>
                            {/* SVG escudo UNMSM simplificado */}
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7L12 2z"
                                    fill={PRIMARY_GOLD} opacity="0.85" />
                                <path d="M12 6L6 9v4c0 3.5 2.5 6.8 6 7.8 3.5-1 6-4.3 6-7.8V9L12 6z"
                                    fill="#07050e" opacity="0.4" />
                                <text x="12" y="17" textAnchor="middle" fill="#fff"
                                    fontSize="6" fontWeight="bold" fontFamily="serif">UNMSM</text>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default TopHeader;