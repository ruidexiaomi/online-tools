import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "在线工具网站的隐私政策。了解我们如何保护您的数据以及我们不收集哪些信息。",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">隐私政策</h1>
      <div className="prose prose-gray max-w-none space-y-6">
        <p><strong>最后更新日期：2026年6月23日</strong></p>

        <h2>概述</h2>
        <p>
          我们非常重视您的隐私。本隐私政策旨在说明我们收集哪些信息、如何使用和保护这些信息。
          使用本网站即表示您同意本隐私政策中描述的做法。
        </p>

        <h2>我们不收集的信息</h2>
        <p>
          <strong>我们不会收集或存储您的工具使用数据。</strong>所有工具（包括JSON格式化、
          图片压缩、文本对比等）的处理均在您的浏览器本地完成。您的输入数据、输出结果
          和文件内容不会上传到任何服务器，也不会被我们访问或存储。
        </p>

        <h2>我们收集的信息</h2>
        <h3>1. 自动收集的信息</h3>
        <p>
          当您访问我们的网站时，我们可能通过第三方服务（如Google Analytics）自动收集以下信息：
        </p>
        <ul>
          <li>IP地址（匿名化处理）</li>
          <li>浏览器类型和版本</li>
          <li>访问时间和日期</li>
          <li>浏览的页面</li>
          <li>来源网站（Referrer）</li>
        </ul>
        <p>这些数据仅用于统计分析和改善网站体验，不包含个人身份信息。</p>

        <h3>2. Cookie和追踪技术</h3>
        <p>
          我们使用Cookie和类似技术来改善您的浏览体验。Google AdSense等第三方广告商
          可能使用Cookie来展示个性化广告。您可以通过浏览器设置禁用Cookie。
        </p>

        <h3>3. 广告</h3>
        <p>
          本网站使用Google AdSense展示广告。Google可能使用Cookie和网络信标来收集
          信息以展示相关广告。您可以访问
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
            Google广告设置
          </a>来管理广告偏好。
        </p>

        <h2>数据安全</h2>
        <p>
          我们采用行业标准的安全措施保护通过本网站收集的有限信息。但由于互联网传输
          的固有风险，我们不能保证信息的绝对安全。
        </p>

        <h2>第三方链接</h2>
        <p>
          本网站可能包含指向第三方网站的链接。我们对第三方网站的隐私做法不承担责任，
          建议您在访问时查看其隐私政策。
        </p>

        <h2>隐私政策变更</h2>
        <p>
          我们可能会不时更新本隐私政策。所有更改将在本页面上发布，重大更改会通过
          网站通知告知用户。
        </p>

        <h2>联系我们</h2>
        <p>
          如果您对本隐私政策有任何疑问，请通过网站上的联系方式与我们取得联系。
        </p>
      </div>
    </div>
  );
}
