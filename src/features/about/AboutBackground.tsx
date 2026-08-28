"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* =========================================================
   PARTICULES AMBIANTES
========================================================= */

function AmbientParticles({
  isVisible,
}: {
  isVisible: boolean;
}) {
  const ref = useRef<THREE.Points | null>(null);

  const positions = useMemo(() => {
    const count = 900;
    const array = new Float32Array(count * 3);

    const random = (n: number) => {
      const x = Math.sin(n * 78.233) * 43758.5453;
      return x - Math.floor(x);
    };

    for (let i = 0; i < count; i++) {
      const radius = 2.6 + random(i * 3.7) * 4.2;
      const theta = random(i * 2.4) * Math.PI * 2;
      const phi = Math.acos(2 * random(i * 4.8) - 1);

      array[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta);

      array[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);

      array[i * 3 + 2] =
        radius * Math.cos(phi);
    }

    return array;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const material =
      ref.current.material as THREE.PointsMaterial;

    /*
      Apparition progressive
    */
    const targetOpacity = isVisible ? 0.5 : 0;

    material.opacity = THREE.MathUtils.lerp(
      material.opacity,
      targetOpacity,
      0.035
    );

    /*
      Rotation
    */
    ref.current.rotation.y -= delta * 0.015;
    ref.current.rotation.x += delta * 0.004;

    /*
      Respiration
    */
    const breathing =
      1 +
      Math.sin(state.clock.elapsedTime * 0.7) * 0.025;

    ref.current.scale.lerp(
      new THREE.Vector3(
        isVisible ? breathing : 0.75,
        isVisible ? breathing : 0.75,
        isVisible ? breathing : 0.75
      ),
      0.035
    );
  });

  return (
    <points
      ref={ref}
      geometry={new THREE.BufferGeometry()}
    >
      <bufferAttribute
        attach="geometry-attributes-position"
        args={[positions, 3]}
      />

      <pointsMaterial
        transparent
        color="#00e6c3"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* =========================================================
   ANNEAU
========================================================= */

function ThinRing({
  isVisible,
}: {
  isVisible: boolean;
}) {
  const mesh = useRef<THREE.Mesh | null>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    const material =
      mesh.current.material as THREE.MeshBasicMaterial;

    const targetOpacity = isVisible ? 0.35 : 0;

    material.opacity = THREE.MathUtils.lerp(
      material.opacity,
      targetOpacity,
      0.04
    );

    mesh.current.rotation.y += delta * 0.07;
    mesh.current.rotation.z += delta * 0.02;

    const targetScale = isVisible ? 1 : 0.65;

    mesh.current.scale.lerp(
      new THREE.Vector3(
        targetScale,
        targetScale,
        targetScale
      ),
      0.04
    );

    /*
      Légère pulsation
    */
    const pulse =
      1 +
      Math.sin(state.clock.elapsedTime * 0.8) *
        0.015;

    if (isVisible) {
      mesh.current.scale.multiplyScalar(
        pulse
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      rotation={[1.3, 0.2, 0]}
      scale={[0.65, 0.65, 0.65]}
    >
      <torusGeometry
        args={[2.9, 0.006, 8, 180]}
      />

      <meshBasicMaterial
        color="#00ffcc"
        transparent
        opacity={0}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

/* =========================================================
   ORBES LUMINEUX
========================================================= */

function GlowOrbs({
  isVisible,
}: {
  isVisible: boolean;
}) {
  const group = useRef<THREE.Group | null>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.children.forEach(
      (
        child: THREE.Object3D,
        index: number
      ) => {
        /*
          Apparition progressive
        */
        const targetScale =
          isVisible ? 1 : 0;

        child.scale.lerp(
          new THREE.Vector3(
            targetScale,
            targetScale,
            targetScale
          ),
          0.05
        );

        /*
          Mouvement vertical
        */
        child.position.y +=
          Math.sin(
            state.clock.elapsedTime *
              (0.5 + index * 0.15)
          ) * 0.001;
      }
    );
  });

  return (
    <group ref={group}>
      <mesh position={[-2.6, 1.1, -0.5]}>
        <sphereGeometry
          args={[0.05, 16, 16]}
        />
        <meshBasicMaterial color="#00ffe0" />
      </mesh>

      <mesh position={[2.7, 0.6, -0.8]}>
        <sphereGeometry
          args={[0.06, 16, 16]}
        />
        <meshBasicMaterial color="#00ffe0" />
      </mesh>

      <mesh position={[2.1, -1.6, -0.4]}>
        <sphereGeometry
          args={[0.04, 16, 16]}
        />
        <meshBasicMaterial color="#00cdb0" />
      </mesh>
    </group>
  );
}

/* =========================================================
   SCÈNE
========================================================= */

function Scene({
  isVisible,
}: {
  isVisible: boolean;
}) {
  return (
    <>
      <AmbientParticles
        isVisible={isVisible}
      />

      <ThinRing
        isVisible={isVisible}
      />

      <GlowOrbs
        isVisible={isVisible}
      />
    </>
  );
}

/* =========================================================
   BACKGROUND
========================================================= */

export default function AboutBackground({
  isVisible,
}: {
  isVisible: boolean;
}) {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#020404] "
    >

      {/* =================================================
          BASE
      ================================================= */}

      <div className="absolute inset-0 bg-[#020404]" />

      {/* =================================================
          HALO PRINCIPAL
      ================================================= */}

      <div
        className={`
          pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00cdb0]/10 blur-[150px] transition-all duration-[1800ms] ease-out
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }
        `}
      />

      {/* =================================================
          HALO SECONDAIRE
      ================================================= */}

      <div
        className={` pointer-events-none absolute left-1/2 top-[48%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffe0]/10 blur-[100px] transition-all duration-[2200ms] ease-out
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }
        `}
      />

      {/* =================================================
          GLOW SECONDAIRE
      ================================================= */}

      <div
        className={`
          pointer-events-none
          absolute right-[-150px] top-[15%]
          h-[450px] w-[450px]
          rounded-full
          bg-[#00e6c3]/[0.05]
          blur-[130px]
          transition-all
          duration-[2000ms]
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[150px] opacity-0"
          }
        `}
      />

      {/* =================================================
          THREE.JS
      ================================================= */}

      <Canvas
        className="pointer-events-none"
        camera={{
          position: [0, 0, 7],
          fov: 50,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
      >
        <Scene
          isVisible={isVisible}
        />
      </Canvas>

      {/* =================================================
          GRID
      ================================================= */}

      <div
        className={`
          pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(0,255,220,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,220,.3)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] transition-opacity duration-[1800ms]
          ${
            isVisible
              ? "opacity-[0.13]"
              : "opacity-0"
          }
        `}
      />

      {/* =================================================
          LIGNES DIGITALES
      ================================================= */}

      <div
        className={`
          pointer-events-none
          absolute left-[-10%] top-[35%]
          h-px w-[55%]
          rotate-[-18deg]
          bg-gradient-to-r
          from-transparent
          via-[#00e6c3]/30
          to-transparent
          transition-all
          duration-[1600ms]
          ease-out
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-[30%] opacity-0"
          }
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute right-[-10%] top-[60%]
          h-px w-[55%]
          rotate-[18deg]
          bg-gradient-to-r
          from-transparent
          via-[#00e6c3]/25
          to-transparent
          transition-all
          duration-[1600ms]
          delay-200
          ease-out
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[30%] opacity-0"
          }
        `}
      />

      {/* =================================================
          CERCLES HOLOGRAPHIQUES
      ================================================= */}

      <div
        className={`
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[520px] w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border border-[#00e6c3]/10
          transition-all
          duration-[1800ms]
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[430px] w-[430px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border border-[#00e6c3]/10
          transition-all
          duration-[2100ms]
          delay-100
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[650px] w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border border-[#00e6c3]/5
          transition-all
          duration-[2400ms]
          delay-200
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0"
          }
        `}
      />

      {/* =================================================
          POINTS LUMINEUX
      ================================================= */}

      <span
        className={`
          pointer-events-none
          absolute left-[15%] top-[25%]
          h-1.5 w-1.5
          rounded-full
          bg-[#00e6c3]
          shadow-[0_0_15px_#00e6c3]
          transition-all
          duration-700
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }
        `}
      />

      <span
        className={`
          pointer-events-none
          absolute left-[25%] bottom-[25%]
          h-1 w-1
          rounded-full
          bg-[#00e6c3]
          shadow-[0_0_12px_#00e6c3]
          transition-all
          delay-200
          duration-700
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }
        `}
      />

      <span
        className={`
          pointer-events-none
          absolute right-[18%] top-[30%]
          h-1.5 w-1.5
          rounded-full
          bg-[#00e6c3]
          shadow-[0_0_15px_#00e6c3]
          transition-all
          delay-300
          duration-700
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }
        `}
      />

      <span
        className={`
          pointer-events-none
          absolute right-[25%] bottom-[20%]
          h-1 w-1
          rounded-full
          bg-[#00e6c3]
          shadow-[0_0_12px_#00e6c3]
          transition-all
          delay-500
          duration-700
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }
        `}
      />

      {/* =================================================
          VIGNETTE
      ================================================= */}

      <div
        className=" pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(2,4,4,0.45)_65%,#020404_100%)]"
      />
    </div>
  );
}