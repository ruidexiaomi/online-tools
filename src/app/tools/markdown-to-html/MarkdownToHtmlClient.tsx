"use client";

import { useState } from "react";

function simpleMdToHtml(md: string): string {
  let html = md
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Code blocks (must be before inline)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Headers
  html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Bold / Italic / Strikethrough
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/~~(.+?)~~/g, "<del>$1</del>");

  // Links and Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" />');
  html = html.replace(/\[([^\]]*)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Horizontal rule
  html = html.replace(/^---+$/gm, "<hr>");

  // Blockquote
  html = html.replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

  // Paragraphs (double newlines)
  html = html.replace(/\n\n/g, "</p><p>");

  // Line breaks
  html = html.replace(/\n/g, "<br>");

  return `<p>${html}</p>`;
}

export function MarkdownToHtmlClient() {
  const [md, setMd] = useState(`# 欢迎使用Markdown编辑器

## 基本语法
- **加粗文本**
- *斜体文本*
- ~~删除线~~

## 代码
\`行内代码\`

## 链接
[点击访问](https://example.com)

## 引用
> 这是一条引用`);

  const html = simpleMdToHtml(md);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Markdown 输入</label>
        <textarea value={md} onChange={(e) => setMd(e.target.value)}
          className="w-full h-[500px] p-4 border border-gray-200 rounded-xl font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500"
          spellCheck={false} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">HTML 预览</label>
        <div className="w-full h-[500px] p-4 border border-gray-200 bg-white rounded-xl overflow-auto prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
