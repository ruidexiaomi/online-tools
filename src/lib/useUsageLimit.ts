"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "tool_usage_v2";
const FREE_LIMIT = 3;

interface UsageData {
  count: number;
  date: string;
  unlocked: boolean;
}

function today(): string {
  return new Date().toISOString().split("T")[0];
}

function readUsage(): UsageData {
  if (typeof window === "undefined") return { count: 0, date: today(), unlocked: false };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { count: 0, date: today(), unlocked: false };
    return JSON.parse(raw);
  } catch {
    return { count: 0, date: today(), unlocked: false };
  }
}

function writeUsage(data: UsageData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useUsageLimit() {
  const [data, setData] = useState<UsageData>({ count: 0, date: today(), unlocked: false });
  const [showPaywall, setShowPaywall] = useState(false);

  useEffect(() => {
    const d = readUsage();
    // Reset daily counter if new day
    if (d.date !== today() && !d.unlocked) {
      d.count = 0;
      d.date = today();
      writeUsage(d);
    }
    setData(d);
  }, []);

  const increment = useCallback(() => {
    setData((prev) => {
      const newData = { ...prev };
      if (newData.date !== today()) {
        newData.date = today();
        newData.count = 1;
      } else {
        newData.count += 1;
      }
      writeUsage(newData);
      // Check if paywall needed
      if (!newData.unlocked && newData.count > FREE_LIMIT) {
        setShowPaywall(true);
      }
      return newData;
    });
  }, []);

  const unlock = useCallback(() => {
    const newData = { ...data, unlocked: true };
    writeUsage(newData);
    setData(newData);
    setShowPaywall(false);
  }, [data]);

  // Count remaining free uses
  const remaining = data.unlocked ? Infinity : Math.max(0, FREE_LIMIT - data.count);
  const isLimited = !data.unlocked && data.count >= FREE_LIMIT;

  return {
    used: data.count,
    remaining,
    limit: FREE_LIMIT,
    isLimited,
    unlocked: data.unlocked,
    showPaywall,
    setShowPaywall,
    increment,
    unlock,
  };
}
