"use client";

import Link from "next/link";

// ── Sin lucide-react — usamos SVG inline ─────────────────────────────────────
const PRIMARY_HEX = "#C9A84C";

type FooterLink = { label: string; href: string; target?: "_blank" };
type SocialItem = { svg: React.ReactNode; label: string; href: string };

const quickLinks: FooterLink[] = [
    { label: "Servicios", href: "/servicios" },
    { label: "Recursos electrónicos", href: "/recursos_electronicos" },
    { label: "Apoyo a la investigación", href: "/apoyo_investigacion" },
    { label: "Centro de documentación", href: "https://cedoc.sisbib.unmsm.edu.pe/", target: "_blank" },
    { label: "Guías temáticas", href: "/guias-tematicas" },
];

const institutionalLinks: FooterLink[] = [
    { label: "Directorio", href: "/directorio" },
    { label: "Nosotros", href: "https://sisbib.unmsm.edu.pe/#nosotros" },
    { label: "Catálogo", href: "https://unmsm.ent.sirsi.net/client/es_ES/all_libs/?dt=list", target: "_blank" },
    { label: "Contacto", href: "https://sisbib.unmsm.edu.pe/#contacto" },
];

// SVGs inline — sin dependencias externas
const socialLinks: SocialItem[] = [
    {
        label: "Facebook", href: "https://www.facebook.com/biblioteca.unmsm/?locale=es_LA",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
    },
    {
        label: "Instagram", href: "https://instagram.com/BibliotecaUNMSM",
        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>,
    },
    {
        label: "X / Twitter", href: "https://twitter.com/BibliotecaUNMSM",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
    },
    {
        label: "YouTube", href: "https://www.youtube.com/@bibliotecacentralunmsmpedr1292",
        svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="#07050e" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>,
    },
    {
        label: "Teléfono", href: "/directorio",
        svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.63 13 19.79 19.79 0 0 1 1.56 4.4 2 2 0 0 1 3.53 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
    },
];

export function FooterGenerador() {
    const year = new Date().getFullYear();

    const linkStyle: React.CSSProperties = {
        color: "rgba(255,255,255,0.65)", textDecoration: "none",
        fontSize: 13, transition: "color 0.15s",
        display: "block", padding: "3px 0",
    };

    const onHoverLink = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
        (e.currentTarget as HTMLElement).style.color = enter ? PRIMARY_HEX : "rgba(255,255,255,0.65)";
    };

    return (
        <footer style={{
            position: "relative", zIndex: 10,
            background: "#07050e", color: "#fff",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            flexShrink: 0,
        }}>
            {/* Overlay decorativo */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: `linear-gradient(to bottom right, ${PRIMARY_HEX}22, transparent, ${PRIMARY_HEX}11)`,
            }} />

            {/* Contenido */}
            <div style={{
                position: "relative", maxWidth: 1100, margin: "0 auto",
                padding: "52px 32px 36px",
                display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: 40,
            }}>

                {/* Col 1 — Marca + Redes */}
                <div>
                    <h3 style={{ margin: "0 0 2px", fontSize: 22, fontWeight: 800, color: PRIMARY_HEX }}>
                        Biblioteca Central
                    </h3>
                    <h3 style={{ margin: "0 0 14px", fontSize: 22, fontWeight: 800, color: "#fff" }}>
                        "Pedro Zulen" UNMSM
                    </h3>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 22px" }}>
                        Comprometidos con brindar servicios bibliográficos de excelencia y acompañar
                        la investigación de la comunidad sanmarquina.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {socialLinks.map(({ svg, label, href }) => (
                            <a key={label} href={href} aria-label={label}
                                target="_blank" rel="noopener noreferrer" title={label}
                                style={{
                                    width: 38, height: 38, borderRadius: "50%",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    background: "rgba(255,255,255,0.05)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "rgba(255,255,255,0.7)", textDecoration: "none",
                                    transition: "all 0.15s",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = PRIMARY_HEX;
                                    e.currentTarget.style.color = PRIMARY_HEX;
                                    e.currentTarget.style.background = "rgba(201,168,76,0.15)";
                                    e.currentTarget.style.transform = "scale(1.12)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            >
                                {svg}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Col 2 — Links */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                    <div>
                        <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#fff" }}>Explora</h4>
                        {quickLinks.map(({ label, href, target }) => (
                            <Link key={label} href={href} target={target} style={linkStyle}
                                onMouseEnter={e => onHoverLink(e, true)}
                                onMouseLeave={e => onHoverLink(e, false)}>
                                {label}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <h4 style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 700, color: "#fff" }}>Institucional</h4>
                        {institutionalLinks.map(({ label, href, target }) => (
                            <Link key={label} href={href} target={target} style={linkStyle}
                                onMouseEnter={e => onHoverLink(e, true)}
                                onMouseLeave={e => onHoverLink(e, false)}>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Col 3 — Contacto */}
                <div>
                    <h4 style={{ margin: "0 0 16px", fontSize: 14, fontWeight: 700, color: "#fff" }}>Contáctanos</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                        {/* Dirección */}
                        <p style={{ margin: 0, display: "flex", gap: 10, alignItems: "flex-start", lineHeight: 1.6 }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke={PRIMARY_HEX} strokeWidth="2" width="16" height="16" style={{ flexShrink: 0, marginTop: 2 }}>
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                            Av. Germán Amézaga Nº 375. Biblioteca Central Pedro Zulen, Ciudad Universitaria.
                        </p>
                        {/* Teléfono */}
                        <p style={{ margin: 0, display: "flex", gap: 10, alignItems: "center" }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke={PRIMARY_HEX} strokeWidth="2" width="16" height="16" style={{ flexShrink: 0 }}>
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.63 13 19.79 19.79 0 0 1 1.56 4.4 2 2 0 0 1 3.53 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            619-7000, anexo 7701
                        </p>
                        {/* Email */}
                        <p style={{ margin: 0, display: "flex", gap: 10, alignItems: "center" }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke={PRIMARY_HEX} strokeWidth="2" width="16" height="16" style={{ flexShrink: 0 }}>
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                            </svg>
                            <a href="mailto:bibcent@unmsm.edu.pe" style={linkStyle}
                                onMouseEnter={e => onHoverLink(e, true)}
                                onMouseLeave={e => onHoverLink(e, false)}>
                                bibcent@unmsm.edu.pe
                            </a>
                        </p>
                        {/* Horario */}
                        <div style={{
                            borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)",
                            background: "rgba(255,255,255,0.04)", padding: "12px 14px", fontSize: 12,
                        }}>
                            <p style={{ margin: "0 0 4px", color: "rgba(255,255,255,0.6)" }}>Horario de atención al público</p>
                            <p style={{ margin: 0, fontWeight: 700, color: "#fff" }}>Lunes a sábado · 8:00 a.m. - 8:00 p.m.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div style={{
                position: "relative", borderTop: "1px solid rgba(255,255,255,0.08)",
                padding: "14px 32px", display: "flex", flexWrap: "wrap", gap: 8,
                alignItems: "center", justifyContent: "space-between",
                maxWidth: 1100, margin: "0 auto",
                fontSize: 11, color: "rgba(255,255,255,0.45)",
            }}>
                <span>© {year} Sistema de Bibliotecas UNMSM. Todos los derechos reservados.</span>
                <span>Desarrollado para la comunidad sanmarquina.</span>
            </div>
        </footer>
    );
}

export default FooterGenerador;