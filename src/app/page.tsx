import { tools, categories, getToolsByCategory } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import { SITE_DESCRIPTION } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-transparent to-transparent" />

        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur rounded-full border border-indigo-100 text-sm text-indigo-600 mb-8 shadow-sm">
            ✨ 15+ 免费在线工具 · 无需下载安装
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            免费在线
            <span className="gradient-text"> 工具集合 </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-500 font-medium">
              让工作更高效
            </span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            {SITE_DESCRIPTION}
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => (
              <a
                key={cat.key}
                href={`#${cat.key}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md shadow-sm transition-all duration-200"
              >
                {cat.icon} {cat.label}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-100/60">
            {[
              { num: "15+", label: "在线工具" },
              { num: "100%", label: "完全免费" },
              { num: "无广告", label: "清爽体验" },
              { num: "即开即用", label: "无需注册" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.num}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {categories.map((cat, catIdx) => {
          const catTools = getToolsByCategory(cat.key);
          if (catTools.length === 0) return null;
          return (
            <section
              key={cat.key}
              id={cat.key}
              className="mb-12 scroll-mt-24"
              style={{ animationDelay: `${catIdx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">
                  {cat.label}
                </h2>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                共 {catTools.length} 个工具
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
