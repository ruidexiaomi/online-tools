"use client";

import { useState } from "react";

export function PayPageClient() {
  const [tab, setTab] = useState<"wechat" | "alipay">("wechat");

  return (
    <div>
      {/* Tab Switcher */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setTab("wechat")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
            tab === "wechat"
              ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-200"
              : "bg-white text-gray-500 hover:text-green-600 border border-gray-200 hover:border-green-200"
          }`}
        >
          💚 微信支付
        </button>
        <button
          onClick={() => setTab("alipay")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
            tab === "alipay"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200"
              : "bg-white text-gray-500 hover:text-blue-600 border border-gray-200 hover:border-blue-200"
          }`}
        >
          💙 支付宝
        </button>
      </div>

      {/* QR Code Display */}
      <div className="flex justify-center">
        {tab === "wechat" ? (
          <div className="text-center">
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 inline-block">
              <img
                src="/pay/wechat-pay.jpg"
                alt="微信赞赏码"
                className="w-64 h-auto mx-auto rounded-xl"
              />
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-sm font-medium text-gray-700">
                📱 微信扫码支付
              </p>
              <p className="text-xs text-gray-400">
                打开微信 → 扫一扫 → 赞赏 → 输入金额 → 完成
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 inline-block">
              <img
                src="/pay/alipay.jpg"
                alt="支付宝收款码"
                className="w-64 h-auto mx-auto rounded-xl"
              />
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-sm font-medium text-gray-700">
                💳 支付宝扫码支付
              </p>
              <p className="text-xs text-gray-400">
                打开支付宝 → 扫一扫 → 转账 → 输入金额 → 完成
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Payment instructions */}
      <div className="mt-8 max-w-md mx-auto">
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-amber-800">
          <p className="font-medium mb-1">⚠️ 支付注意事项</p>
          <ul className="list-disc list-inside space-y-1 text-xs text-amber-700">
            <li>转账时请备注「VIP + 你的昵称」</li>
            <li>支付完成后请联系客服开通</li>
            <li>确认后 5 分钟内开通会员</li>
            <li>如遇问题请联系微信客服</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
