import { Text, Float } from "@react-three/drei";

export default function Hero() {
  return (
    <Float speed={2} rotationIntensity={0.5}>
      <group position={[0, 2.5, 0]}>
        <Text fontSize={0.6} color="cyan">
          Thanushree M
        </Text>
        <Text position={[0, -0.8, 0]} fontSize={0.3} color="white">
          Data Analyst
        </Text>
      </group>
    </Float>
  );
}