"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import Campo from "../../ui/Campo";
import { COLORES, FACULTADES, NIVELES, inp, grid2 } from "../../shared/constants";
import type { FormData } from "../../shared/types";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
    form: FormData;
    onUpdate: (key: keyof FormData, value: string) => void;
}

const sel: React.CSSProperties = { ...inp, cursor: "pointer" };

const CAMPOS_AUTOR: (keyof FormData)[] = ["nombre", "facultad", "nivel", "docente"];

export default function BloqueAutor({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS_AUTOR.some(k => form[k] !== "");

    const limpiarBloque = () => {
        CAMPOS_AUTOR.forEach(k => onUpdate(k, ""));
    };

    return (
        <Bloque titulo="1. Datos del Autor" color={COLORES.azul}>
            <div style={{ ...grid2 }}>
                <Campo label="Nombre completo">
                    <input
                        value={form.nombre}
                        onChange={e => onUpdate("nombre", e.target.value)}
                        placeholder="Ej: María García López"
                        style={inp}
                    />
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
                    <input
                        value={form.docente}
                        onChange={e => onUpdate("docente", e.target.value)}
                        placeholder="Nombre del docente (opcional)"
                        style={inp}
                    />
                </Campo>
            </div>

            <div className={`expandable-container ${tieneDatos ? 'is-expanded' : ''}`}>
                <div className="expandable-content">
                    <button type="button" onClick={limpiarBloque} className="btn-limpiar">
                        <MdDeleteOutline size={18} />
                        Limpiar sección
                    </button>
                </div>
            </div>
        </Bloque>
    );
}