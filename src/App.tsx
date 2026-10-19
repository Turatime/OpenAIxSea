import { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav, type TabType } from './components/BottomNav';
import { TodayTab } from './components/TodayTab';
import { EventsTab } from './components/EventsTab';
import { TrendsTab } from './components/TrendsTab';
import { EmergencyTab } from './components/EmergencyTab';
import { VetSummaryTab } from './components/VetSummaryTab';
import { INITIAL_EVENTS, type EventItem } from './data/mockData';

export function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('today');
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);

  const handleAddEvent = (event: EventItem) => {
    setEvents((prev) => [event, ...prev]);
  };

  return (
    <div className="app-canvas min-h-screen bg-muted/60 md:py-8">
      <div className="app-shell relative mx-auto flex min-h-screen max-w-[480px] flex-col overflow-hidden bg-background md:min-h-[900px] md:rounded-3xl md:border md:shadow-soft">
        <Header />

        <main className="screen-content flex-1 px-6 pb-8 pt-6">
          {currentTab === 'today' && (
            <TodayTab go={setCurrentTab} onLog={handleAddEvent} />
          )}
          {currentTab === 'event' && (
            <EventsTab events={events} onAdd={handleAddEvent} />
          )}
          {currentTab === 'emergency' && <EmergencyTab go={setCurrentTab} />}
          {currentTab === 'trend' && <TrendsTab go={setCurrentTab} />}
          {currentTab === 'vet' && <VetSummaryTab events={events} />}
        </main>

        <p className="px-5 pb-4 text-center text-[10px] leading-relaxed text-muted-foreground">
          ข้อมูลจำลอง · ไม่ใช่การวินิจฉัย · สัตวแพทย์ตัดสินเสมอ
        </p>

        <BottomNav currentTab={currentTab} onSelectTab={setCurrentTab} />
      </div>
    </div>
  );
}

export default App;
