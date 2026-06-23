import { tools, categories, getToolsByCategory } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/utils";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          免费在线工具集合
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {SITE_DESCRIPTION}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <a
              key={cat.key}
              href={`#${cat.key}`}
              className="inline-flex items-center gap-1 px-4 py-2 bg-white rounded-full text-sm text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 shadow-sm transition-all"
            >
              {cat.icon} {cat.label}
            </a>
          ))}
        </div>
      </section>

      {/* Tools by Category */}
      {categories.map((cat) => {
        const catTools = getToolsByCategory(cat.key);
        if (catTools.length === 0) return null;
        return (
          <section key={cat.key} id={cat.key} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>{cat.icon}</span>
              {cat.label}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
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
  );
}
