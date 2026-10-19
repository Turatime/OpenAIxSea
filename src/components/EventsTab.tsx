import React, { useState } from 'react';
import { Button } from './ui/button';
import type { EventItem } from '@/data/mockData';

interface EventsTabProps {
  events: EventItem[];
  onAdd: (event: EventItem) => void;
}

export const EventsTab: React.FC<EventsTabProps> = ({ events, onAdd }) => {
  const [type, setType] = useState<string>('อาเจียน');
  const [note, setNote] = useState<string>('');
  const [photoAttached, setPhotoAttached] = useState<boolean>(false);

  const handleSave = () => {
    const now = new Date();
    const timeStr = `วันที่ 22 • ${now.toTimeString().slice(0, 5)}`;
    onAdd({
      id: Date.now(),
      type,
      note,
      time: timeStr,
    });
    setNote('');
    setPhotoAttached(false);
  };

  return (
    <>
      <h1 className="font-display text-2xl font-semibold mb-1">บันทึกเหตุการณ์</h1>
      <p className="mb-5 text-sm text-muted-foreground">ระบบประทับเวลาให้อัตโนมัติ</p>

      <div className="rounded-lg bg-card p-4 border mb-6 space-y-4">
        {/* Event Type Selection */}
        <div className="grid grid-cols-3 gap-2">
          {['อาเจียน', 'อุจจาระผิดปกติ', 'อื่น ๆ'].map((opt) => (
            <Button
              key={opt}
              variant="ghost"
              onClick={() => setType(opt)}
              className={`rounded-xl border px-1 py-3 text-sm ${
                type === opt
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'bg-background'
              }`}
            >
              {opt}
            </Button>
          ))}
        </div>

        {/* Photo Attachment Toggle */}
        <Button
          variant="ghost"
          onClick={() => setPhotoAttached(!photoAttached)}
          className={`grid h-24 w-full place-items-center rounded-2xl border-2 border-dashed text-sm ${
            photoAttached
              ? 'border-primary bg-band text-primary'
              : 'text-muted-foreground'
          }`}
        >
          {photoAttached ? '✓ แนบรูปแล้ว (ตัวอย่าง)' : '📷 แตะเพื่อถ่าย/แนบรูป'}
        </Button>

        {/* Note Textarea */}
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="โน้ต (ไม่บังคับ)"
          className="w-full rounded-xl border bg-background p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          rows={2}
        />

        {/* Save Button */}
        <Button
          variant="ghost"
          onClick={handleSave}
          className="w-full rounded-2xl bg-primary py-3 font-semibold text-primary-foreground"
        >
          บันทึก
        </Button>
      </div>

      <h2 className="mb-3 font-semibold">ย้อนหลัง</h2>
      <ul className="space-y-2">
        {events.map((item) => (
          <li
            key={item.id}
            className="flex items-start gap-3 rounded-2xl border bg-card p-3"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-warning-soft text-warning">
              ⚠
            </span>
            <div>
              <p className="font-medium">{item.type}</p>
              <p className="text-xs text-muted-foreground">
                {item.time}
                {item.note ? ` · ${item.note}` : ''}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
