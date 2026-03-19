"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdMenuBook } from "react-icons/md";

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

    return (
        <header style={{
            width: "100%", position: "sticky", top: 0, zIndex: 50, flexShrink: 0,
            background: "linear-gradient(135deg, #1a0e02 0%, #0d0601 35%, #000000 60%, #0d0601 100%)",
            backdropFilter: scrolled ? "blur(14px)" : "blur(4px)",
            boxShadow: scrolled ? `0 6px 32px rgba(0,0,0,0.9)` : `0 4px 20px rgba(0,0,0,0.6)`,
            transition: "all 0.3s",
        }}>
            <div style={{
                display: "flex", alignItems: "center",
                padding: "0 32px", height: 86, gap: 0,
            }}>

                {/* LEFT — Logo biblioteca */}
                <Link href="https://sisbib.unmsm.edu.pe/" title="Volver al inicio"
                    style={{
                        display: "flex", alignItems: "center",
                        textDecoration: "none", flexShrink: 0,
                        width: "30%",
                    }}>
                    <Image
                        src="/bib-h-logo.png"
                        alt="Biblioteca Central Pedro Zulen UNMSM"
                        height={62}
                        width={280}
                        style={{ objectFit: "contain", objectPosition: "left" }}
                        priority
                    />
                </Link>

                {/* CENTER */}
                <div style={{
                    flex: 1,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 4,
                    height: "100%", padding: "0 24px",
                }}>
                    {/* Pill */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        padding: "3px 14px", borderRadius: 20,
                        background: `${PRIMARY_GOLD}15`,
                        border: `1px solid ${PRIMARY_GOLD}35`,
                        fontSize: 8, fontWeight: 800, letterSpacing: 2.5,
                        color: PRIMARY_GOLD, textTransform: "uppercase",
                    }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: PRIMARY_GOLD, display: "inline-block" }} />
                        Apoyo a la Investigación
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: PRIMARY_GOLD, display: "inline-block" }} />
                    </div>

                    {/* Título dorado */}
                    <span style={{
                        fontFamily: "Times New Roman, serif",
                        fontSize: 30, fontWeight: 900,
                        color: PRIMARY_GOLD, letterSpacing: 1, lineHeight: 1,
                        textShadow: `0 2px 16px ${PRIMARY_GOLD}55`,
                    }}>
                        Generador de Prompts
                    </span>

                    {/* Subtítulo en blanco */}
                    <span style={{
                        fontSize: 8.5, color: "rgb(255, 255, 255)",
                        letterSpacing: 3.5, textTransform: "uppercase",
                        fontWeight: 500,
                    }}>
                        Herramienta de apoyo a la investigación
                    </span>
                </div>

                {/* RIGHT */}
                <div style={{
                    width: "30%",
                    display: "flex", alignItems: "center",
                    justifyContent: "flex-end", gap: 16, flexShrink: 0,
                }}>
                    {/* Botón Guía */}
                    {onGuide && (
                        <button onClick={onGuide} style={{
                            display: "flex", alignItems: "center", gap: 8,
                            padding: "10px 20px", borderRadius: 9,
                            border: `1.5px solid rgba(255,255,255,0.2)`,
                            background: "rgba(255,255,255,0.07)", color: "#fff",
                            fontSize: 13, fontWeight: 600, cursor: "pointer",
                            fontFamily: "inherit", transition: "all 0.2s",
                            lineHeight: 1, letterSpacing: 0.3, whiteSpace: "nowrap",
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = `${PRIMARY_GOLD}22`;
                                e.currentTarget.style.borderColor = PRIMARY_GOLD;
                                e.currentTarget.style.color = PRIMARY_GOLD;
                                e.currentTarget.style.boxShadow = `0 4px 14px ${PRIMARY_GOLD}33`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.boxShadow = "none";
                            }}>
                            <MdMenuBook size={16} style={{ display: "block" }} />
                            Guía de uso
                        </button>
                    )}

                    {/* Logo UNMSM sin cuadro */}
                    <a href="https://www.unmsm.edu.pe/" target="_blank" rel="noopener noreferrer"
                        title="Universidad Nacional Mayor de San Marcos"
                        style={{
                            display: "flex", alignItems: "center", gap: 10,
                            textDecoration: "none", flexShrink: 0,
                            transition: "opacity 0.2s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = "0.75"; }}
                        onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}>
                        <Image
                            src="/unmsm-logo-alone.png"
                            alt="UNMSM"
                            width={52}
                            height={52}
                            style={{ objectFit: "contain" }}
                            priority
                        />
                        <span style={{
                            color: "#fff", fontSize: 20, fontWeight: 900,
                            letterSpacing: 1, fontFamily: "inherit",
                        }}>
                            UNMSM
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default TopHeader;