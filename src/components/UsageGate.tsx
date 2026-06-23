"use client";

import { useEffect } from "react";
import { useUsageLimit } from "@/lib/useUsageLimit";
import Link from "next/link";

export function UsageGate({ children }: { children: React.ReactNode }) {
  const { used, remaining, limit, isLimited, showPaywall, setShowPaywall, increment, unlock } =
    useUsageLimit();

  // Track tool usage when children render
  useEffect(() => {
    increment();
  }, []);

  return (
    <div className="relative">
      {/* Usage badge */}
      <div className="flex items-center justify-end mb-4">
        <div className="flex items-center gap-2 text-xs">
          {isLimited ? (
            <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full font-medium border border-red-100">
              🔒 免费次数已用完
            </span>
          ) : (
            <>
              <span className="text-gray-400">
                免费剩余
              </span>
              <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-600 rounded-full font-bold border border-indigo-100">
                {remaining}/{limit} 次
              </span>
            </>
          )}
          <Link
            href="/pay"
            className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full font-medium text-xs hover:from-amber-500 hover:to-orange-600 transition-all shadow-sm"
          >
            💎 升级VIP
          </Link>
        </div>
      </div>

      {/* Tool content */}
      <div className={isLimited ? "pointer-events-none select-none opacity-40 blur-[2px]" : ""}>
        {children}
      </div>

      {/* Paywall overlay */}
      {isLimited && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-100 p-8 text-center max-w-sm mx-auto">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              免费次数已用完
            </h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              您今天的 {limit} 次免费使用已用完。<br />
              开通VIP即可无限使用全部15个工具！
            </p>

            <div className="space-y-3">
              <Link
                href="/pay"
                className="block w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-bold text-sm hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-200"
              >
                💎 开通VIP · 9.9元/月无限使用
              </Link>
              <button
                onClick={() => setShowPaywall(false)}
                className="block w-full py-2.5 text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                明天自动恢复免费次数
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                ✨ 已付费用户？
                <button onClick={unlock} className="text-indigo-500 hover:underline ml-1 font-medium">
                  点此解锁
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
