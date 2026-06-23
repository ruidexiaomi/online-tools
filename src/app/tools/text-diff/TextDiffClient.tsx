"use client";

import { useState, useMemo } from "react";

function simpleDiff(oldLines: string[], newLines: string[]): { type: "same" | "add" | "del" | "mod"; text: string }[] {
  const result: { type: "same" | "add" | "del" | "mod"; text: string }[] = [];
  const maxLen = Math.max(oldLines.length, newLines.length);

  for (let i = 0; i < maxLen; i++) {
    const o = oldLines[i];
    const n = newLines[i];
    if (o === undefined && n !== undefined) result.push({ type: "add", text: n });
    else if (n === undefined && o !== undefined) result.push({ type: "del", text: o });
    else if (o === n) result.push({ type: "same", text: o });
    else result.push({ type: "mod", text: n });
  }
  return result;
}

export function TextDiffClient() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");

  const diff = useMemo(() => {
    if (!oldText && !newText) return [];
    return simpleDiff(oldText.split("\n"), newText.split("\n"));
  }, [oldText, newText]);

  const colorMap = { same: "bg-transparent", add: "bg-green-50 border-l-2 border-green-400", del: "bg-red-50 border-l-2 border-red-400", mod: "bg-yellow-50 border-l-2 border-yellow-400" };
  const prefixMap = { same: "  ", add: "+ ", del: "- ", mod: "~ " };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">原始文本</label>
          <textarea value={oldText} onChange={(e) => setOldText(e.target.value)}
            placeholder="粘贴原始文本..."
            className="w-full h-64 p-4 border border-gray-200 rounded-xl font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500" spellCheck={false} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">新文本</label>
          <textarea value={newText} onChange={(e) => setNewText(e.target.value)}
            placeholder="粘贴修改后的文本..."
            className="w-full h-64 p-4 border border-gray-200 rounded-xl font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500" spellCheck={false} />
        </div>
      </div>

      {diff.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">差异结果</label>
          <div className="border border-gray-200 rounded-xl font-mono text-sm overflow-auto max-h-96">
            {diff.map((line, i) => (
              <div key={i} className={`px-3 py-1 flex ${colorMap[line.type]}`}>
                <span className="text-gray-400 w-8 flex-shrink-0 text-right mr-2">{i + 1}</span>
                <span className="mr-2 text-xs font-bold">{prefixMap[line.type]}</span>
                <span>{line.text || " "}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-50 border border-green-400 rounded-sm"></span> 新增</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-50 border border-red-400 rounded-sm"></span> 删除</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-50 border border-yellow-400 rounded-sm"></span> 修改</span>
          </div>
        </div>
      )}
    </div>
  );
}
