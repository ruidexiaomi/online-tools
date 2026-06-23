"use client";

import { useState } from "react";

export function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"format" | "compress" | "validate">("format");

  const processJson = (action: "format" | "compress" | "validate") => {
    setMode(action);
    setError("");
    if (!input.trim()) {
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      if (action === "format") {
        setOutput(JSON.stringify(parsed, null, 2));
      } else if (action === "compress") {
        setOutput(JSON.stringify(parsed));
      } else {
        setOutput("✅ JSON格式正确！\n\n" + JSON.stringify(parsed, null, 2));
      }
    } catch (e: unknown) {
      const errMsg = e instanceof Error ? e.message : "未知错误";
      setError(`❌ 格式错误: ${errMsg}`);
      setOutput("");
    }
  };

  const copyResult = () => {
    navigator.clipboard.writeText(output || error).catch(() => alert("复制失败，请手动复制"));
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => processJson("format")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "format"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          ✨ 格式化
        </button>
        <button
          onClick={() => processJson("compress")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "compress"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          📦 压缩
        </button>
        <button
          onClick={() => processJson("validate")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "validate"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          ✅ 验证
        </button>
        <button
          onClick={copyResult}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          📋 复制
        </button>
        <button
          onClick={clearAll}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
        >
          🗑️ 清空
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            输入 JSON 数据
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='粘贴 JSON 数据，例如: {"name": "张三", "age": 25}'
            className="w-full h-96 p-4 border border-gray-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            spellCheck={false}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            输出结果
          </label>
          <div
            className={`w-full h-96 p-4 border rounded-xl font-mono text-sm overflow-auto whitespace-pre-wrap ${
              error
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-gray-200 bg-gray-50 text-gray-800"
            }`}
          >
            {output || error || (
              <span className="text-gray-400">等待处理...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
