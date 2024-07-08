"use client";
import { ReactNode } from "react";
import dynamic from 'next/dynamic';

const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

interface WaterWaveWrapperProps {
  imageUrl: string;
  dropRadius: number;
  perturbance: number;
  resolution: number;
  children: (methods: any) => ReactNode;
}

export default function WaterWaveWrapper({
  imageUrl,
  resolution,
  dropRadius,
  perturbance,
  children,
}: WaterWaveWrapperProps) {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
}
