import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { QrcodeClient } from "./QrcodeClient";

export const metadata: Metadata = {
  title: "二维码生成器 - 在线免费二维码制作工具",
  description:
    "免费在线二维码生成工具，支持文字、网址、WiFi密码生成二维码图片。支持自定义颜色和大小，可免费下载PNG格式。",
  alternates: { canonical: "/tools/qrcode/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "二维码生成器",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web Browser",
  description: "免费在线二维码生成工具。",
  offers: { "@type": "Offer", price: "0" },
};

export default function QrcodePage() {
  return (
    <ToolLayout
      toolName="二维码生成器"
      toolDescription="输入文字或网址，一键生成二维码图片，支持自定义颜色和下载。"
    >
      <JsonLd data={jsonLd} />
      <QrcodeClient />
      <SeoText>
        <h2>二维码完全指南</h2>
        <p>
          二维码（QR Code，Quick Response Code）是一种二维条码，由日本的Denso Wave公司于1994年发明。
          它可以存储URL、文本、电话号码等信息。扫码后手机可快速打开网页、添加联系人、连接WiFi等。
        </p>
        <h3>二维码的类型</h3>
        <p>
          常见的二维码类型包括：网址二维码（扫码打开网页）、WiFi二维码（扫码连接WiFi）、
          名片二维码（扫码保存联系人）、支付二维码（扫码支付）、文本二维码（显示文字信息）。
          不同场景需要不同的二维码内容格式。
        </p>
        <h3>如何正确使用二维码</h3>
        <p>
          制作二维码时要注意对比度足够（黑白反差）、尺寸适中（建议不小于2cm×2cm）、
          预留足够的安静区域（二维码周围的空白边距）。对于网址二维码，建议先使用短链接
          服务缩短URL，使二维码更简洁、更易扫描。
        </p>
      </SeoText>
    </ToolLayout>
  );
}
