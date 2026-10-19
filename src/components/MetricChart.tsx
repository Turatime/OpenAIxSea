import React from 'react';
import { TELEMETRY_DATA, BASELINE, GENERAL_THRESHOLD } from '@/data/mockData';

interface MetricChartProps {
  metric: 'food' | 'water';
  mode: 'personal' | 'general';
}

export const MetricChart: React.FC<MetricChartProps> = ({ metric, mode }) => {
  const last14Days = TELEMETRY_DATA.slice(-14);
  const getX = (index: number) => 24 + (index * 292) / (last14Days.length - 1);
  const getY = (val: number) => 136 - val * 112;
  const baseRange = BASELINE[metric];
  const points = last14Days.map((item, idx) => `${getX(idx)},${getY(item[metric])}`).join(' ');

  const alertIndex = last14Days.findIndex((item) => item.day === 20);

  return (
    <svg viewBox="0 0 340 160" className="w-full">
      {mode === 'personal' ? (
        <rect
          x={24}
          y={getY(baseRange.hi)}
          width={292}
          height={getY(baseRange.lo) - getY(baseRange.hi)}
          className="fill-band"
          rx={6}
        />
      ) : metric === 'food' ? (
        <line
          x1={24}
          x2={316}
          y1={getY(GENERAL_THRESHOLD)}
          y2={getY(GENERAL_THRESHOLD)}
          className="stroke-muted-foreground"
          strokeDasharray="4 4"
        />
      ) : null}

      <polyline
        points={points}
        fill="none"
        className="stroke-primary"
        strokeWidth={2.5}
        strokeLinejoin="round"
      />

      {last14Days.map((item, idx) => {
        const isOutOfRange =
          mode === 'personal' && (item[metric] < baseRange.lo || item[metric] > baseRange.hi);
        return (
          <circle
            key={item.day}
            cx={getX(idx)}
            cy={getY(item[metric])}
            r={isOutOfRange ? 4.5 : 3}
            className={isOutOfRange ? 'fill-destructive' : 'fill-primary'}
          />
        );
      })}

      {mode === 'personal' && alertIndex !== -1 && (
        <g>
          <line
            x1={getX(alertIndex)}
            x2={getX(alertIndex)}
            y1={16}
            y2={136}
            className="stroke-warning"
            strokeWidth={2}
          />
          <text
            x={getX(alertIndex) - 4}
            y={12}
            textAnchor="end"
            className="fill-accent-foreground text-[10px]"
          >
            เตือนวันที่ 20
          </text>
        </g>
      )}

      {last14Days
        .filter((_, idx) => idx % 3 === 0)
        .map((item) => (
          <text
            key={item.day}
            x={getX(last14Days.indexOf(item))}
            y={154}
            textAnchor="middle"
            className="fill-muted-foreground text-[9px]"
          >
            {item.day}
          </text>
        ))}
    </svg>
  );
};
