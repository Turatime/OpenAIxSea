import React from 'react';
import { PawPrint } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between border-b px-6 py-4">
      <div className="flex items-center gap-2 text-primary">
        <PawPrint className="size-5" />
        <span className="font-semibold text-lg">
          mali<span className="text-foreground">care</span>
        </span>
      </div>
      <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-primary">
        PROTOTYPE
      </span>
    </div>
  );
};
