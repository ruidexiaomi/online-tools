"use client";

import { useState, useEffect } from "react";

export function TimestampClient() {
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));
  const [tsInput, setTsInput] = useState("");
  const [dateResult, setDateResult] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [tsResult, setTsResult] = useState("");

  useEffect(() => {
    const i = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(i);
  }, []);

  const tsToDate = () => {
    const ts = parseInt(tsInput);
    if (isNaN(ts)) { setDateResult("无效时间戳"); return; }
    const ms = ts > 9999999999 ? ts : ts * 1000;
    const d = new Date(ms);
    setDateResult(d.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" }));
  };

  const dateToTs = () => {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) { setTsResult("无效日期"); return; }
    setTsResult(String(Math.floor(d.getTime() / 1000)));
  };

  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
        <span className="text-sm text-blue-600">当前时间戳: </span>
        <span className="font-mono text-lg font-bold text-blue-800">{now}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">时间戳 → 日期</label>
          <input value={tsInput} onChange={(e) => setTsInput(e.target.value)}
            placeholder="输入时间戳，如 1700000000"
            className="w-full p-3 border border-gray-200 rounded-xl font-mono text-sm focus:ring-2 focus:ring-blue-500" />
          <button onClick={tsToDate} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">转换</button>
          {dateResult && <div className="p-3 bg-gray-50 rounded-xl font-mono text-sm">{dateResult}</div>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">日期 → 时间戳</label>
          <input type="datetime-local" value={dateInput} onChange={(e) => setDateInput(e.target.value)}
            className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500" />
          <button onClick={dateToTs} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">转换</button>
          {tsResult && <div className="p-3 bg-gray-50 rounded-xl font-mono text-sm">{tsResult}</div>}
        </div>
      </div>
    </div>
  );
}
