import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "在线工具 | 免费在线工具箱 - JSON格式化、二维码生成、图片压缩",
    template: "%s | 在线工具",
  },
  description:
    "免费在线工具集合：JSON格式化、二维码生成、图片压缩、时间戳转换、Base64编码解码等15+实用工具，无需下载安装，在浏览器中即可使用。",
  keywords: [
    "在线工具",
    "免费工具",
    "JSON格式化",
    "二维码生成",
    "图片压缩",
    "Base64编码",
    "时间戳转换",
  ],
  metadataBase: new URL("https://你的域名.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "在线工具",
    title: "在线工具 | 免费在线工具箱",
    description:
      "免费在线工具集合：JSON格式化、二维码生成、图片压缩、时间戳转换等15+实用工具。",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
