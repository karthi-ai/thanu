import { Text } from "@react-three/drei";

export default function Skills() {
  return (
    <group position={[-3, 0, 0]}>
      <Text fontSize={0.3} color="lightgreen">
        Skills
      </Text>

      <Text position={[0, -0.6, 0]} fontSize={0.2}>
        Python
      </Text>
      <Text position={[0, -1, 0]} fontSize={0.2}>
        SQL
      </Text>
      <Text position={[0, -1.4, 0]} fontSize={0.2}>
        Power BI
      </Text>
      <Text position={[0, -1.8, 0]} fontSize={0.2}>
        Excel
      </Text>
    </group>
  );
}