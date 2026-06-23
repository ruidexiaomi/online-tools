"use client";

import { useState, useMemo } from "react";

export function WordCounterClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    const chineseChars = (text.match(/[一-鿿㐀-䶿]/g) || []).length;
    const englishWords = trimmed ? trimmed.split(/\s+/).filter(w => /[a-zA-Z]/.test(w)).length : 0;
    const lines = text ? text.split(/\n/).length : 0;
    const paragraphs = trimmed ? trimmed.split(/\n\n+/).filter(p => p.trim()).length : 0;
    const digits = (text.match(/\d/g) || []).length;
    const punctuation = (text.match(/[，。！？、；：""''（）《》【】…—\.,!?;:'"()\[\]{}]/g) || []).length;

    // Estimated reading time
    const totalWords = chineseChars + englishWords;
    const readMin = Math.ceil(totalWords / 300);

    return { chars, charsNoSpace, chineseChars, englishWords, lines, paragraphs, digits, punctuation, totalWords, readMin };
  }, [text]);

  const rows = [
    ["总字符数（含空格）", stats.chars],
    ["字符数（不含空格）", stats.charsNoSpace],
    ["中文字数", stats.chineseChars],
    ["英文单词数", stats.englishWords],
    ["数字个数", stats.digits],
    ["标点符号数", stats.punctuation],
    ["行数", stats.lines],
    ["段落数", stats.paragraphs],
    ["估算阅读时间", `${stats.readMin} 分钟`],
  ];

  return (
    <div className="space-y-4">
      <textarea value={text} onChange={(e) => setText(e.target.value)}
        placeholder="粘贴或输入文本..."
        className="w-full h-64 p-4 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 resize-none" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {rows.map(([label, val]) => (
          <div key={label as string} className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-blue-600">{val}</div>
            <div className="text-xs text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
