import React, { useState } from 'react';
import {
  Heart,
  PawPrint,
  Check,
  Camera,
  ChevronRight,
  Plus,
  Utensils,
  Droplets,
  ArrowDownRight,
  ArrowUpRight,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { PET_PROFILE, type EventItem } from '@/data/mockData';
import type { TabType } from './BottomNav';

interface TodayTabProps {
  go: (tab: TabType) => void;
  onLog?: (event: EventItem) => void;
}

export const TodayTab: React.FC<TodayTabProps> = ({ go }) => {
  const [logStatus, setLogStatus] = useState<'none' | 'photo' | 'normal' | 'confirmed'>('none');
  const [foodRemaining, setFoodRemaining] = useState<string>('ครึ่ง');
  const [waterRemaining, setWaterRemaining] = useState<string>('หมด');

  return (
    <>
      {/* Title & Date */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="mb-1 text-sm text-muted-foreground">ทุกวันเล็ก ๆ ที่เราใส่ใจ</p>
          <h1 className="font-display text-[28px] font-semibold leading-snug">
            วันนี้ของ{PET_PROFILE.name}{' '}
            <Heart className="ml-1 inline size-5 text-primary" />
          </h1>
        </div>
        <span className="mt-1 text-xs text-muted-foreground">วันที่ 22</span>
      </div>

      {/* Pet Profile Header */}
      <div className="pet-profile mb-6 flex items-center gap-5 border-b pb-6">
        <img
          src={PET_PROFILE.avatar}
          alt={`${PET_PROFILE.name} แมวตัวอย่าง`}
          width={1024}
          height={1024}
          className="size-24 shrink-0 rounded-full object-cover ring-4 ring-secondary"
        />
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2">
            <h2 className="font-display text-2xl font-semibold">{PET_PROFILE.name}</h2>
            <PawPrint className="size-4 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">
            {PET_PROFILE.species} · {PET_PROFILE.ageYears} ปี
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[11px] text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            ดูแลกันมา 22 วัน
          </span>
        </div>
      </div>

      {/* Daily Log Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold">บันทึกประจำวัน</h2>
        <span
          className={`flex items-center gap-1 text-xs ${
            logStatus === 'normal' || logStatus === 'confirmed'
              ? 'text-primary'
              : 'text-muted-foreground'
          }`}
        >
          {logStatus === 'none' && 'ยังไม่ได้บันทึก'}
          {logStatus === 'photo' && 'รอยืนยัน'}
          {(logStatus === 'normal' || logStatus === 'confirmed') && (
            <>
              <Check className="size-3.5" />
              บันทึกแล้ว
            </>
          )}
        </span>
      </div>

      {/* Log Actions or Photo Confirmation */}
      {logStatus === 'photo' ? (
        <div className="rounded-lg bg-card p-4 border mb-4 space-y-4">
          <div className="flex h-28 items-center justify-center gap-6 rounded-lg bg-secondary text-primary">
            <Utensils className="size-9" />
            <Droplets className="size-9" />
          </div>
          <p className="text-xs text-muted-foreground">
            ระบบอ่านจากรูป — แตะเพื่อแก้ได้ (ข้อมูลประกอบ ไม่ใช่ตัวตัดสิน)
          </p>

          {[
            { label: 'อาหารที่เหลือ', value: foodRemaining, setter: setFoodRemaining },
            { label: 'น้ำที่เหลือ', value: waterRemaining, setter: setWaterRemaining },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <p className="mb-2 text-sm font-medium">{label}</p>
              <div className="grid grid-cols-3 gap-2">
                {['หมด', 'ครึ่ง', 'เหลือมาก'].map((opt) => (
                  <Button
                    key={opt}
                    variant="ghost"
                    onClick={() => setter(opt)}
                    className={`rounded-xl border py-2 text-sm ${
                      value === opt
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'bg-background'
                    }`}
                  >
                    {opt}
                  </Button>
                ))}
              </div>
            </div>
          ))}

          <Button
            variant="ghost"
            onClick={() => setLogStatus('confirmed')}
            className="w-full rounded-2xl bg-primary py-3 font-semibold text-primary-foreground"
          >
            ยืนยัน
          </Button>
        </div>
      ) : (
        <div className="mb-5 grid gap-3">
          <Button
            onClick={() => setLogStatus('photo')}
            className="h-[72px] justify-start gap-3 rounded-lg px-4 text-left shadow-none"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary-foreground/15">
              <Camera className="size-5" />
            </span>
            <span className="flex-1 whitespace-normal text-[15px]">
              ถ่ายรูปชามอาหาร + น้ำ
            </span>
            <ChevronRight className="size-4" />
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={() => setLogStatus('normal')}
              className="h-12 gap-2 rounded-lg border-primary/25 text-primary shadow-none"
            >
              <Check className="size-4" />
              วันนี้ปกติดี
            </Button>
            <Button
              variant="outline"
              onClick={() => go('event')}
              className="h-12 gap-2 rounded-lg shadow-none"
            >
              <Plus className="size-4" />
              บันทึกเหตุการณ์
            </Button>
          </div>
        </div>
      )}

      {/* Health Overview */}
      <div className="mb-3 mt-6 flex items-center justify-between">
        <h2 className="font-semibold">สุขภาพช่วงนี้</h2>
        <span className="text-[11px] text-muted-foreground">จากข้อมูล 14 วัน</span>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border bg-card p-3.5">
          <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Utensils className="size-4 text-primary" />
            อาหารที่กิน
          </div>
          <p className="flex items-center gap-1.5 text-lg font-semibold">
            น้อยลง <ArrowDownRight className="size-5 text-warning" />
          </p>
          <p className="mt-1 text-[11px] text-muted-foreground">ต่อเนื่อง 5 วัน</p>
        </div>

        <div className="rounded-lg border bg-card p-3.5">
          <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Droplets className="size-4 text-info" />
            น้ำที่ดื่ม
          </div>
          <p className="flex items-center gap-1.5 text-lg font-semibold">
            มากขึ้น <ArrowUpRight className="size-5 text-info" />
          </p>
          <p className="mt-1 text-[11px] text-muted-foreground">ต่อเนื่อง 5 วัน</p>
        </div>
      </div>

      {/* Recommendation Warning Card */}
      <Button
        variant="ghost"
        onClick={() => go('trend')}
        className="mb-5 h-auto w-full items-start justify-start gap-3 whitespace-normal rounded-lg border border-warning/25 bg-warning-soft p-4 text-left hover:bg-warning-soft"
      >
        <ShieldAlert className="mt-0.5 size-5 shrink-0 text-warning" />
        <span>
          <span className="block font-semibold text-accent-foreground">
            ควรนัดพบสัตวแพทย์
          </span>
          <span className="mt-1 block text-xs font-normal leading-relaxed text-accent-foreground/80">
            กินน้อยลง ดื่มน้ำมากขึ้น และอาเจียน 2 ครั้ง
          </span>
          <span className="mt-3 flex items-center gap-2 text-xs font-semibold text-accent-foreground">
            ดูเหตุผลและกราฟ <ArrowRight className="size-3.5" />
          </span>
        </span>
      </Button>

      {/* Emergency Button */}
      <Button
        variant="ghost"
        onClick={() => go('emergency')}
        className="h-12 w-full justify-between rounded-lg border border-destructive/20 bg-destructive-soft px-3 text-destructive"
      >
        <span className="flex items-center gap-2 text-xs">
          <ShieldAlert className="size-4" />
          ฉุกเฉิน: พบสัตวแพทย์ทันที
        </span>
        <ChevronRight className="size-4" />
      </Button>
    </>
  );
};
