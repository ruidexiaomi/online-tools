import type { ReactNode } from "react";

interface SeoTextProps {
  children: ReactNode;
  className?: string;
}

export function SeoText({ children, className }: SeoTextProps) {
  return (
    <div
      className={`prose prose-gray max-w-none mt-12 pt-8 border-t border-gray-200 ${className || ""}`}
    >
      {children}
    </div>
  );
}
