import React from 'react';
import { House, ClipboardList, Activity, FileText } from 'lucide-react';
import { Button } from './ui/button';

export type TabType = 'today' | 'event' | 'trend' | 'vet' | 'emergency';

interface BottomNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const navItems = [
    { id: 'today' as TabType, label: 'วันนี้', icon: House },
    { id: 'event' as TabType, label: 'เหตุการณ์', icon: ClipboardList },
    { id: 'trend' as TabType, label: 'แนวโน้ม', icon: Activity },
    { id: 'vet' as TabType, label: 'สรุปให้หมอ', icon: FileText },
  ];

  return (
    <nav
      aria-label="เมนูหลัก"
      className="sticky bottom-0 z-10 grid grid-cols-4 border-t bg-card/95 px-2 py-2 backdrop-blur"
    >
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = currentTab === id;
        return (
          <Button
            key={id}
            variant="ghost"
            onClick={() => onSelectTab(id)}
            aria-current={isActive ? 'page' : undefined}
            className={`h-14 flex-col gap-1 rounded-lg px-1 text-[11px] ${
              isActive
                ? 'bg-secondary text-primary font-semibold'
                : 'text-muted-foreground'
            }`}
          >
            <Icon className="size-5" strokeWidth={isActive ? 2.2 : 1.7} />
            {label}
          </Button>
        );
      })}
    </nav>
  );
};
