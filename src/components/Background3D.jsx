import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import * as maath from 'maath/random/dist/maath-random.esm';

function NeuralNetwork() {
  const groupRef = useRef();

  // Generate random points for nodes
  const nodes = useMemo(() => {
    return maath.inSphere(new Float32Array(200 * 3), { radius: 10 });
  }, []);

  // Compute connections
  const connections = useMemo(() => {
    const lines = [];
    const positions = Array.from(nodes);
    const threshold = 2.5;
    const count = positions.length / 3;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const p1 = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
        const p2 = new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        const dist = p1.distanceTo(p2);

        if (dist < threshold) {
          lines.push(p1, p2);
        }
      }
    }
    return lines;
  }, [nodes]);

  // Animation Loop - Auto Rotate Only
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Continuous slow rotation
      groupRef.current.rotation.x -= delta / 50;
      groupRef.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes (Gold/Yellow) */}
      <Points positions={nodes} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffd700"
          size={0.18}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Synapses (Cyan/Greenish) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length}
            array={new Float32Array(connections.flatMap(v => [v.x, v.y, v.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          attach="material"
          color="#00f3ff"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="background-3d" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050505', pointerEvents: 'auto' }}>
      {/* pointerEvents: auto is needed for canvas to capture mouse */}
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} gl={{ alpha: false, antialias: true }}>
        <fog attach="fog" args={['#050505', 10, 25]} />
        <ambientLight intensity={0.5} />
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
