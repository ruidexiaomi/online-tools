import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { UrlEncoderClient } from "./UrlEncoderClient";

export const metadata: Metadata = {
  title: "URL编码解码工具 - 在线URL Encode / Decode",
  description:
    "在线URL编码解码工具，支持URL encode和decode，方便处理网址中的中文、空格和特殊字符。轻松转换URL编码字符串。",
  alternates: { canonical: "/tools/url-encoder/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "URL编码解码工具",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web Browser",
  description: "在线URL编码解码工具，支持encode和decode操作。",
  offers: { "@type": "Offer", price: "0" },
};

export default function UrlEncoderPage() {
  return (
    <ToolLayout
      toolName="URL编码解码工具"
      toolDescription="输入文本即可进行URL编码或解码，自动处理中文和特殊字符转换。"
    >
      <JsonLd data={jsonLd} />
      <UrlEncoderClient />

      <SeoText>
        <h2>URL编码解码完全指南</h2>
        <p>
          URL编码（URL Encoding），也称为百分号编码，是将URL中的特殊字符转换为浏览器可安全传输格式的过程。
          URL中只允许使用ASCII字符集中的部分字符，其他字符必须经过编码后才能放在URL中。
        </p>

        <h3>为什么需要URL编码？</h3>
        <p>
          当URL中包含中文、空格或特殊符号时，浏览器和服务器可能无法正确解析这些字符。
          例如，搜索"你好世界"时的URL需要将中文字符编码为URL编码格式才能正确传输。
          URL编码将这些非ASCII字符转换为%后跟两位十六进制数字的形式。
        </p>

        <h3>URL编码规则</h3>
        <p>
          编码规则很简单：不安全字符被替换为%加上其ASCII码的十六进制值。例如空格编码为%20，
          中文字符"你"编码为%E4%BD%A0。字母、数字和-_.~这些字符不需要编码，它们在URL中
          是安全的。理解这些规则有助于开发者调试网络请求和SEO优化。
        </p>

        <h3>使用方法和技巧</h3>
        <p>
          将需要编码的URL或文本粘贴到输入框，点击"编码"即可获得编码后的结果。
          相反，将编码后的URL粘贴到输入框点击"解码"即可还原。本工具使用JavaScript
          内置的encodeURIComponent和decodeURIComponent函数，确保编码结果准确无误。
        </p>
      </SeoText>
    </ToolLayout>
  );
}
