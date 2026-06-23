import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { JsonFormatterClient } from "./JsonFormatterClient";

export const metadata: Metadata = {
  title: "JSON格式化工具 - 在线JSON解析验证美化",
  description:
    "免费的在线JSON格式化工具，支持JSON校验、压缩、美化。帮助开发者快速解析和调试JSON数据，支持语法高亮和错误定位。",
  alternates: { canonical: "/tools/json-formatter/" },
  openGraph: {
    title: "JSON格式化工具 - 在线JSON解析验证美化",
    description: "免费的在线JSON格式化工具，支持JSON校验、压缩、美化。",
    url: "/tools/json-formatter/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JSON格式化工具",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web Browser",
  description:
    "免费在线JSON格式化验证工具，支持JSON美化、压缩、校验功能。",
  offers: { "@type": "Offer", price: "0" },
};

export default function JsonFormatterPage() {
  return (
    <ToolLayout
      toolName="JSON格式化工具"
      toolDescription="粘贴JSON数据到输入框，自动格式化美化或压缩。支持语法错误检测和定位。"
    >
      <JsonLd data={jsonLd} />
      <JsonFormatterClient />

      <SeoText>
        <h2>JSON格式化工具使用指南</h2>
        <p>
          JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，广泛应用于前后端数据传输、API接口和配置文件中。
          JSON格式化工具可以帮助开发者将压缩的JSON数据转换为易读的格式，快速定位数据结构中的问题。
        </p>

        <h3>什么是JSON格式化？</h3>
        <p>
          JSON格式化是指将压缩的、难以阅读的JSON字符串转换成带有缩进和换行的美观格式。
          通过格式化，开发者可以清晰地看到数据的层级结构和键值对应关系，极大提高了调试效率。
          同时，格式化工具有效检测JSON语法错误，帮助开发者快速定位问题所在。
        </p>

        <h3>如何使用JSON格式化工具？</h3>
        <ol>
          <li>将您的JSON数据复制粘贴到左侧输入框中。</li>
          <li>点击"格式化"按钮，工具会自动美化JSON数据。</li>
          <li>如果需要压缩，点击"压缩"按钮即可去除所有空白字符。</li>
          <li>点击"验证"按钮检查JSON格式是否正确。</li>
          <li>使用"复制"按钮一键复制格式化后的结果。</li>
        </ol>

        <h3>JSON常见错误及解决方法</h3>
        <p>
          在使用JSON时，最常见的错误包括：缺少引号、多余的逗号、键名未用双引号包裹、以及括号不匹配等。
          我们的工具会自动检测这些错误并在输出区域给出具体的错误提示和位置信息，帮助您快速修复。
          特别需要注意的是，JSON标准严格要求使用双引号而非单引号，这是许多初学者容易犯的错误。
        </p>

        <h3>JSON的应用场景</h3>
        <p>
          JSON格式广泛应用于Web开发中，包括前后端API通信、RESTful接口数据传输、NoSQL数据库存储（如MongoDB）、
          前端框架（React、Vue）的状态管理和组件配置、以及各类云服务的配置文件。掌握JSON格式化技巧
          对每个开发者来说都是必备的基础能力。无论是日常开发调试、API文档编写还是系统配置管理，
          一个高效的JSON格式化工具都能显著提升工作效率。
        </p>

        <h3>为什么选择在线JSON格式化工具？</h3>
        <p>
          相比安装本地插件或IDE内置功能，在线工具的优势在于：无需安装任何软件、跨平台使用、
          随时随地可用、支持分享和协作。您只需要一个浏览器和网络连接，就可以在任何设备上使用。
          我们的工具完全在浏览器中运行，不会上传您的数据到服务器，充分保护您的数据隐私和安全。
        </p>
      </SeoText>
    </ToolLayout>
  );
}
