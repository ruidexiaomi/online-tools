import Link from "next/link";
import type { Tool } from "@/types";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}/`}
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 hover:-translate-y-0.5 transition-all duration-300 p-6 relative overflow-hidden"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/50 transition-all duration-300" />

      <div className="relative">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shadow-sm group-hover:shadow-md transition-all duration-300"
            style={{
              backgroundColor: `${tool.color}18`,
              color: tool.color,
            }}
          >
            {tool.icon}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 mb-1.5">
              {tool.title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed group-hover:text-gray-500 transition-colors duration-200">
              {tool.description}
            </p>
          </div>
        </div>

        {/* Arrow indicator */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-50 group-hover:bg-indigo-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <svg className="w-3 h-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
