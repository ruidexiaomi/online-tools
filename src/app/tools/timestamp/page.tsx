import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { TimestampClient } from "./TimestampClient";

export const metadata: Metadata = {
  title: "时间戳转换工具 - Unix时间戳在线转换",
  description:
    "在线Unix时间戳转换工具，支持时间戳与标准日期时间互相转换。支持秒级和毫秒级时间戳。",
  alternates: { canonical: "/tools/timestamp/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "时间戳转换工具",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web Browser",
  description: "在线Unix时间戳转换工具。",
  offers: { "@type": "Offer", price: "0" },
};

export default function TimestampPage() {
  return (
    <ToolLayout
      toolName="时间戳转换工具"
      toolDescription="Unix时间戳与标准日期时间快速互转，支持秒和毫秒级精度。"
    >
      <JsonLd data={jsonLd} />
      <TimestampClient />
      <SeoText>
        <h2>Unix时间戳完全指南</h2>
        <p>
          时间戳（Timestamp）是指从1970年1月1日00:00:00 UTC到某个时间点的总秒数（或毫秒数）。
          这个起始时间被称为Unix纪元（Unix Epoch）。时间戳是编程中处理时间的最基本方式之一。
        </p>
        <h3>为什么要使用时间戳？</h3>
        <p>
          时间戳以整数形式存储，避免了时区转换和日期格式不统一的问题。在数据库中存储时间戳比
          存储日期字符串更高效，在API中也更方便传输。几乎所有编程语言都支持时间戳与日期的互相转换。
        </p>
        <h3>秒级与毫秒级时间戳的区别</h3>
        <p>
          秒级时间戳是10位数字（如1700000000），毫秒级是13位数字（如1700000000000）。
          JavaScript的Date.now()返回毫秒级时间戳。使用本工具时请根据实际需要选择相应的精度。
        </p>
      </SeoText>
    </ToolLayout>
  );
}
