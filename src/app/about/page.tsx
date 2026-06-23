import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解在线工具网站的使命和团队——致力于提供免费、好用、安全的在线工具集合。",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">关于我们</h1>

      <div className="prose prose-gray max-w-none space-y-6">
        <p>
          欢迎来到<strong>在线工具</strong>——一个免费、干净、高效的在线工具平台。
        </p>

        <h2>我们的使命</h2>
        <p>
          我们的使命很简单：<strong>让每个人都能轻松获取高质量的在线工具</strong>。
          不需要下载安装复杂的软件，不需要注册账号，打开浏览器就能使用。
          无论是开发者、设计师、学生还是普通用户，都能在这里找到需要的工具。
        </p>

        <h2>我们提供的工具</h2>
        <p>
          目前我们提供15+个实用在线工具，涵盖了：
        </p>
        <ul>
          <li><strong>开发工具</strong>：JSON格式化、Base64编解码、正则表达式测试、URL编码解码等</li>
          <li><strong>文本工具</strong>：字数统计、文本差异对比等</li>
          <li><strong>图片工具</strong>：在线图片压缩等</li>
          <li><strong>转换工具</strong>：颜色转换、Markdown转HTML、单位换算等</li>
          <li><strong>生成工具</strong>：二维码生成、UUID生成等</li>
        </ul>

        <h2>隐私与安全</h2>
        <p>
          我们极度重视用户隐私。所有工具的核心计算均在您的浏览器本地完成，
          您的数据<strong>不会上传到服务器</strong>。我们没有服务器端的数据存储，
          您的输入数据只有您自己能访问。详情请查看我们的
          <a href="/privacy/">隐私政策</a>。
        </p>

        <h2>免费承诺</h2>
        <p>
          我们的核心工具将<strong>永远免费</strong>。网站通过展示广告来维持运营成本。
          这确保我们可以持续提供高质量的服务，同时不影响用户的免费使用体验。
        </p>

        <h2>联系我们</h2>
        <p>
          如果您有任何建议、反馈或合作意向，欢迎联系我们。
          我们非常重视每一位用户的意见，您的反馈是我们持续改进的动力。
        </p>
      </div>
    </div>
  );
}
