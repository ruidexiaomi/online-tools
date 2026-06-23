import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { ColorConverterClient } from "./ColorConverterClient";

export const metadata: Metadata = {
  title: "颜色代码转换工具 - HEX/RGB/HSL在线互转",
  description: "在线颜色代码转换工具，支持HEX、RGB、HSL格式互相转换，提供颜色选择器和实时预览。设计师和前端开发者必备。",
  alternates: { canonical: "/tools/color-converter/" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "颜色代码转换工具", applicationCategory: "UtilityApplication", operatingSystem: "Web Browser", description: "在线颜色代码转换工具", offers: { "@type": "Offer", price: "0" } };

export default function ColorConverterPage() {
  return (
    <ToolLayout toolName="颜色代码转换工具" toolDescription="轻松在HEX、RGB、HSL颜色格式之间转换，附带颜色选择器和实时预览。">
      <JsonLd data={jsonLd} />
      <ColorConverterClient />
      <SeoText>
        <h2>颜色代码完全指南</h2>
        <p>在网页设计和UI开发中，颜色表示方法主要有三种：HEX（十六进制）、RGB（红绿蓝）、HSL（色相饱和度亮度）。每种格式都有其使用场景。</p>
        <h3>HEX颜色代码</h3>
        <p>HEX是最常用的CSS颜色格式，使用#号后跟6位十六进制数字表示。例如#FF0000表示红色，#00FF00表示绿色，#0000FF表示蓝色。每两位数字分别表示红、绿、蓝三种颜色的亮度值，范围从00到FF。</p>
        <h3>RGB颜色模型</h3>
        <p>RGB使用三个0-255的整数分别表示红绿蓝分量。rgb(255, 0, 0)等价于#FF0000。RGBA在RGB基础上增加了Alpha通道（0-1），用于控制透明度。</p>
        <h3>HSL颜色模型</h3>
        <p>HSL更符合人类对颜色的直观感知：H（色相0-360）、S（饱和度0-100%）、L（亮度0-100%）。HSL使调整颜色明暗和饱和度变得非常简单。</p>
      </SeoText>
    </ToolLayout>
  );
}
