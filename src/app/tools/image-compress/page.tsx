import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { ImageCompressClient } from "./ImageCompressClient";

export const metadata: Metadata = {
  title: "图片压缩工具 - 在线无损压缩PNG/JPG/WebP",
  description: "免费在线图片压缩工具，支持PNG、JPEG、WebP格式压缩，在浏览器本地处理，保护隐私。大幅减小图片体积，适合网页优化。",
  alternates: { canonical: "/tools/image-compress/" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "图片压缩工具", applicationCategory: "UtilityApplication", operatingSystem: "Web Browser", description: "在线图片压缩工具。", offers: { "@type": "Offer", price: "0" } };

export default function ImageCompressPage() {
  return (
    <ToolLayout toolName="图片压缩工具" toolDescription="上传图片即可压缩，支持PNG/JPEG/WebP格式。所有处理在本地浏览器完成，不泄露隐私。">
      <JsonLd data={jsonLd} />
      <ImageCompressClient />
      <SeoText>
        <h2>图片压缩完全指南</h2>
        <p>图片是网页中体积最大的资源，通常占页面总大小的60%以上。一张未经压缩的高清图片可能有5-10MB，而通过合理的压缩可以降到500KB以下，肉眼几乎看不出差异。图片压缩是网站性能优化的第一步。</p>
        <h3>有损 vs 无损压缩</h3>
        <p>有损压缩会牺牲一些图像质量来换取更小的文件体积，适合照片和复杂图像。无损压缩保留所有像素数据，体积减少有限，适合图标、Logo等需要精确显示的图像。JPEG通常使用有损压缩，PNG支持无损压缩。</p>
        <h3>各格式特点</h3>
        <p>JPEG适合照片和渐变色图片，PNG适合带透明度的图标和截图，WebP是Google开发的现代格式，在同等质量下比JPEG小25-35%。建议网站优先使用WebP格式以获得最佳性能和最小的文件体积。</p>
      </SeoText>
    </ToolLayout>
  );
}
