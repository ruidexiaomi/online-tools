import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { TextDiffClient } from "./TextDiffClient";

export const metadata: Metadata = {
  title: "文本差异对比工具 - 在线文本Diff比较",
  description: "在线文本差异对比工具，快速找出两段文本的不同之处，支持逐行对比和高亮显示差异。适用于代码审查和文本校对。",
  alternates: { canonical: "/tools/text-diff/" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "文本差异对比工具", applicationCategory: "UtilityApplication", operatingSystem: "Web Browser", description: "在线文本差异对比工具。", offers: { "@type": "Offer", price: "0" } };

export default function TextDiffPage() {
  return (
    <ToolLayout toolName="文本差异对比工具" toolDescription="粘贴两段文本，逐行对比找出新增、删除和修改内容。">
      <JsonLd data={jsonLd} />
      <TextDiffClient />
      <SeoText>
        <h2>文本差异对比完全指南</h2>
        <p>文本差异对比（Text Diff）是软件开发中版本控制和代码审查的基础工具。它通过比较两段文本，高亮显示新增、删除和修改的行，帮助用户快速了解变更内容。Git diff命令就是最经典的实现。</p>
        <h3>Diff算法原理</h3>
        <p>常用的diff算法包括Myers算法和Patience算法。Myers算法找到两个文本之间的最短编辑路径，即最少的增删操作序列。Git默认使用Myers算法，但也可以通过配置切换到其他算法如histogram或patience。</p>
        <h3>使用场景</h3>
        <p>文本对比工具不仅适用于代码审查，还适用于文档版本管理、合同修改追踪、文章改稿对比等各种场景。任何需要追踪文本变更的场景都可以使用diff工具。</p>
      </SeoText>
    </ToolLayout>
  );
}
