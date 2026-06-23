"use client";

import { useState, useCallback } from "react";

// Simple MD5 implementation for browser (RFC 1321)
function md5(str: string): string {
  function rotateLeft(lValue: number, iShiftBits: number): number {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }
  function addUnsigned(lX: number, lY: number): number {
    const lX8 = lX & 0x80000000;
    const lY8 = lY & 0x80000000;
    const lX4 = lX & 0x40000000;
    const lY4 = lY & 0x40000000;
    const lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
    return (lX4 & lY4) | (lResult ^ ((lX8 & lY8) | (~(lX4 ^ lY4) & (lX8 ^ lY8))));
  }
  function f(q: number, a: number, b: number, x: number, s: number, t: number): number {
    return addUnsigned(rotateLeft(addUnsigned(addUnsigned(a, q), addUnsigned(x, t)), s), b);
  }
  function ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return f((b & c) | (~b & d), a, b, x, s, t);
  }
  function gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return f((b & d) | (c & ~d), a, b, x, s, t);
  }
  function hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return f(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return f(c ^ (b | ~d), a, b, x, s, t);
  }

  const utf8Encode = (s: string): number[] => {
    const bytes: number[] = [];
    for (let i = 0; i < s.length; i++) {
      let c = s.charCodeAt(i);
      if (c < 0x80) bytes.push(c);
      else if (c < 0x800) { bytes.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f)); }
      else if (c < 0xd800 || c >= 0xe000) { bytes.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f)); }
      else { i++; c = 0x10000 + (((c & 0x3ff) << 10) | (s.charCodeAt(i) & 0x3ff)); bytes.push(0xf0 | (c >> 18), 0x80 | ((c >> 12) & 0x3f), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f)); }
    }
    return bytes;
  };

  const bytes = utf8Encode(str);
  const bitLen = bytes.length * 8;
  bytes.push(0x80);
  while (bytes.length % 64 !== 56) bytes.push(0);
  for (let i = 0; i < 8; i++) bytes.push((bitLen >>> (i * 8)) & 0xff);

  let a = 0x67452301, b = 0xefcdab89, c = 0x98badcfe, d = 0x10325476;

  for (let i = 0; i < bytes.length; i += 64) {
    const x: number[] = [];
    for (let j = 0; j < 16; j++) {
      x[j] = bytes[i + j * 4] | (bytes[i + j * 4 + 1] << 8) | (bytes[i + j * 4 + 2] << 16) | (bytes[i + j * 4 + 3] << 24);
    }
    let aa = a, bb = b, cc = c, dd = d;
    a = ff(a, b, c, d, x[0], 7, 0xd76aa478); d = ff(d, a, b, c, x[1], 12, 0xe8c7b756);
    c = ff(c, d, a, b, x[2], 17, 0x242070db); b = ff(b, c, d, a, x[3], 22, 0xc1bdceee);
    a = ff(a, b, c, d, x[4], 7, 0xf57c0faf); d = ff(d, a, b, c, x[5], 12, 0x4787c62a);
    c = ff(c, d, a, b, x[6], 17, 0xa8304613); b = ff(b, c, d, a, x[7], 22, 0xfd469501);
    a = ff(a, b, c, d, x[8], 7, 0x698098d8); d = ff(d, a, b, c, x[9], 12, 0x8b44f7af);
    c = ff(c, d, a, b, x[10], 17, 0xffff5bb1); b = ff(b, c, d, a, x[11], 22, 0x895cd7be);
    a = ff(a, b, c, d, x[12], 7, 0x6b901122); d = ff(d, a, b, c, x[13], 12, 0xfd987193);
    c = ff(c, d, a, b, x[14], 17, 0xa679438e); b = ff(b, c, d, a, x[15], 22, 0x49b40821);
    a = gg(a, b, c, d, x[1], 5, 0xf61e2562); d = gg(d, a, b, c, x[6], 9, 0xc040b340);
    c = gg(c, d, a, b, x[11], 14, 0x265e5a51); b = gg(b, c, d, a, x[0], 20, 0xe9b6c7aa);
    a = gg(a, b, c, d, x[5], 5, 0xd62f105d); d = gg(d, a, b, c, x[10], 9, 0x2441453);
    c = gg(c, d, a, b, x[15], 14, 0xd8a1e681); b = gg(b, c, d, a, x[4], 20, 0xe7d3fbc8);
    a = gg(a, b, c, d, x[9], 5, 0x21e1cde6); d = gg(d, a, b, c, x[14], 9, 0xc33707d6);
    c = gg(c, d, a, b, x[3], 14, 0xf4d50d87); b = gg(b, c, d, a, x[8], 20, 0x455a14ed);
    a = gg(a, b, c, d, x[13], 5, 0xa9e3e905); d = gg(d, a, b, c, x[2], 9, 0xfcefa3f8);
    c = gg(c, d, a, b, x[7], 14, 0x676f02d9); b = gg(b, c, d, a, x[12], 20, 0x8d2a4c8a);
    a = hh(a, b, c, d, x[5], 4, 0xfffa3942); d = hh(d, a, b, c, x[8], 11, 0x8771f681);
    c = hh(c, d, a, b, x[11], 16, 0x6d9d6122); b = hh(b, c, d, a, x[14], 23, 0xfde5380c);
    a = hh(a, b, c, d, x[1], 4, 0xa4beea44); d = hh(d, a, b, c, x[4], 11, 0x4bdecfa9);
    c = hh(c, d, a, b, x[7], 16, 0xf6bb4b60); b = hh(b, c, d, a, x[10], 23, 0xbebfbc70);
    a = hh(a, b, c, d, x[13], 4, 0x289b7ec6); d = hh(d, a, b, c, x[0], 11, 0xeaa127fa);
    c = hh(c, d, a, b, x[3], 16, 0xd4ef3085); b = hh(b, c, d, a, x[6], 23, 0x4881d05);
    a = hh(a, b, c, d, x[9], 4, 0xd9d4d039); d = hh(d, a, b, c, x[12], 11, 0xe6db99e5);
    c = hh(c, d, a, b, x[15], 16, 0x1fa27cf8); b = hh(b, c, d, a, x[2], 23, 0xc4ac5665);
    a = ii(a, b, c, d, x[0], 6, 0xf4292244); d = ii(d, a, b, c, x[7], 10, 0x432aff97);
    c = ii(c, d, a, b, x[14], 15, 0xab9423a7); b = ii(b, c, d, a, x[5], 21, 0xfc93a039);
    a = ii(a, b, c, d, x[12], 6, 0x655b59c3); d = ii(d, a, b, c, x[3], 10, 0x8f0ccc92);
    c = ii(c, d, a, b, x[10], 15, 0xffeff47d); b = ii(b, c, d, a, x[1], 21, 0x85845dd1);
    a = ii(a, b, c, d, x[8], 6, 0x6fa87e4f); d = ii(d, a, b, c, x[15], 10, 0xfe2ce6e0);
    c = ii(c, d, a, b, x[6], 15, 0xa3014314); b = ii(b, c, d, a, x[13], 21, 0x4e0811a1);
    a = ii(a, b, c, d, x[4], 6, 0xf7537e82); d = ii(d, a, b, c, x[11], 10, 0xbd3af235);
    c = ii(c, d, a, b, x[2], 15, 0x2ad7d2bb); b = ii(b, c, d, a, x[9], 21, 0xeb86d391);
    a = addUnsigned(a, aa); b = addUnsigned(b, bb); c = addUnsigned(c, cc); d = addUnsigned(d, dd);
  }

  const toHex = (n: number): string => {
    let s = "";
    for (let i = 0; i < 4; i++) s += ((n >>> (i * 8)) & 0xff).toString(16).padStart(2, "0");
    return s;
  };
  return toHex(a) + toHex(b) + toHex(c) + toHex(d);
}

// Simple SHA-256 using SubtleCrypto
async function sha256(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function Md5Client() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");
  const [algo, setAlgo] = useState<"md5" | "sha256">("md5");

  const generate = useCallback(async () => {
    if (!input.trim()) { setHash(""); return; }
    if (algo === "md5") {
      setHash(md5(input));
    } else {
      try {
        setHash(await sha256(input));
      } catch {
        setHash("SHA-256 计算失败（需要HTTPS环境）");
      }
    }
  }, [input, algo]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={() => { setAlgo("md5"); generate(); }} className={`px-4 py-2 rounded-lg text-sm font-medium ${algo === "md5" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>MD5</button>
        <button onClick={() => { setAlgo("sha256"); generate(); }} className={`px-4 py-2 rounded-lg text-sm font-medium ${algo === "sha256" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>SHA-256</button>
        <button onClick={() => { setInput(""); setHash(""); }} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">🗑️ 清空</button>
      </div>

      <div>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}
          onKeyUp={() => generate()}
          placeholder="输入要计算哈希值的文本（自动计算）..."
          className="w-full h-40 p-4 border border-gray-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500 resize-none" spellCheck={false} />
      </div>

      {hash && (
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
          <span className="text-sm text-gray-500">{algo === "md5" ? "MD5" : "SHA-256"}: </span>
          <span className="font-mono text-sm break-all">{hash}</span>
          <button onClick={() => navigator.clipboard.writeText(hash)}
            className="ml-2 text-blue-600 text-sm hover:underline">复制</button>
        </div>
      )}
    </div>
  );
}
