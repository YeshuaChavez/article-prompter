"use client";
import React from "react";
import Bloque from "../../ui/Bloque";
import Campo from "../../ui/Campo";
import { COLORES, CITAS, REVISTAS, IDIOMAS, EXTENSIONES, inp, grid2 } from "../../shared/constants";
import type { FormData } from "../../shared/types";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
    form: FormData;
    onUpdate: (key: keyof FormData, value: string) => void;
}

const sel: React.CSSProperties = { ...inp, cursor: "pointer" };
const ta: React.CSSProperties = { ...inp, resize: "vertical", minHeight: 80 };

const CAMPOS_FORMATO: (keyof FormData)[] = ["extension", "citacion", "idioma", "revista", "restricciones"];

export default function BloqueFormato({ form, onUpdate }: Props) {
    const tieneDatos = CAMPOS_FORMATO.some(k => form[k] !== "");

    const limpiarBloque = () => {
        CAMPOS_FORMATO.forEach(k => onUpdate(k, ""));
    };

    return (
        <Bloque titulo="3. Formato y Estilo" color={COLORES.dorado}>
            <div style={grid2}>
                <Campo label="Extensión del artículo">
                    <select value={form.extension} onChange={e => onUpdate("extension", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {EXTENSIONES.map(e => <option key={e}>{e}</option>)}
                    </select>
                </Campo>
                <Campo label="Norma de citación">
                    <select value={form.citacion} onChange={e => onUpdate("citacion", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {CITAS.map(c => <option key={c}>{c}</option>)}
                    </select>
                </Campo>
                <Campo label="Idioma">
                    <select value={form.idioma} onChange={e => onUpdate("idioma", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {IDIOMAS.map(i => <option key={i}>{i}</option>)}
                    </select>
                </Campo>
                <Campo label="Revista objetivo">
                    <select value={form.revista} onChange={e => onUpdate("revista", e.target.value)} style={sel}>
                        <option value="">— Seleccionar —</option>
                        {REVISTAS.map(r => <option key={r}>{r}</option>)}
                    </select>
                </Campo>
            </div>

            <div style={{ marginTop: 14 }}>
                <Campo label="Restricciones o instrucciones especiales">
                    <textarea
                        value={form.restricciones}
                        onChange={e => onUpdate("restricciones", e.target.value)}
                        rows={2}
                        placeholder="Ej: Evitar fuentes anteriores a 2018, perspectiva latinoamericana..."
                        style={ta}
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