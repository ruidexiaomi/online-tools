"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import QRCode from "qrcode";

export function QrcodeClient() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const [color, setColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [error, setError] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = useCallback(() => {
    if (!text.trim() || !canvasRef.current) return;
    setError("");

    const canvas = canvasRef.current;
    canvas.width = size;
    canvas.height = size;

    QRCode.toCanvas(canvas, text.trim(), {
      width: size,
      margin: 2,
      color: { dark: color, light: bgColor },
      errorCorrectionLevel: "M",
    }).catch((err: Error) => {
      setError("生成失败: " + err.message);
    });
  }, [text, size, color, bgColor]);

  // Auto-generate on text change
  useEffect(() => {
    if (text.trim()) {
      const timer = setTimeout(generateQR, 300);
      return () => clearTimeout(timer);
    }
  }, [text, generateQR]);

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
        {error ? (
          <span className="text-red-500 text-sm">{error}</span>
        ) : text.trim() ? (
          <canvas ref={canvasRef} className="border border-gray-300 rounded-lg shadow-sm" />
        ) : (
          <span className="text-gray-400">输入内容后自动生成二维码</span>
        )}
      </div>
    </div>
  );
}
