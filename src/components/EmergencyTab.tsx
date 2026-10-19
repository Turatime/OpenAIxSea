import React, { useState } from 'react';
import { Button } from './ui/button';
import { EMERGENCY_SYMPTOMS } from '@/data/mockData';
import type { TabType } from './BottomNav';

interface EmergencyTabProps {
  go: (tab: TabType) => void;
}

export const EmergencyTab: React.FC<EmergencyTabProps> = ({ go }) => {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);

  if (selectedSymptom) {
    const now = new Date();
    const timeStr = now.toTimeString().slice(0, 5);

    return (
      <div className="flex flex-col items-center pt-8 text-center">
        <div className="mb-5 grid h-24 w-24 place-items-center rounded-full bg-destructive-soft text-5xl">
          🚑
        </div>
        <h1 className="font-display text-2xl font-semibold text-destructive">
          ควรพบสัตวแพทย์ทันที
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          อาการที่บันทึก: {selectedSymptom} · วันที่ 22 {timeStr}
        </p>

        <div className="mt-8 grid w-full gap-3">
          <a
            href="tel:000"
            className="rounded-2xl bg-destructive p-4 font-semibold text-destructive-foreground block text-center transition-colors hover:bg-destructive/90"
          >
            📞 โทรคลินิก (ใส่เบอร์เอง)
          </a>
          <Button
            variant="ghost"
            onClick={() => go('vet')}
            className="rounded-2xl border bg-card p-4 font-medium h-auto"
          >
            📄 สร้างสรุปให้หมอ
          </Button>
          <Button
            variant="ghost"
            onClick={() => setSelectedSymptom(null)}
            className="text-sm text-muted-foreground"
          >
            ย้อนกลับ
          </Button>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          ระบบไม่ประเมินความรุนแรงและไม่ระบุชื่อโรค
        </p>
      </div>
    );
  }

  return (
    <>
      <h1 className="font-display text-2xl font-semibold mb-1 text-destructive">ฉุกเฉิน</h1>
      <p className="mb-5 text-sm text-muted-foreground">
        เลือกอาการที่พบ (รายการตัวอย่าง รอสัตวแพทย์ตรวจสอบ)
      </p>

      <div className="grid gap-2">
        {EMERGENCY_SYMPTOMS.map((symptom) => (
          <Button
            key={symptom}
            variant="ghost"
            onClick={() => setSelectedSymptom(symptom)}
            className="rounded-2xl border border-destructive/30 bg-destructive-soft p-4 text-left font-medium h-auto justify-start text-foreground hover:bg-destructive-soft/80"
          >
            {symptom}
          </Button>
        ))}
      </div>
    </>
  );
};
