import { Text, Float } from "@react-three/drei";

export default function Projects() {
  return (
    <Float speed={1.5}>
      <group position={[3, 0, 0]}>
        <Text fontSize={0.3} color="orange">
          Projects
        </Text>

        <Text position={[0, -0.7, 0]} fontSize={0.18}>
          Netflix AI Voice Search
        </Text>

        <Text position={[0, -1.2, 0]} fontSize={0.18}>
          Electro AI IoT Platform
        </Text>
      </group>
    </Float>
  );
}