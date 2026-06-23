import Link from "next/link";
import { categories } from "@/lib/tools";
import { SITE_NAME } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <span className="text-2xl">🔧</span>
            <span>{SITE_NAME}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.key}
                href={`/#${cat.key}`}
                className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <span className="mr-1">{cat.icon}</span>
                {cat.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              关于
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
