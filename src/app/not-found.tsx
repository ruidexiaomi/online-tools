import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "页面未找到 - 404",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-7xl font-extrabold text-gray-200 mb-4">404</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">页面未找到</h2>
      <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
        抱歉，您访问的页面不存在。可能已被移动、删除，或者您输入的网址有误。
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-600 hover:to-purple-700 transition-all shadow-md shadow-indigo-200"
        >
          返回首页
        </Link>
        <Link
          href="/tools/json-formatter/"
          className="px-6 py-2.5 bg-white text-gray-700 rounded-xl font-medium border border-gray-200 hover:border-indigo-200 hover:text-indigo-600 transition-all shadow-sm"
        >
          热门工具
        </Link>
      </div>
    </div>
  );
}
