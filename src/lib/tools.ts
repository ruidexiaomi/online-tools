import type { Tool, ToolCategory, Category } from "@/types";

export const categories: Category[] = [
  { key: "developer", label: "开发工具", icon: "💻" },
  { key: "text", label: "文本工具", icon: "📝" },
  { key: "image", label: "图片工具", icon: "🖼️" },
  { key: "converter", label: "转换工具", icon: "🔄" },
  { key: "generator", label: "生成工具", icon: "⚡" },
];

export const tools: Tool[] = [
  {
    slug: "json-formatter",
    title: "JSON格式化工具",
    description:
      "在线JSON格式化、验证、压缩工具，支持一键美化JSON数据，帮助开发者快速解析和调试JSON。支持语法高亮和错误定位。",
    keywords: ["json格式化", "json在线解析", "json校验", "json美化", "json压缩"],
    category: "developer",
    icon: "{ }",
    color: "#f59e0b",
  },
  {
    slug: "url-encoder",
    title: "URL编码解码工具",
    description:
      "在线URL编码解码工具，支持URL encode和decode，方便处理网址中的中文和特殊字符。",
    keywords: ["url编码", "url解码", "urlencode", "urldecode", "网址编码"],
    category: "developer",
    icon: "🔗",
    color: "#3b82f6",
  },
  {
    slug: "base64",
    title: "Base64编码解码工具",
    description:
      "在线Base64编码解码工具，支持字符串与Base64格式互相转换，支持中文和特殊字符。",
    keywords: ["base64编码", "base64解码", "base64在线", "图片转base64"],
    category: "developer",
    icon: "64",
    color: "#8b5cf6",
  },
  {
    slug: "md5",
    title: "MD5在线加密工具",
    description:
      "在线MD5哈希加密工具，支持字符串和文件的MD5值计算，用于数据完整性校验。",
    keywords: ["md5加密", "md5在线", "md5生成", "哈希加密", "md5解密"],
    category: "developer",
    icon: "🔐",
    color: "#ef4444",
  },
  {
    slug: "timestamp",
    title: "时间戳转换工具",
    description:
      "在线Unix时间戳转换工具，支持时间戳与标准日期时间互相转换，支持秒/毫秒级时间戳。",
    keywords: ["时间戳转换", "unix时间戳", "时间戳在线", "日期转时间戳"],
    category: "developer",
    icon: "🕐",
    color: "#10b981",
  },
  {
    slug: "qrcode",
    title: "二维码生成器",
    description:
      "免费在线二维码生成工具，支持文字、网址、名片信息生成二维码图片，可自定义大小和颜色，支持下载。",
    keywords: ["二维码生成", "在线二维码", "二维码制作", "微信二维码"],
    category: "generator",
    icon: "📱",
    color: "#6366f1",
  },
  {
    slug: "color-converter",
    title: "颜色代码转换工具",
    description:
      "在线颜色转换工具，支持HEX、RGB、HSL颜色格式互转，提供颜色选择器和实时预览。",
    keywords: ["颜色转换", "hex转rgb", "rgb转hex", "颜色代码", "调色板"],
    category: "converter",
    icon: "🎨",
    color: "#ec4899",
  },
  {
    slug: "word-counter",
    title: "字数统计器",
    description:
      "在线字数统计工具，精确统计中文字数、英文字母、数字和标点符号，支持实时统计和详细分析。",
    keywords: ["字数统计", "在线数字数", "字数计算器", "文章字数统计"],
    category: "text",
    icon: "📊",
    color: "#14b8a6",
  },
  {
    slug: "image-compress",
    title: "图片压缩工具",
    description:
      "在线图片压缩工具，支持PNG、JPEG、WebP格式压缩，保持图片质量的同时大幅减小文件体积。完全在浏览器本地处理，保护隐私。",
    keywords: [
      "在线压缩图片",
      "图片缩小",
      "图片体积压缩",
      "jpg压缩",
      "png压缩",
    ],
    category: "image",
    icon: "🗜️",
    color: "#f97316",
  },
  {
    slug: "text-diff",
    title: "文本差异对比工具",
    description:
      "在线文本对比工具，快速找出两段文本的不同之处，高亮显示差异，支持逐行和逐字对比。",
    keywords: ["文本对比", "文本差异比较", "diff工具", "代码对比"],
    category: "text",
    icon: "📋",
    color: "#a855f7",
  },
  {
    slug: "uuid-generator",
    title: "UUID生成器",
    description:
      "在线UUID/GUID生成工具，支持UUID v1和v4版本，批量生成，用于创建唯一标识符。",
    keywords: ["uuid生成", "guid生成", "唯一标识符", "在线uuid"],
    category: "generator",
    icon: "🆔",
    color: "#06b6d4",
  },
  {
    slug: "regex-tester",
    title: "正则表达式测试工具",
    description:
      "在线正则表达式测试工具，实时匹配和替换，支持常用正则表达式参考，帮助开发者快速调试正则。",
    keywords: ["正则表达式在线", "正则测试", "regex工具", "正则匹配"],
    category: "developer",
    icon: ".*",
    color: "#84cc16",
  },
  {
    slug: "ip-lookup",
    title: "IP地址查询工具",
    description:
      "免费在线IP地址查询工具，查看当前IP地址、归属地和浏览器信息。支持IPv4和IPv6查询。",
    keywords: ["ip查询", "我的ip地址", "ip归属地", "公网ip查询"],
    category: "developer",
    icon: "🌐",
    color: "#06b6d4",
  },
  {
    slug: "markdown-to-html",
    title: "Markdown转HTML工具",
    description:
      "在线Markdown编辑器，实时预览HTML效果，支持标准Markdown语法和代码高亮。",
    keywords: ["markdown转html", "md在线转换", "markdown编辑器", "md预览"],
    category: "converter",
    icon: "📄",
    color: "#64748b",
  },
  {
    slug: "unit-converter",
    title: "单位换算器",
    description:
      "在线单位换算工具，支持长度、重量、温度、面积、体积、速度等多种单位的快速转换。",
    keywords: ["单位换算", "长度换算", "重量换算", "温度换算", "在线换算器"],
    category: "converter",
    icon: "📐",
    color: "#0ea5e9",
  },
];

export function getToolsByCategory(category: ToolCategory): Tool[] {
  return tools.filter((t) => t.category === category);
}
