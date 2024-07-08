"use client";
import Card from "@/components/ui/Card";
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
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">

          <Card title="UI components">
            This is a Card
          </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
