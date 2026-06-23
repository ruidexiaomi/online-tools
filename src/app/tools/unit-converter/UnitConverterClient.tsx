"use client";

import { useState, useMemo } from "react";

const CONVERSIONS = {
  length: {
    label: "长度",
    units: {
      "米 (m)": 1,
      "厘米 (cm)": 100,
      "毫米 (mm)": 1000,
      "公里 (km)": 0.001,
      "英寸 (in)": 39.3701,
      "英尺 (ft)": 3.28084,
      "码 (yd)": 1.09361,
      "英里 (mi)": 0.000621371,
    },
  },
  weight: {
    label: "重量",
    units: {
      "千克 (kg)": 1,
      "克 (g)": 1000,
      "毫克 (mg)": 1000000,
      "吨 (t)": 0.001,
      "磅 (lb)": 2.20462,
      "盎司 (oz)": 35.274,
      "斤": 2,
    },
  },
  temperature: {
    label: "温度",
    units: { "摄氏度 (°C)": "C", "华氏度 (°F)": "F", "开尔文 (K)": "K" },
  },
  area: {
    label: "面积",
    units: {
      "平方米 (m²)": 1,
      "平方厘米 (cm²)": 10000,
      "平方千米 (km²)": 0.000001,
      "公顷 (ha)": 0.0001,
      "亩": 0.0015,
      "平方英尺 (ft²)": 10.7639,
    },
  },
  volume: {
    label: "体积",
    units: {
      "升 (L)": 1,
      "毫升 (mL)": 1000,
      "立方米 (m³)": 0.001,
      "加仑 (gal)": 0.264172,
      "夸脱 (qt)": 1.05669,
    },
  },
  speed: {
    label: "速度",
    units: {
      "米/秒 (m/s)": 1,
      "公里/小时 (km/h)": 3.6,
      "英里/小时 (mph)": 2.23694,
      "节 (kn)": 1.94384,
    },
  },
};

type ConvKey = keyof typeof CONVERSIONS;

export function UnitConverterClient() {
  const [type, setType] = useState<ConvKey>("length");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [value, setValue] = useState("1");

  const conv = CONVERSIONS[type];

  const result = useMemo(() => {
    if (!fromUnit || !toUnit || !value) return "";
    const num = parseFloat(value);
    if (isNaN(num)) return "请输入有效数字";

    if (type === "temperature") {
      let c = 0;
      if (fromUnit === "C") c = num;
      else if (fromUnit === "F") c = (num - 32) * 5 / 9;
      else if (fromUnit === "K") c = num - 273.15;

      if (toUnit === "C") return c.toFixed(2) + " °C";
      if (toUnit === "F") return (c * 9 / 5 + 32).toFixed(2) + " °F";
      if (toUnit === "K") return (c + 273.15).toFixed(2) + " K";
    }

    const fromFactor = (conv.units as Record<string, number>)[fromUnit];
    const toFactor = (conv.units as Record<string, number>)[toUnit];
    if (fromFactor === undefined || toFactor === undefined) return "";
    const base = num / fromFactor;
    return (base * toFactor).toFixed(6).replace(/\.?0+$/, "");
  }, [value, fromUnit, toUnit, type, conv]);

  // Init units
  const unitNames = type === "temperature" ? Object.keys(conv.units) : Object.keys(conv.units as Record<string, number>);
  if (!fromUnit && unitNames.length > 0) {
    setTimeout(() => { setFromUnit(unitNames[0]); setToUnit(unitNames[1] || unitNames[0]); }, 0);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {Object.entries(CONVERSIONS).map(([key, c]) => (
          <button key={key} onClick={() => { setType(key as ConvKey); setFromUnit(""); setToUnit(""); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${type === key ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">从</label>
          <input value={value} onChange={(e) => setValue(e.target.value)}
            type="number" step="any" className="w-full p-3 border border-gray-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500" />
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="w-full mt-2 p-2 border border-gray-200 rounded-lg text-sm">
            {unitNames.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>

        <div className="text-center text-2xl pb-2">→</div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">到</label>
          <div className="w-full p-3 border border-gray-200 bg-gray-50 rounded-xl font-mono text-sm min-h-[48px] flex items-center">
            {result || "-"}
          </div>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="w-full mt-2 p-2 border border-gray-200 rounded-lg text-sm">
            {unitNames.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
