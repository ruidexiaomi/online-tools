"use client";

import { useState } from "react";

function generateV4(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function UuidGeneratorClient() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(5);
  const [format, setFormat] = useState<"standard" | "upper" | "nohyphen">("standard");

  const generateAll = () => {
    setUuids(Array.from({ length: count }, () => {
      const uuid = generateV4();
      if (format === "upper") return uuid.toUpperCase();
      if (format === "nohyphen") return uuid.replace(/-/g, "");
      return uuid;
    }));
  };

  const copyAll = () => navigator.clipboard.writeText(uuids.join("\n")).catch(() => alert("复制失败，请手动复制"));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">数量</label>
          <input type="number" min="1" max="100" value={count} onChange={(e) => setCount(Math.min(100, parseInt(e.target.value) || 1))}
            className="w-24 p-2 border border-gray-200 rounded-lg text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">格式</label>
          <select value={format} onChange={(e) => setFormat(e.target.value as typeof format)}
            className="p-2 border border-gray-200 rounded-lg text-sm">
            <option value="standard">标准 (小写)</option>
            <option value="upper">大写</option>
            <option value="nohyphen">无连字符</option>
          </select>
        </div>
        <button onClick={generateAll} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">生成</button>
        {uuids.length > 0 && (
          <button onClick={copyAll} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">📋 复制全部</button>
        )}
      </div>
      {uuids.length > 0 && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          {uuids.map((uuid, i) => (
            <div key={i} className="px-4 py-2 font-mono text-sm border-b border-gray-100 last:border-0 hover:bg-gray-50 flex justify-between">
              <span>{uuid}</span>
              <button onClick={() => navigator.clipboard.writeText(uuid).catch(() => alert("复制失败"))} className="text-blue-600 text-xs hover:underline">复制</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
