"use client";

import { useState, useEffect } from "react";

interface IpInfo {
  ip: string;
  userAgent: string;
  language: string;
  platform: string;
  cookiesEnabled: boolean;
  screenSize: string;
  online: boolean;
}

export function IpLookupClient() {
  const [info, setInfo] = useState<IpInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIp() {
      setLoading(true);
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        setInfo({
          ip: data.ip,
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          cookiesEnabled: navigator.cookieEnabled,
          screenSize: `${window.screen.width}x${window.screen.height}`,
          online: navigator.onLine,
        });
      } catch {
        setInfo({
          ip: "无法获取（请检查网络）",
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          cookiesEnabled: navigator.cookieEnabled,
          screenSize: `${window.screen.width}x${window.screen.height}`,
          online: navigator.onLine,
        });
      }
      setLoading(false);
    }
    fetchIp();
  }, []);

  if (loading) {
    return <div className="flex justify-center py-12"><div className="animate-spin text-4xl">⏳</div></div>;
  }

  if (!info) return null;

  const rows: [string, string][] = [
    ["公网IP地址", info.ip],
    ["浏览器UA", info.userAgent],
    ["语言", info.language],
    ["平台", info.platform],
    ["Cookie", info.cookiesEnabled ? "已启用" : "已禁用"],
    ["屏幕分辨率", info.screenSize],
    ["网络状态", info.online ? "🟢 在线" : "🔴 离线"],
  ];

  return (
    <div className="space-y-2">
      {rows.map(([label, val]) => (
        <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 bg-gray-50 border border-gray-200 rounded-xl">
          <span className="text-sm font-medium text-gray-700 min-w-[120px]">{label}</span>
          <span className="text-sm text-gray-900 break-all font-mono">{val}</span>
          {label === "公网IP地址" && val !== "无法获取（请检查网络）" && (
            <button onClick={() => navigator.clipboard.writeText(val)}
              className="text-blue-600 text-xs hover:underline sm:ml-auto">复制</button>
          )}
        </div>
      ))}
    </div>
  );
}
