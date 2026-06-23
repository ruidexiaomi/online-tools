"use client";

import { useState, useRef, useEffect } from "react";
import { formatBytes } from "@/lib/utils";

export function ImageCompressClient() {
  const [original, setOriginal] = useState<{ src: string; size: number; name: string } | null>(null);
  const [compressed, setCompressed] = useState<{ src: string; size: number } | null>(null);
  const [quality, setQuality] = useState(80);

  const fileRef = useRef<File | null>(null);

  const compress = (file: File, q: number = quality) => {
    fileRef.current = file;
    setOriginal({ src: URL.createObjectURL(file), size: file.size, name: file.name });
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            setCompressed({ src: URL.createObjectURL(blob), size: blob.size });
          }
        }, file.type || "image/jpeg", q / 100);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Recompress when quality changes
  useEffect(() => {
    if (fileRef.current) {
      compress(fileRef.current, quality);
    }
  }, [quality]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) compress(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) compress(file);
  };

  return (
    <div className="space-y-4">
      <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}
        className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors cursor-pointer">
        <input type="file" accept="image/*" onChange={handleFile} className="hidden" id="img-upload" />
        <label htmlFor="img-upload" className="cursor-pointer">
          <span className="text-4xl">🖼️</span>
          <p className="mt-3 text-gray-600">拖拽图片到此处或点击上传</p>
          <p className="text-xs text-gray-400 mt-1">支持 PNG / JPEG / WebP</p>
        </label>
      </div>

      {original && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">压缩质量: {quality}%</label>
          <input type="range" min="10" max="100" value={quality} onChange={(e) => setQuality(+e.target.value)}
            className="w-full" />
        </div>
      )}

      {original && compressed && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="text-sm font-medium text-gray-700 mb-2">原始图片</div>
            <img src={original.src} alt="original" className="max-h-64 mx-auto rounded-lg" />
            <div className="text-xs text-gray-500 mt-2">{formatBytes(original.size)}</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="text-sm font-medium text-gray-700 mb-2">压缩后</div>
            <img src={compressed.src} alt="compressed" className="max-h-64 mx-auto rounded-lg" />
            <div className="text-xs text-green-600 mt-2">
              {formatBytes(compressed.size)} (节省 {Math.round((1 - compressed.size / original.size) * 100)}%)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
