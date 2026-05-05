import { Text } from "@react-three/drei";

export default function Experience() {
  return (
    <group position={[0, -2.5, 0]}>
      <Text fontSize={0.3} color="pink">
        Experience
      </Text>

      <Text position={[0, -0.6, 0]} fontSize={0.18}>
        Titan Company Pvt Ltd - Intern
      </Text>

      <Text position={[0, -1, 0]} fontSize={0.15}>
        Industrial Power Systems Exposure
      </Text>
    </group>
  );
}