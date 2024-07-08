"use client";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius={3}
      perturbance={3}
      resolution={2048}
    >
      {(methods) => (
        <div className="h-screen">
          {/* You can now use methods provided by react-water-wave here */}
        </div>
      )}
    </WaterWaveWrapper>
  );
}
