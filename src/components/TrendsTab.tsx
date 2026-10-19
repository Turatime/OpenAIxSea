import React, { useState } from 'react';
import { PetHeader } from './PetHeader';
import { MetricChart } from './MetricChart';
import { Button } from './ui/button';
import type { TabType } from './BottomNav';

interface TrendsTabProps {
  go: (tab: TabType) => void;
}

export const TrendsTab: React.FC<TrendsTabProps> = ({ go }) => {
  const [mode, setMode] = useState<'personal' | 'general'>('personal');

  return (
    <>
      <PetHeader sub="แนวโน้ม 14 วัน" />

      {/* Mode Selector */}
      <div className="mb-4 grid grid-cols-2 rounded-2xl bg-muted p-1 text-sm">
        {(
          [
            ['personal', 'ค่าปกติของมะลิ'],
            ['general', 'ค่าเฉลี่ยทั่วไป'],
          ] as const
        ).map(([key, label]) => (
          <Button
            key={key}
            variant="ghost"
            onClick={() => setMode(key)}
            className={`rounded-xl py-2 ${
              mode === key ? 'bg-card font-semibold shadow-sm' : 'text-muted-foreground'
            }`}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Food Chart Card */}
      <div className="rounded-lg bg-card p-4 border mb-3">
        <p className="mb-1 text-sm font-semibold">ปริมาณอาหารที่กิน</p>
        <MetricChart metric="food" mode={mode} />
      </div>

      {/* Water Chart Card */}
      <div className="rounded-lg bg-card p-4 border mb-4">
        <p className="mb-1 text-sm font-semibold">ปริมาณน้ำที่ดื่ม</p>
        <MetricChart metric="water" mode={mode} />
      </div>

      {/* Comparison Analysis */}
      {mode === 'general' ? (
        <div className="rounded-[var(--radius)] border bg-muted p-4 text-sm">
          เกณฑ์ทั่วไป (เตือนเมื่อกินต่ำกว่า 0.45){' '}
          <span className="font-bold">ยังไม่เตือน</span> —
          เพราะไม่รู้ว่าปกติมะลิกินเยอะกว่าแมวทั่วไป
        </div>
      ) : (
        <div className="rounded-lg bg-card p-4 border space-y-3">
          <h2 className="font-semibold">ทำไมถึงเตือน</h2>
          <ul className="space-y-2 text-sm">
            <li>
              • กินน้อยกว่าช่วงปกติของมะลิ 5 วันติด (วันที่ 18–22 เฉลี่ย 0.53 จากปกติ 0.90)
            </li>
            <li>• ดื่มน้ำมากกว่าช่วงปกติ 5 วันติด (เฉลี่ย 0.87 จากปกติ 0.60)</li>
            <li>• อาเจียน 2 ครั้งใน 2 วัน (วันที่ 21, 22)</li>
          </ul>

          <div className="rounded-2xl bg-warning-soft p-3">
            <p className="text-xs text-muted-foreground">ขั้นต่อไปที่แนะนำ</p>
            <p className="font-semibold">นัดสัตวแพทย์</p>
            <p className="text-xs text-muted-foreground">
              รูปแบบนี้เป็นสิ่งที่สัตวแพทย์มักตรวจเพิ่ม
            </p>
          </div>

          <Button
            variant="ghost"
            onClick={() => go('vet')}
            className="w-full rounded-2xl bg-primary py-3 font-semibold text-primary-foreground"
          >
            สร้างสรุปให้หมอ
          </Button>
        </div>
      )}
    </>
  );
};
