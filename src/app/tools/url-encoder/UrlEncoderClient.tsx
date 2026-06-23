"use client";

import { useState } from "react";

export function UrlEncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => {
    try {
      setOutput(encodeURIComponent(input));
    } catch {
      setOutput("编码失败，请检查输入");
    }
  };

  const decode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch {
      setOutput("解码失败，请检查输入是否为有效的URL编码");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={encode}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
        >
          🔒 编码 (Encode)
        </button>
        <button
          onClick={decode}
          className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
        >
          🔓 解码 (Decode)
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(output)}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
        >
          📋 复制
        </button>
        <button
          onClick={() => {
            setInput("");
            setOutput("");
          }}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
        >
          🗑️ 清空
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            输入文本
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="粘贴需要编码或解码的URL/文本..."
            className="w-full h-64 p-4 border border-gray-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500 resize-none"
            spellCheck={false}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            输出结果
          </label>
          <div className="w-full h-64 p-4 border border-gray-200 bg-gray-50 rounded-xl font-mono text-sm overflow-auto break-all">
            {output || (
              <span className="text-gray-400">等待处理...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
