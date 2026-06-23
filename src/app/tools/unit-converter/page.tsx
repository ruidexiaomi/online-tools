import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { UnitConverterClient } from "./UnitConverterClient";

export const metadata: Metadata = {
  title: "单位换算器 - 在线长度/重量/温度/面积换算",
  description: "在线单位换算工具，支持长度、重量、温度、面积、体积、速度等多种单位的快速转换。实用的日常换算工具。",
  alternates: { canonical: "/tools/unit-converter/" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "单位换算器", applicationCategory: "UtilityApplication", operatingSystem: "Web Browser", description: "在线单位换算工具。", offers: { "@type": "Offer", price: "0" } };

export default function UnitConverterPage() {
  return (
    <ToolLayout toolName="单位换算器" toolDescription="选择换算类型，输入数值即可快速转换。支持长度、重量、温度、面积、体积、速度等。">
      <JsonLd data={jsonLd} />
      <UnitConverterClient />
      <SeoText>
        <h2>单位换算完全指南</h2>
        <p>单位换算在日常生活中无处不在：做饭时需要换算盎司和克，出国旅行时需要换算英里和公里、华氏度与摄氏度，装修时需要换算平方米和平方英尺。掌握常用单位换算能大大提高生活效率。</p>
        <h3>公制与英制</h3>
        <p>世界上大多数国家使用公制（米、千克、摄氏度），但美国等少数国家仍使用英制（英尺、磅、华氏度）。1英寸=2.54厘米，1英里=1.609公里，1磅=0.4536千克，华氏度=摄氏度×9/5+32。</p>
        <h3>常见换算表</h3>
        <p>长度：1公里=1000米，1米=100厘米，1英尺=12英寸；重量：1公斤=1000克，1斤=500克，1盎司≈28.35克；面积：1平方米=10.764平方英尺，1亩≈666.67平方米；体积：1升=1000毫升，1加仑≈3.785升。</p>
      </SeoText>
    </ToolLayout>
  );
}
