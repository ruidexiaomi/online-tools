import type { ReactNode } from "react";
import { AdPlaceholder } from "./AdPlaceholder";

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
      <nav className="text-sm text-gray-500 mb-6" aria-label="面包屑导航">
        <a href="/" className="hover:text-blue-600 transition-colors">
          首页
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{toolName}</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-3">{toolName}</h1>
      <p className="text-gray-600 text-lg mb-6">{toolDescription}</p>

      {/* Ad Placeholder - Top Banner */}
      <AdPlaceholder slot="top-banner" format="horizontal" />

      {/* Tool Content */}
      <div className="my-8">{children}</div>

      {/* Ad Placeholder - Middle */}
    </div>
  );
}
