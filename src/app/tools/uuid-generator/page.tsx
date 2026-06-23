import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { UuidGeneratorClient } from "./UuidGeneratorClient";

export const metadata: Metadata = {
  title: "UUID生成器 - 在线GUID/UUID生成工具",
  description: "在线UUID生成工具，支持UUID v4版本，批量生成唯一标识符。适用于数据库主键、API令牌、文件命名等场景。",
  alternates: { canonical: "/tools/uuid-generator/" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "UUID生成器", applicationCategory: "UtilityApplication", operatingSystem: "Web Browser", description: "在线UUID生成工具。", offers: { "@type": "Offer", price: "0" } };

export default function UuidGeneratorPage() {
  return (
    <ToolLayout toolName="UUID生成器" toolDescription="一键生成UUID/GUID唯一标识符，支持批量生成和多种格式。">
      <JsonLd data={jsonLd} />
      <UuidGeneratorClient />
      <SeoText>
        <h2>UUID完全指南</h2>
        <p>UUID（Universally Unique Identifier）是一种128位的全局唯一标识符，用于在分布式系统中唯一标识信息，不需要中心协调机构。GUID（Globally Unique Identifier）是微软对UUID的实现。</p>
        <h3>UUID版本</h3>
        <p>UUID v1：基于时间和MAC地址生成。UUID v4：基于随机数生成，最常用。UUID v5：基于命名空间和名称的SHA-1哈希。日常开发中v4是最常用的版本，因为它不需要任何外部输入。</p>
        <h3>UUID格式</h3>
        <p>标准UUID格式为8-4-4-4-12的32位十六进制数字，如：550e8400-e29b-41d4-a716-446655440000。UUID的碰撞概率极低，即使在每秒生成10亿个UUID的情况下，也需要约85年才会出现一次碰撞。</p>
      </SeoText>
    </ToolLayout>
  );
}
