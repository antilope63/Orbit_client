"use client";

import { NumberTicker } from "@/components/ui/number-ticker";

interface StatCardProps {
  value: number; 
  title: string;
  description: string;
  isPercentage?: boolean; 
  color?: string; 
}

export default function StatCard({
  value,
  title,
  description,
  isPercentage = false,
  color = "#7A0C0C",
}: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center mb-8 md:mb-0">
      <p className={`text-[68px] font-bold flex items-baseline`} style={{ color }}>
        <NumberTicker value={value} />
        {isPercentage && <span className="ml-1">{'%'}</span>}
      </p>
      <h3 className="font-bold text-black text-[24px]">{title}</h3>
      <p className="text-[#6A6A73] text-[20px] font-medium max-w-xs">{description}</p>
    </div>
  );
}
