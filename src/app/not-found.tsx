import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "页面未找到 - 404",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4">
      <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-xl text-gray-700 mb-2">页面未找到</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        抱歉，您访问的页面不存在。可能已被移动、删除，或者您输入的网址有误。
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          返回首页
        </Link>
        <Link
          href="/tools/json-formatter/"
          className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
        >
          热门工具
        </Link>
      </div>
    </div>
  );
}
