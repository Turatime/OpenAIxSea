import React from 'react';
import { PET_PROFILE } from '@/data/mockData';

interface PetHeaderProps {
  sub: string;
}

export const PetHeader: React.FC<PetHeaderProps> = ({ sub }) => {
  return (
    <div className="mb-5 flex items-center gap-3">
      <img
        src={PET_PROFILE.avatar}
        alt={`${PET_PROFILE.name} แมวในต้นแบบ`}
        width={1024}
        height={1024}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div>
        <h1 className="font-display text-2xl font-semibold">{PET_PROFILE.name}</h1>
        <p className="text-sm text-muted-foreground">
          {PET_PROFILE.species} {PET_PROFILE.ageYears} ปี · {sub}
        </p>
      </div>
    </div>
  );
};
