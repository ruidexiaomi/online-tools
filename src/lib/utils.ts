export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

const SITE_URL = "https://soogongju.com";

export function getSiteUrl(path: string = ""): string {
  return `${SITE_URL}${path}`;
}

export const SITE_NAME = "在线工具";
export const SITE_DESCRIPTION =
  "免费在线工具集合：JSON格式化、二维码生成、图片压缩、时间戳转换、Base64编码解码等15+实用工具，无需下载安装。";
