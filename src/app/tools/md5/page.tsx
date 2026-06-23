import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { Md5Client } from "./Md5Client";

export const metadata: Metadata = {
  title: "MD5在线加密工具 - MD5哈希值生成器",
  description:
    "在线MD5哈希加密工具，支持字符串MD5值计算。快速生成32位MD5哈希值，用于数据完整性校验和文件指纹。",
  alternates: { canonical: "/tools/md5/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MD5在线加密工具",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web Browser",
  description: "在线MD5哈希加密工具。",
  offers: { "@type": "Offer", price: "0" },
};

export default function Md5Page() {
  return (
    <ToolLayout
      toolName="MD5在线加密工具"
      toolDescription="输入任意文本，一键生成32位MD5哈希值。"
    >
      <JsonLd data={jsonLd} />
      <Md5Client />

      <SeoText>
        <h2>MD5哈希算法详解</h2>
        <p>
          MD5（Message Digest Algorithm 5）是一种广泛使用的哈希函数，由Ronald Rivest于1991年设计。
          它将任意长度的数据输入转换为一个128位（16字节）的固定长度哈希值，通常表示为32位十六进制数字。
          MD5常用于验证数据完整性、文件校验和密码存储。
        </p>
        <h3>MD5的特性</h3>
        <p>
          MD5具有以下特点：固定输出长度（128位）、输入敏感（微小变化导致输出完全不同）、
          单向不可逆（从哈希值无法还原原文）、快速计算。但需要注意的是，MD5已被证明存在
          碰撞漏洞，不适合安全要求高的场景，建议使用SHA-256等更安全的算法。
        </p>
        <h3>MD5常见用途</h3>
        <p>
          在文件下载中，提供方通常会提供文件的MD5值供下载者校验；在数据库中，密码常以MD5形式存储；
          在数字签名中，MD5作为消息摘要的一部分。虽然安全性已落后，但它仍然是目前使用最广泛的
          哈希算法之一。
        </p>
      </SeoText>
    </ToolLayout>
  );
}
