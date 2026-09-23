import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Lightformer, Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import avatar from "@/assets/iury-3d-avatar-updated.png";

function DeveloperCharacter() {
  const group = useRef<THREE.Group>(null);
  const texture = useMemo(() => new THREE.TextureLoader().load(avatar), []);
  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame(({ pointer }, rawDelta) => {
    if (!group.current) return;
    const delta = Math.min(rawDelta, 0.05);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.12, 5, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.y * 0.04, 5, delta);
  });

  return (
    <Float speed={1.25} rotationIntensity={0.08} floatIntensity={0.22}>
      <group ref={group} position={[0.15, -0.2, 0]}>
        <mesh position={[0, 0, -0.08]} scale={[4.28, 6.42, 1]}>
          <planeGeometry />
          <meshBasicMaterial map={texture} transparent alphaTest={0.04} toneMapped={false} />
        </mesh>
        <mesh position={[0.05, -2.35, -0.42]} rotation-x={-Math.PI / 2}>
          <circleGeometry args={[1.35, 64]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.22} depthWrite={false} />
        </mesh>
      </group>
    </Float>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();
  useFrame((_, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.x * 0.2, 3, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, pointer.y * 0.12, 3, delta);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function DeveloperScene() {
  return (
    <div className="h-full w-full" aria-label="Personagem 3D de Iury Silva">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.2], fov: 36 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[4, 6, 6]} intensity={2.2} />
        <Environment>
          <Lightformer intensity={2} position={[0, 5, 2]} scale={[10, 10, 1]} />
          <Lightformer intensity={1.5} color="#d9ff54" position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[10, 3, 1]} />
        </Environment>
        <DeveloperCharacter />
        <CameraRig />
      </Canvas>
    </div>
  );
}
