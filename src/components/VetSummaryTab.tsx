import React from 'react';
import { Button } from './ui/button';
import { MetricChart } from './MetricChart';
import { PET_PROFILE, type EventItem } from '@/data/mockData';

interface VetSummaryTabProps {
  events: EventItem[];
}

export const VetSummaryTab: React.FC<VetSummaryTabProps> = ({ events }) => {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold">สรุปสำหรับสัตวแพทย์</h1>
        <Button
          variant="ghost"
          onClick={() => window.print()}
          className="rounded-full border px-3 py-1.5 text-sm"
        >
          พิมพ์
        </Button>
      </div>

      <div className="rounded-lg bg-card p-4 border space-y-4 text-sm">
        {/* Patient Profile */}
        <div className="grid grid-cols-3 gap-2 border-b pb-3">
          <div>
            <p className="text-xs text-muted-foreground">ชื่อ</p>
            <p className="font-semibold">{PET_PROFILE.name}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">ชนิด/อายุ</p>
            <p className="font-semibold">
              {PET_PROFILE.species} {PET_PROFILE.ageYears} ปี
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">ข้อมูล</p>
            <p className="font-semibold">22 วัน</p>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <p className="mb-2 font-semibold">ไทม์ไลน์</p>
          <ol className="space-y-1.5 border-l-2 border-primary/30 pl-3">
            <li>
              <span className="font-bold">วันที่ 1–17</span> กินเฉลี่ย 0.90 ดื่มน้ำ 0.60
              (ช่วงปกติ)
            </li>
            <li>
              <span className="font-bold">วันที่ 18</span> เริ่มกินน้อยลงและดื่มน้ำเพิ่ม
            </li>
            <li>
              <span className="font-bold">วันที่ 20</span> ระบบเตือน: สังเกตเพิ่ม
            </li>
            <li>
              <span className="font-bold">วันที่ 21–22</span> อาเจียน →
              แนะนำนัดสัตวแพทย์
            </li>
          </ol>
        </div>

        {/* Before-After Chart */}
        <div>
          <p className="mb-1 font-semibold">อาหาร (ก่อน–หลัง)</p>
          <MetricChart metric="food" mode="personal" />
        </div>

        {/* Recorded Events */}
        <div>
          <p className="mb-2 font-semibold">เหตุการณ์</p>
          <ul className="space-y-1">
            {events.map((item) => (
              <li key={item.id}>
                • {item.type} — {item.time}
                {item.note ? ` (${item.note})` : ''}
              </li>
            ))}
          </ul>
        </div>

        {/* Medical disclaimer note */}
        <p className="rounded-xl bg-muted p-3 text-xs text-muted-foreground">
          ระบบนี้ไม่ใช่การวินิจฉัย ข้อมูลทั้งหมดมาจากการบันทึกของเจ้าของ (ในเดโมคือข้อมูลจำลอง)
        </p>
      </div>
    </>
  );
};
