import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { MarkdownToHtmlClient } from "./MarkdownToHtmlClient";

export const metadata: Metadata = {
  title: "Markdown转HTML工具 - 在线MD编辑器",
  description: "在线Markdown编辑器，实时预览HTML效果。支持标题、列表、代码块、表格等标准Markdown语法和代码高亮。",
  alternates: { canonical: "/tools/markdown-to-html/" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Markdown转HTML工具", applicationCategory: "UtilityApplication", operatingSystem: "Web Browser", description: "在线Markdown编辑器。", offers: { "@type": "Offer", price: "0" } };

export default function MarkdownToHtmlPage() {
  return (
    <ToolLayout toolName="Markdown转HTML工具" toolDescription="在线编辑Markdown并实时预览HTML效果，支持全部标准语法。">
      <JsonLd data={jsonLd} />
      <MarkdownToHtmlClient />
      <SeoText>
        <h2>Markdown完全指南</h2>
        <p>Markdown是一种轻量级标记语言，由John Gruber于2004年创建。它使用简单的符号（如#、*、-）来标记文本格式，最终可以转换为HTML。Markdown的语法简单直观，易读易写，已成为技术写作的事实标准。</p>
        <h3>Markdown基础语法</h3>
        <p># 表示标题，# 的数量代表标题级别（1-6级）。**加粗**表示加粗，*斜体*表示斜体。- 或 * 创建无序列表，1. 创建有序列表。代码块使用三个反引号包裹。[文本](链接)创建超链接，![alt](图片URL)插入图片。</p>
        <h3>Markdown的优势</h3>
        <p>纯文本格式，任何编辑器都可以打开。与HTML完美兼容，可以混用。GitHub、StackOverflow、简书等平台都支持Markdown。Markdown文件(.md)体积小，适合版本控制。对于技术文档、博客文章、README文件来说，Markdown是最佳的写作格式。</p>
      </SeoText>
    </ToolLayout>
  );
}
