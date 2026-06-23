import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { RegexTesterClient } from "./RegexTesterClient";

export const metadata: Metadata = {
  title: "正则表达式测试工具 - 在线Regex匹配调试",
  description: "在线正则表达式测试工具，实时匹配和替换文本。支持全局匹配、多行模式和忽略大小写。提供常用正则表达式参考。",
  alternates: { canonical: "/tools/regex-tester/" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "正则表达式测试工具", applicationCategory: "UtilityApplication", operatingSystem: "Web Browser", description: "在线正则表达式测试工具。", offers: { "@type": "Offer", price: "0" } };

export default function RegexTesterPage() {
  return (
    <ToolLayout toolName="正则表达式测试工具" toolDescription="在线测试正则表达式，实时显示匹配结果。">
      <JsonLd data={jsonLd} />
      <RegexTesterClient />
      <SeoText>
        <h2>正则表达式完全指南</h2>
        <p>正则表达式（Regular Expression，简称Regex）是用于匹配和操作文本的强大工具。它使用一种模式描述语言来定义搜索模式，广泛应用于文本查找、替换、数据验证和解析等场景。几乎所有编程语言都内置了正则表达式支持。</p>
        <h3>常用正则表达式元字符</h3>
        <p>.匹配任意字符，*匹配0次或多次，+匹配1次或多次，?匹配0次或1次，^匹配行首，$匹配行尾，\d匹配数字，\w匹配单词字符，\s匹配空白字符。[abc]匹配指定字符，[^abc]匹配非指定字符。(pattern)创建捕获组。</p>
        <h3>正则表达式实践</h3>
        <p>邮箱验证：^\w+@\w+\.\w+$，手机号验证：^1[3-9]\d{9}$，URL提取：https?://[^\s]+。掌握正则表达式可以大幅提升文本处理效率，是每个程序员的必备技能。</p>
      </SeoText>
    </ToolLayout>
  );
}
