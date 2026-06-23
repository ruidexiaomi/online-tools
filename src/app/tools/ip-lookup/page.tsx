import type { Metadata } from "next";
import { ToolLayout } from "@/components/ToolLayout";
import { JsonLd } from "@/components/JsonLd";
import { SeoText } from "@/components/SeoText";
import { IpLookupClient } from "./IpLookupClient";

export const metadata: Metadata = {
  title: "IP地址查询工具 - 我的IP地址在线查询",
  description: "免费在线IP地址查询工具，查看您的公网IP地址、归属地和浏览器信息。支持IPv4和IPv6地址查询。",
  alternates: { canonical: "/tools/ip-lookup/" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "IP地址查询工具", applicationCategory: "UtilityApplication", operatingSystem: "Web Browser", description: "在线IP地址查询工具。", offers: { "@type": "Offer", price: "0" } };

export default function IpLookupPage() {
  return (
    <ToolLayout toolName="IP地址查询工具" toolDescription="立即查看您的当前IP地址和基本信息。">
      <JsonLd data={jsonLd} />
      <IpLookupClient />
      <SeoText>
        <h2>IP地址完全指南</h2>
        <p>IP地址（Internet Protocol Address）是分配给每个连接到互联网的设备的数字标签。它有两个主要功能：网络接口标识和位置寻址。IP地址分为IPv4（32位，如192.168.1.1）和IPv6（128位）两个版本。</p>
        <h3>公网IP vs 私网IP</h3>
        <p>公网IP是互联网上唯一的地址，由ISP分配。私网IP（如192.168.x.x、10.x.x.x）只能在局域网内使用。NAT技术允许多个设备通过一个公网IP共享互联网连接。</p>
        <h3>IP地址与隐私</h3>
        <p>通过IP地址可以粗略定位到城市级别的地理位置。因此，很多用户使用VPN或代理来隐藏真实IP地址，保护隐私。了解自己的IP地址信息有助于排查网络问题和评估在线隐私状况。</p>
      </SeoText>
    </ToolLayout>
  );
}
