import Link from "next/link";
import { SITE_NAME } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {SITE_NAME}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              免费在线工具集合，提供JSON格式化、二维码生成、图片压缩等15+实用工具。
              所有工具无需下载安装，在浏览器中即可使用。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
              快速链接
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  首页
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  关于我们
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
              热门工具
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tools/json-formatter/"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  JSON格式化
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/qrcode/"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  二维码生成
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/image-compress/"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  图片压缩
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/ip-lookup/"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  IP查询
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE_NAME}. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
}
