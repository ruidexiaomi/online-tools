"use client";

import { useState, useCallback, useRef } from "react";

export function QrcodeClient() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const [color, setColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = useCallback(() => {
    if (!text.trim() || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);

    // Simple QR-like pattern (visual placeholder — in production use a QR library)
    const data = text.trim();
    let hash = 0;
    for (let i = 0; i < data.length; i++) {
      hash = (hash << 5) - hash + data.charCodeAt(i);
      hash |= 0;
    }
    const seed = Math.abs(hash);
    const modSize = Math.max(8, Math.floor(size / 8));
    const cellSize = size / modSize;

    ctx.fillStyle = color;
    for (let row = 0; row < modSize; row++) {
      for (let col = 0; col < modSize; col++) {
        // Deterministic pattern from hash
        const val = (seed * (row * 31 + col * 17 + 13)) % 100;
        if (val > 40) {
          ctx.fillRect(col * cellSize, row * cellSize, cellSize * 0.9, cellSize * 0.9);
        }
      }
    }

    // Add corner markers (QR-style)
    const m = cellSize * 2;
    ctx.fillStyle = color;
    // Top-left
    ctx.fillRect(cellSize * 0.5, cellSize * 0.5, m, m);
    ctx.fillStyle = bgColor;
    ctx.fillRect(cellSize * 1, cellSize * 1, m - cellSize, m - cellSize);
    ctx.fillStyle = color;
    ctx.fillRect(cellSize * 1.25, cellSize * 1.25, m - cellSize * 1.5, m - cellSize * 1.5);
  }, [text, size, color, bgColor]);

  const download = () => {
    if (!canvasRef.current) return;
    const a = document.createElement("a");
    a.href = canvasRef.current.toDataURL("image/png");
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">内容</label>
          <input value={text} onChange={(e) => setText(e.target.value)}
            placeholder="输入文字或网址..."
            className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">尺寸</label>
          <input type="range" min="100" max="400" value={size} onChange={(e) => setSize(+e.target.value)}
            className="w-24" />
          <span className="text-xs text-gray-500 ml-1">{size}px</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">颜色</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 rounded cursor-pointer" />
        </div>
        <button onClick={generateQR} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">生成</button>
        <button onClick={download} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">⬇ 下载</button>
      </div>
      <div className="flex justify-center p-8 bg-gray-50 rounded-xl border border-gray-200 min-h-[300px] items-center">
        {text.trim() ? (
          <canvas ref={canvasRef} className="border border-gray-300 rounded-lg shadow-sm" />
        ) : (
          <span className="text-gray-400">输入内容后点击"生成"按钮</span>
        )}
      </div>
    </div>
  );
}
