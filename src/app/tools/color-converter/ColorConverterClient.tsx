"use client";

import { useState, useCallback, useEffect } from "react";

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return null;
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => Math.max(0, Math.min(255, x)).toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function ColorConverterClient() {
  const [hex, setHex] = useState("#3b82f6");
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState("");

  const updateFromHex = useCallback((h: string) => {
    setHex(h);
    const vals = hexToRgb(h);
    if (vals) {
      setRgb({ r: vals[0], g: vals[1], b: vals[2] });
      setHsl(rgbToHsl(vals[0], vals[1], vals[2]).join(", "));
    }
  }, []);

  const updateFromRgb = useCallback((r: number, g: number, b: number) => {
    setRgb({ r, g, b });
    setHex(rgbToHex(r, g, b));
    setHsl(rgbToHsl(r, g, b).join(", "));
  }, []);

  // Init state from default hex
  useEffect(() => {
    updateFromHex(hex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <input type="color" value={hex} onChange={(e) => updateFromHex(e.target.value)} className="w-20 h-20 rounded-xl cursor-pointer border-0" />
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">HEX</label>
          <input value={hex} onChange={(e) => updateFromHex(e.target.value)} placeholder="#000000"
            className="w-full p-3 border border-gray-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {["r", "g", "b"].map((ch, i) => (
          <div key={ch}>
            <label className="block text-sm font-medium text-gray-700 mb-1">RGB.{ch.toUpperCase()}</label>
            <input type="number" min="0" max="255" value={[rgb.r, rgb.g, rgb.b][i]}
              onChange={(e) => {
                const vals = [rgb.r, rgb.g, rgb.b];
                vals[i] = parseInt(e.target.value) || 0;
                updateFromRgb(vals[0], vals[1], vals[2]);
              }}
              className="w-full p-3 border border-gray-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500" />
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">RGB: <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">rgb({rgb.r}, {rgb.g}, {rgb.b})</code></label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">HSL</label>
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm">
          {hsl ? `hsl(${hsl})` : "-"}
        </div>
      </div>
    </div>
  );
}
