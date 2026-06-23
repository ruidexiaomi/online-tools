import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { Base64Client } from "./Base64Client";

export const metadata: Metadata = {
  title: "Base64编码解码工具 - 在线Base64 Encode / Decode",
  description:
    "在线Base64编码解码工具，支持字符串与Base64格式互相转换，支持中文Unicode。轻松转换Base64编码。",
  alternates: { canonical: "/tools/base64/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Base64编码解码工具",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web Browser",
  description: "在线Base64编码解码工具，支持encode和decode操作。",
  offers: { "@type": "Offer", price: "0" },
};

export default function Base64Page() {
  return (
    <ToolLayout
      toolName="Base64编码解码工具"
      toolDescription="输入文本即可进行Base64编码或解码，支持中文等多字节字符。"
    >
      <JsonLd data={jsonLd} />
      <Base64Client />

      <SeoText>
        <h2>Base64编码完全指南</h2>
        <p>
          Base64是一种基于64个可打印字符来表示二进制数据的编码方式。它将任意二进制数据
          转换为A-Z、a-z、0-9、+、/这64个字符的组合。Base64广泛用于电子邮件（MIME）、
          数据URI、JWT令牌、以及各种需要以文本形式传输二进制数据的场景。
        </p>
        <h3>Base64编码原理</h3>
        <p>
          Base64将每3个字节（24比特）的二进制数据转换为4个Base64字符。如果原始数据不是
          3的倍数，会在末尾用=号填充。编码后的数据体积比原数据大约增加33%，但确保数据
          在只支持文本的环境中安全传输。
        </p>
        <h3>常见应用场景</h3>
        <p>
          在前端开发中，Base64常用于将小图片内嵌到CSS或HTML中（data URI）；在API认证中，
          Basic Auth使用Base64编码用户名和密码；在JWT中，payload部分使用Base64编码。
          在数据存储和传输中，Base64也用作将二进制数据转为文本的通用方案。
        </p>
      </SeoText>
    </ToolLayout>
  );
}
