import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generador de Prompts Académicos | UNMSM",
  description:
    "Sistema de apoyo a la producción científica de la Universidad Nacional Mayor de San Marcos. Genera prompts para artículos de investigación, ensayos, monografías e informes técnicos.",
  keywords: [
    "UNMSM", "San Marcos", "prompts académicos", "investigación",
    "artículos científicos", "revisión sistemática", "tesis", "Perú",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}