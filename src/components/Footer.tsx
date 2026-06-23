import Link from "next/link";
import { SITE_NAME } from "@/lib/utils";

const footerLinks = {
  工具分类: [
    { label: "开发工具", href: "/#developer" },
    { label: "文本工具", href: "/#text" },
    { label: "图片工具", href: "/#image" },
    { label: "转换工具", href: "/#converter" },
    { label: "生成工具", href: "/#generator" },
  ],
  热门工具: [
    { label: "JSON格式化", href: "/tools/json-formatter/" },
    { label: "二维码生成", href: "/tools/qrcode/" },
    { label: "MD5加密", href: "/tools/md5/" },
    { label: "图片压缩", href: "/tools/image-compress/" },
    { label: "IP查询", href: "/tools/ip-lookup/" },
  ],
  关于我们: [
    { label: "网站介绍", href: "/about" },
    { label: "隐私政策", href: "/privacy" },
    { label: "VIP会员", href: "/pay" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                🔧
              </span>
              <span className="text-lg font-bold text-white">{SITE_NAME}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              免费在线工具集合，15+实用工具无需下载安装，浏览器中即可使用。
            </p>
            <Link
              href="/pay"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all"
            >
              💎 开通VIP
            </Link>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Powered by Next.js · Deployed on Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
