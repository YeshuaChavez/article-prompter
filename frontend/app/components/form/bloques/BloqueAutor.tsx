"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import Campo from "../../ui/Campo";
import { COLORES, FACULTADES, NIVELES, ROLES, inp, grid2 } from "../../shared/constants";
import type { FormData } from "../../shared/types";

interface Props {
    form: FormData;
    onUpdate: (key: keyof FormData, value: string) => void;
}

const sel: React.CSSProperties = { ...inp, cursor: "pointer" };

export default function BloqueAutor({ form, onUpdate }: Props) {
    return (
        <Bloque titulo="1. Datos del Autor" color={COLORES.azul}>
            <div style={grid2}>
                <Campo label="Nombre completo">
                    <input value={form.nombre} onChange={e => onUpdate("nombre", e.target.value)}
                        placeholder="Ej: María García López" style={inp} />
                </Campo>
                <Campo label="Rol">
                    <select value={form.rol} onChange={e => onUpdate("rol", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {ROLES.map(r => <option key={r}>{r}</option>)}
                    </select>
                </Campo>
                <Campo label="Facultad">
                    <select value={form.facultad} onChange={e => onUpdate("facultad", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {FACULTADES.map(f => <option key={f}>{f}</option>)}
                    </select>
                </Campo>
                <Campo label="Nivel académico">
                    <select value={form.nivel} onChange={e => onUpdate("nivel", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {NIVELES.map(n => <option key={n}>{n}</option>)}
                    </select>
                </Campo>
                <Campo label="Docente / Asesor">
                    <input value={form.docente} onChange={e => onUpdate("docente", e.target.value)}
                        placeholder="Nombre del docente (opcional)" style={inp} />
                </Campo>
            </div>
        </Bloque>
    );
}