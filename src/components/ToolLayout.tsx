import type { ReactNode } from "react";
import { UsageGate } from "./UsageGate";

interface ToolLayoutProps {
  toolName: string;
  toolDescription: string;
  children: ReactNode;
}

export function ToolLayout({
  toolName,
  toolDescription,
  children,
}: ToolLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="面包屑导航">
        <a href="/" className="hover:text-indigo-600 transition-colors">
          首页
        </a>
        <span>/</span>
        <span className="text-gray-600 font-medium">{toolName}</span>
      </nav>

      {/* Title */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          {toolName}
        </h1>
        <p className="text-gray-400 text-base">{toolDescription}</p>
      </div>

      {/* Tool Content with Usage Gate */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <UsageGate>{children}</UsageGate>
      </div>
    </div>
  );
}
