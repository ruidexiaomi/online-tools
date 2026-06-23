import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { WordCounterClient } from "./WordCounterClient";

export const metadata: Metadata = {
  title: "字数统计器 - 在线数字数工具",
  description: "在线字数统计工具，精确统计中文字数、英文字数、数字和标点符号。支持实时统计和详细分析。",
  alternates: { canonical: "/tools/word-counter/" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "字数统计器", applicationCategory: "UtilityApplication", operatingSystem: "Web Browser", description: "在线字数统计工具", offers: { "@type": "Offer", price: "0" } };

export default function WordCounterPage() {
  return (
    <ToolLayout toolName="字数统计器" toolDescription="粘贴或输入文本，实时统计中文字数、英文字数、总字符数和段落数。">
      <JsonLd data={jsonLd} />
      <WordCounterClient />
      <SeoText>
        <h2>字数统计完全指南</h2>
        <p>字数统计是写作、翻译、编辑工作中最基础的需求之一。无论是学生写论文、自媒体作者写文章、翻译人员计价、还是SEO优化，准确的数字数都至关重要。</p>
        <h3>中文和英文统计的区别</h3>
        <p>中文是以字为基本单位，每个汉字算一个字；英文则以单词为单位，空格分隔的为一个单词。标点符号和数字也有各自的计算规则。不同的平台（如微信公众号、知乎、学术期刊）对字数的统计方式也可能不同。</p>
        <h3>为什么需要字数统计？</h3>
        <p>微信公众号文章最佳长度是1000-3000字；SEO文章建议800字以上；学术论文有严格的字数要求；翻译稿费按千字计算。精准掌握字数有助于内容规划和成本核算。</p>
      </SeoText>
    </ToolLayout>
  );
}
