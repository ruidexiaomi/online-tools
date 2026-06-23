import type { Metadata } from "next";
import { PayPageClient } from "./PayPageClient";

export const metadata: Metadata = {
  title: "VIP订阅 | 小工助手",
  description: "开通VIP会员，享受全部工具和AI服务无限使用。9.9元/月，微信/支付宝扫码支付。",
};

export const dynamic = "force-static";

export default function PayPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
        💎 开通 VIP 会员
      </h1>
      <p className="text-center text-gray-600 mb-10">
        扫码支付，即刻开通，全站服务无限使用
      </p>

      <div className="space-y-8">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border-2 border-blue-200 rounded-2xl p-6 text-center bg-blue-50/50">
            <div className="text-2xl font-bold text-blue-600">9.9元</div>
            <div className="text-sm text-gray-600 mt-1">月度VIP</div>
            <ul className="text-xs text-gray-500 mt-3 space-y-1">
              <li>✅ 全部工具无限使用</li>
              <li>✅ AI写作无限次</li>
              <li>✅ AI翻译无限次</li>
              <li>✅ 优先响应</li>
            </ul>
          </div>
          <div className="border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-purple-200 transition-colors">
            <div className="text-2xl font-bold text-purple-600">99元</div>
            <div className="text-sm text-gray-600 mt-1">年度VIP</div>
            <ul className="text-xs text-gray-500 mt-3 space-y-1">
              <li>✅ 月度VIP全部权益</li>
              <li>✅ 新功能优先体验</li>
              <li>✅ 相当于 8.25元/月</li>
              <li>✅ 省 19.8 元</li>
            </ul>
          </div>
        </div>

        {/* Payment QR Codes */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            📱 选择支付方式
          </h2>
          <PayPageClient />
        </div>

        {/* Instructions */}
        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600 space-y-3">
          <h3 className="font-semibold text-gray-900">📋 支付流程</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>选择 VIP月卡 或 VIP年卡</li>
            <li>使用微信或支付宝扫码支付</li>
            <li><strong>重要：</strong>转账时备注「VIP + 你的昵称」</li>
            <li>添加微信机器人发送支付截图</li>
            <li>1-5分钟内开通VIP</li>
          </ol>
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 font-medium">⚠️ 支付完成后请截图发送给微信机器人</p>
            <p className="text-yellow-700 text-xs mt-1">发送 /vip 给机器人获取更多帮助</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">❓ 常见问题</h3>
          <div>
            <h4 className="font-medium text-gray-800">支付后多久开通？</h4>
            <p className="text-sm text-gray-600">发送截图后1-5分钟内开通，通常即时处理。</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">支持退款吗？</h4>
            <p className="text-sm text-gray-600">VIP开通后不支持退款，建议先免费体验再购买。</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800">怎么联系客服？</h4>
            <p className="text-sm text-gray-600">添加微信机器人，发送「客服」即可获得人工帮助。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
