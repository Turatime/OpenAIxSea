export interface PetProfile {
  name: string;
  species: string;
  ageYears: number;
  avatar: string;
}

export interface TelemetryDay {
  day: number;
  food: number;
  water: number;
}

export interface EventItem {
  id: number;
  type: string;
  time: string;
  note?: string;
}

export const PET_PROFILE: PetProfile = {
  name: 'มะลิ',
  species: 'แมว',
  ageYears: 4,
  avatar: `${import.meta.env.BASE_URL}assets/mali-cat-CSOzRKT-.jpg`,
};

const NOISE = [
  0.02, -0.03, 0.01, 0.04, -0.02, 0, 0.03, -0.04, 0.02, -0.01, 0.03, -0.02,
  0.01, 0, -0.03, 0.02, -0.01,
];

export const TELEMETRY_DATA: TelemetryDay[] = Array.from({ length: 22 }, (_, idx) => {
  const day = idx + 1;
  const isDeviating = day >= 18;
  return {
    day,
    food: isDeviating
      ? [0.6, 0.55, 0.5, 0.52, 0.48][day - 18]
      : 0.9 + NOISE[idx],
    water: isDeviating
      ? [0.82, 0.86, 0.88, 0.9, 0.9][day - 18]
      : 0.6 + NOISE[(idx + 5) % 17],
  };
});

export const BASELINE = {
  food: { median: 0.9, lo: 0.82, hi: 0.98 },
  water: { median: 0.6, lo: 0.52, hi: 0.68 },
};

export const GENERAL_THRESHOLD = 0.45;

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 2,
    type: 'อาเจียน',
    time: 'วันที่ 22 • 07:42',
    note: 'หลังกินอาหารเช้า',
  },
  {
    id: 1,
    type: 'อาเจียน',
    time: 'วันที่ 21 • 21:10',
  },
];

export const EMERGENCY_SYMPTOMS = [
  'ปัสสาวะไม่ออก / เบ่งนาน',
  'อุจจาระมีเลือด',
  'หายใจลำบาก',
  'ชัก / หมดสติ',
  'ไม่กินอะไรเลยเกิน 24 ชม.',
];
