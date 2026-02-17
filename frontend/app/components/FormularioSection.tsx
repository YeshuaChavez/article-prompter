"use client";

import React from "react";
import Bloque from "./Bloque";
import Campo from "./Campo";
import {
  COLORES,
  REVISIONES,
  SECCIONES_POR_TIPO,
  FACULTADES,
  CITAS,
  NIVELES,
  REVISTAS,
  ROLES,
  IDIOMAS,
  EXTENSIONES,
  FormData,
  inp,
  grid2,
} from "./constants";

interface FormularioSectionProps {
  tipoActivo: string;
  form: FormData;
  secciones: string[];
  onUpdate: (key: keyof FormData, value: string) => void;
  onToggleSeccion: (s: string) => void;
  onGenerar: () => void;
}

export default function FormularioSection({
  tipoActivo,
  form,
  secciones,
  onUpdate,
  onToggleSeccion,
  onGenerar,
}: FormularioSectionProps) {
  const revActiva = REVISIONES.find((r) => r.id === tipoActivo);

  return (
    <div style={{ padding: "28px 32px 48px" }}>

      {/* Banner tipo activo */}
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORES.azul}0d, ${revActiva?.color}15)`,
          border: `1px solid ${revActiva?.color}40`,
          borderRadius: 12,
          padding: "16px 22px",
          marginBottom: 28,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 32 }}>{revActiva?.icon}</span>
        <div>
          <div
            style={{ fontWeight: "bold", color: COLORES.azulOscuro, fontSize: 17 }}
          >
            {revActiva?.label}
          </div>
          <div style={{ fontSize: 13, color: COLORES.grisTexto, marginTop: 3 }}>
            {revActiva?.desc}
          </div>
        </div>
        <div
          style={{ marginLeft: "auto", fontSize: 12, color: "#aaa", textAlign: "right" }}
        >
          {SECCIONES_POR_TIPO[tipoActivo]?.length} secciones
          <br />
          predeterminadas
        </div>
      </div>

      {/* ── BLOQUE 1: Datos del Autor ── */}
      <Bloque titulo="1. Datos del Autor" color={COLORES.azul}>
        <div style={grid2}>
          <Campo label="Nombre completo">
            <input
              value={form.nombre}
              onChange={(e) => onUpdate("nombre", e.target.value)}
              placeholder="Ej: María García López"
              style={inp}
            />
          </Campo>
          <Campo label="Rol en el artículo">
            <select
              value={form.rol}
              onChange={(e) => onUpdate("rol", e.target.value)}
              style={inp}
            >
              <option value="">Seleccionar...</option>
              {ROLES.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Campo>
          <Campo label="Facultad UNMSM">
            <select
              value={form.facultad}
              onChange={(e) => onUpdate("facultad", e.target.value)}
              style={inp}
            >
              <option value="">Seleccionar facultad...</option>
              {FACULTADES.map((f) => <option key={f}>{f}</option>)}
            </select>
          </Campo>
          <Campo label="Nivel académico">
            <select
              value={form.nivel}
              onChange={(e) => onUpdate("nivel", e.target.value)}
              style={inp}
            >
              <option value="">Seleccionar...</option>
              {NIVELES.map((n) => <option key={n}>{n}</option>)}
            </select>
          </Campo>
          <Campo label="Docente / Cátedra evaluadora">
            <input
              value={form.docente}
              onChange={(e) => onUpdate("docente", e.target.value)}
              placeholder="Nombre del docente o curso"
              style={inp}
            />
          </Campo>
          <Campo label="Tipo de revista objetivo">
            <select
              value={form.revista}
              onChange={(e) => onUpdate("revista", e.target.value)}
              style={inp}
            >
              <option value="">Seleccionar...</option>
              {REVISTAS.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Campo>
        </div>
      </Bloque>

      {/* ── BLOQUE 2: Contenido ── */}
      <Bloque titulo="2. Contenido del Artículo" color={COLORES.rojo}>
        <Campo label="Tema principal *">
          <textarea
            value={form.tema}
            onChange={(e) => onUpdate("tema", e.target.value)}
            placeholder="Describe el tema central de tu trabajo académico..."
            rows={3}
            style={{ ...inp, resize: "vertical", lineHeight: 1.7 }}
          />
        </Campo>
        <div style={{ ...grid2, marginTop: 16 }}>
          <Campo label="Objetivo principal">
            <textarea
              value={form.objetivo}
              onChange={(e) => onUpdate("objetivo", e.target.value)}
              placeholder="¿Qué busca demostrar o analizar?"
              rows={2}
              style={{ ...inp, resize: "vertical" }}
            />
          </Campo>
          <Campo label="Hipótesis / Argumento central">
            <textarea
              value={form.hipotesis}
              onChange={(e) => onUpdate("hipotesis", e.target.value)}
              placeholder="Hipótesis o postura argumentativa..."
              rows={2}
              style={{ ...inp, resize: "vertical" }}
            />
          </Campo>
          <Campo label="Palabras clave (separadas por coma)">
            <input
              value={form.keywords}
              onChange={(e) => onUpdate("keywords", e.target.value)}
              placeholder="Ej: biodiversidad, Amazonía, política ambiental"
              style={inp}
            />
          </Campo>
          <Campo label="Restricciones del docente">
            <input
              value={form.restricciones}
              onChange={(e) => onUpdate("restricciones", e.target.value)}
              placeholder="Ej: fuentes desde 2015, mínimo 15 refs..."
              style={inp}
            />
          </Campo>
        </div>
      </Bloque>

      {/* ── BLOQUE 3: Formato ── */}
      <Bloque titulo="3. Formato y Estilo" color={COLORES.dorado}>
        <div style={grid2}>
          <Campo label="Extensión aproximada">
            <select
              value={form.extension}
              onChange={(e) => onUpdate("extension", e.target.value)}
              style={inp}
            >
              <option value="">Seleccionar...</option>
              {EXTENSIONES.map((e) => <option key={e}>{e}</option>)}
            </select>
          </Campo>
          <Campo label="Norma de citación">
            <select
              value={form.citacion}
              onChange={(e) => onUpdate("citacion", e.target.value)}
              style={inp}
            >
              <option value="">Seleccionar...</option>
              {CITAS.map((c) => <option key={c}>{c}</option>)}
            </select>
          </Campo>
          <Campo label="Idioma de redacción">
            <select
              value={form.idioma}
              onChange={(e) => onUpdate("idioma", e.target.value)}
              style={inp}
            >
              <option value="">Seleccionar...</option>
              {IDIOMAS.map((i) => <option key={i}>{i}</option>)}
            </select>
          </Campo>
        </div>
      </Bloque>

      {/* ── BLOQUE 4: Secciones ── */}
      <Bloque titulo="4. Secciones del Documento" color="#8e44ad">
        <div style={{ fontSize: 13, color: "#666", marginBottom: 14 }}>
          Selecciona secciones específicas o deja todas deseleccionadas para
          usar las {SECCIONES_POR_TIPO[tipoActivo]?.length} predeterminadas de{" "}
          <strong>{revActiva?.label}</strong>.
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {(SECCIONES_POR_TIPO[tipoActivo] || []).map((s) => (
            <button
              key={s}
              onClick={() => onToggleSeccion(s)}
              style={{
                padding: "7px 16px",
                borderRadius: 20,
                fontSize: 13,
                cursor: "pointer",
                border: secciones.includes(s)
                  ? `2px solid ${COLORES.azul}`
                  : `1px solid ${COLORES.grisMedio}`,
                background: secciones.includes(s) ? COLORES.azul : COLORES.blanco,
                color: secciones.includes(s) ? COLORES.blanco : COLORES.grisTexto,
                fontFamily: "inherit",
                transition: "all 0.2s",
                fontWeight: secciones.includes(s) ? "bold" : "normal",
              }}
            >
              {s}
            </button>
          ))}
        </div>
        {secciones.length === 0 && (
          <div style={{ marginTop: 12, fontSize: 12, color: "#999", fontStyle: "italic" }}>
            ✓ Se usarán las {SECCIONES_POR_TIPO[tipoActivo]?.length} secciones
            predeterminadas para {revActiva?.label}
          </div>
        )}
      </Bloque>

      {/* ── BOTÓN GENERAR ── */}
      <div style={{ textAlign: "center", paddingTop: 8 }}>
        <button
          onClick={onGenerar}
          style={{
            padding: "16px 60px",
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            background: `linear-gradient(135deg, ${COLORES.rojo}, ${COLORES.rojoOscuro})`,
            color: COLORES.blanco,
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "inherit",
            boxShadow: `0 6px 28px ${COLORES.rojo}55`,
            letterSpacing: "0.06em",
          }}
        >
          ⚡ Generar Prompts Académicos
        </button>
      </div>
    </div>
  );
}