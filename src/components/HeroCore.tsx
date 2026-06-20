import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CoreMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  // node positions on an icosahedron-like spread, used for the connecting lines
  const nodePositions = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const count = 14;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push(new THREE.Vector3(Math.cos(theta) * radius, y, Math.sin(theta) * radius).multiplyScalar(1.9));
    }
    return points;
  }, []);

  const lineGeometry = useMemo(() => {
    const positions: number[] = [];
    nodePositions.forEach((p, i) => {
      nodePositions.forEach((q, j) => {
        if (j <= i) return;
        if (p.distanceTo(q) < 1.7) {
          positions.push(p.x, p.y, p.z, q.x, q.y, q.z);
        }
      });
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [nodePositions]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.32;
      innerRef.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      {/* outer wireframe shell */}
      <mesh>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.35} />
      </mesh>

      {/* inner rotating solid */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshStandardMaterial
          color="#00e5c7"
          emissive="#00e5c7"
          emissiveIntensity={0.6}
          metalness={0.6}
          roughness={0.25}
          wireframe={false}
        />
      </mesh>

      {/* node points */}
      {nodePositions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#00e5c7' : '#a474ff'} />
        </mesh>
      ))}

      {/* connecting trace lines */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#7c3aed" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#4d5a78" size={0.025} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export default function HeroCore() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 5]} intensity={1.2} color="#a474ff" />
      <pointLight position={[-4, -2, -3]} intensity={0.8} color="#00e5c7" />
      <Particles />
      <CoreMesh />
    </Canvas>
  );
}
