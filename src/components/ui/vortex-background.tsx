import { Vortex } from "./vortex";

export const VortexBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="w-full h-full"
        particleCount={500}
        baseHue={220}
        baseSpeed={0.2}
        rangeSpeed={0.8}
        baseRadius={1.2}
        rangeRadius={2}
        containerClassName="opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
    </div>
  );
}; 