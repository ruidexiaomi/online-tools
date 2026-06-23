import Link from "next/link";
import type { Tool } from "@/types";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}/`}
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 p-6"
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold"
          style={{
            backgroundColor: `${tool.color}15`,
            color: tool.color,
          }}
        >
          {tool.icon}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
            {tool.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {tool.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
