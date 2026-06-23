"use client";

import { useState, useMemo } from "react";

export function RegexTesterClient() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");

  const results = useMemo(() => {
    if (!pattern || !text) return { matches: [], error: "" };
    try {
      const re = new RegExp(pattern, flags);
      const matches: { index: number; match: string; groups: string[] }[] = [];
      let m: RegExpExecArray | null;

      if (flags.includes("g")) {
        while ((m = re.exec(text)) !== null) {
          matches.push({ index: m.index, match: m[0], groups: m.slice(1) });
          if (m.index === re.lastIndex) re.lastIndex++;
        }
      } else {
        m = re.exec(text);
        if (m) matches.push({ index: m.index, match: m[0], groups: m.slice(1) });
      }
      return { matches, error: "" };
    } catch (e: unknown) {
      return { matches: [], error: e instanceof Error ? e.message : "无效正则" };
    }
  }, [pattern, flags, text]);

  // Highlight matches in text
  const highlightedText = useMemo(() => {
    if (!pattern || !text || results.matches.length === 0 || flags.includes("g") === false && results.matches.length > 0) {
      // Simple highlight for first match in non-global mode
      if (!flags.includes("g") && results.matches.length > 0) {
        const m = results.matches[0];
        return (
          <>
            {text.slice(0, m.index)}
            <mark className="bg-yellow-200 rounded px-0.5">{m.match}</mark>
            {text.slice(m.index + m.match.length)}
          </>
        );
      }
      return text;
    }
    const parts: { text: string; highlight: boolean }[] = [];
    let lastEnd = 0;
    for (const m of results.matches) {
      if (m.index > lastEnd) parts.push({ text: text.slice(lastEnd, m.index), highlight: false });
      parts.push({ text: m.match, highlight: true });
      lastEnd = m.index + m.match.length;
    }
    if (lastEnd < text.length) parts.push({ text: text.slice(lastEnd), highlight: false });
    return parts.map((p, i) => p.highlight ? <mark key={i} className="bg-yellow-200 rounded px-0.5">{p.text}</mark> : <span key={i}>{p.text}</span>);
  }, [text, results.matches, flags, pattern]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input value={pattern} onChange={(e) => setPattern(e.target.value)}
          placeholder="输入正则表达式，如 \d+" className="flex-1 p-3 border border-gray-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500" />
        <input value={flags} onChange={(e) => setFlags(e.target.value)}
          placeholder="flags (g/i/m)"
          className="w-28 p-3 border border-gray-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500" />
      </div>

      <textarea value={text} onChange={(e) => setText(e.target.value)}
        placeholder="输入要匹配的文本..." className="w-full h-40 p-4 border border-gray-200 rounded-xl text-sm resize-none focus:ring-2 focus:ring-blue-500" spellCheck={false} />

      {results.error && <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm">{results.error}</div>}

      {results.matches.length > 0 && (
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">匹配结果: {results.matches.length} 处</div>
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50 font-mono text-sm whitespace-pre-wrap">{highlightedText}</div>
          <div className="mt-2 space-y-1">
            {results.matches.map((m, i) => (
              <div key={i} className="text-xs font-mono text-gray-600">
                <span className="text-gray-400">[{m.index}]</span> {m.match}
                {m.groups.length > 0 && <span className="text-blue-500"> → 捕获组: {m.groups.join(", ")}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
