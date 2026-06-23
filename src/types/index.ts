export interface Tool {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: ToolCategory;
  icon: string;
  color: string;
}

export type ToolCategory =
  | "developer"
  | "text"
  | "image"
  | "converter"
  | "generator";

export interface Category {
  key: ToolCategory;
  label: string;
  icon: string;
}
