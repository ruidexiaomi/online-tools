"use client";

interface AdPlaceholderProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export function AdPlaceholder({
  slot,
  format = "auto",
  className,
}: AdPlaceholderProps) {
  return (
    <div
      className={`ad-container my-6 overflow-hidden rounded-xl border border-dashed border-gray-200 bg-gray-50/50 ${className || ""}`}
    >
      <div className="flex items-center justify-center min-h-[90px] text-gray-400 text-sm">
        {/* AdSense adsbygoogle placeholder — will be replaced when AdSense is approved */}
        <span className="text-gray-300 text-xs">广告位 (AdSense)</span>
      </div>
    </div>
  );
}
