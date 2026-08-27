/* eslint-disable react-hooks/immutability */
/* eslint-disable react-hooks/purity */
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
 
function ParticleSphere() {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const count = 15000;
    const array = new Float32Array(count * 3);

    // Génération déterministe
    const random = (n) => {
      const x = Math.sin(n * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };

    for (let i = 0; i < count; i++) {
      const theta = random(i * 1.73) * Math.PI * 2;

      const phi = Math.acos(
        2 * random(i * 2.91) - 1
      );

      /*
        Surface de base.
        On utilise plusieurs couches pour donner
        une forme moins parfaitement sphérique.
      */
      const surfaceNoise =
        Math.sin(theta * 3.0) * 0.12 +
        Math.sin(phi * 5.0) * 0.08 +
        Math.sin(theta * 7.0 + phi * 3.0) * 0.06;

      const radius =
        2.15 +
        surfaceNoise +
        (random(i * 4.81) - 0.5) * 0.18;

      array[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      array[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      array[i * 3 + 2] =
        radius *
        Math.cos(phi);
    }

    return array;
  }, []);

  /*
    Shader personnalisé.

    C'est lui qui donne le mouvement organique
    à la masse de particules.
  */
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,

      uniforms: {
        uTime: {
          value: 0,
        },

        uMouse: {
          value: new THREE.Vector2(0, 0),
        },
      },

      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;

        varying float vIntensity;

        void main() {

          vec3 pos = position;

          /*
            Plusieurs vagues combinées.
            Cela évite l'effet "sphère parfaite".
          */

          float wave1 =
            sin(pos.x * 2.4 + uTime * 0.8) *
            cos(pos.z * 2.1 + uTime * 0.5);

          float wave2 =
            sin(pos.y * 3.2 - uTime * 0.7) *
            0.35;

          float wave3 =
            sin(
              pos.x * 4.0 +
              pos.y * 2.0 +
              uTime
            ) * 0.18;

          float deformation =
            (wave1 * 0.16) +
            (wave2 * 0.12) +
            wave3;

          /*
            Déformation radiale
          */
          vec3 direction = normalize(pos);

          pos += direction * deformation;

          /*
            Réaction légère à la souris
          */
          pos.x += uMouse.x * 0.12;
          pos.y += uMouse.y * 0.12;

          vec4 mvPosition =
            modelViewMatrix *
            vec4(pos, 1.0);

          /*
            Taille des particules selon
            leur profondeur.
          */
          gl_PointSize =
            2.0 *
            (1.0 / -mvPosition.z);

          gl_PointSize =
            clamp(
              gl_PointSize * 18.0,
              1.2,
              4.5
            );

          gl_Position =
            projectionMatrix *
            mvPosition;

          /*
            Intensité lumineuse.
            Les particules proches du centre
            sont légèrement plus fortes.
          */
          vIntensity =
            0.55 +
            0.45 *
            sin(
              pos.x * 2.0 +
              pos.y * 2.0 +
              uTime
            );
        }
      `,

      fragmentShader: `
        varying float vIntensity;

        void main() {

          /*
            Particule ronde
          */
          vec2 uv =
            gl_PointCoord - vec2(0.5);

          float distanceFromCenter =
            length(uv);

          if (distanceFromCenter > 0.5) {
            discard;
          }

          /*
            Glow autour du point
          */
          float glow =
            1.0 -
            smoothstep(
              0.0,
              0.5,
              distanceFromCenter
            );

          vec3 color =
            vec3(
              0.0,
              0.95,
              0.72
            );

          color *=
            vIntensity *
            glow *
            1.7;

          gl_FragColor =
            vec4(
              color,
              glow * 0.95
            );
        }
      `,
    });
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    /*
      Rotation permanente
    */
    pointsRef.current.rotation.y +=
      delta * 0.13;

    pointsRef.current.rotation.x +=
      delta * 0.025;

    /*
      Animation du shader
    */
    shaderMaterial.uniforms.uTime.value =
      state.clock.elapsedTime;

    /*
      Souris
    */
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    shaderMaterial.uniforms.uMouse.value.lerp(
      new THREE.Vector2(mouseX, mouseY),
      0.04
    );

    /*
      Respiration de la masse
    */
    const breathing =
      1 +
      Math.sin(
        state.clock.elapsedTime * 0.7
      ) *
        0.025;

    pointsRef.current.scale.set(
      breathing,
      breathing,
      breathing
    );
  });

  return (
    <points
      ref={pointsRef}
      geometry={new THREE.BufferGeometry()}
      material={shaderMaterial}
    >
      <bufferAttribute
        attach="geometry-attributes-position"
        args={[positions, 3]}
      />
    </points>
  );
}

/* =========================================================
   PARTICULES ATMOSPHÉRIQUES
========================================================= */

function AmbientParticles() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 2500;
    const array = new Float32Array(count * 3);

    const random = (n) => {
      const x =
        Math.sin(n * 78.233) *
        43758.5453;

      return x - Math.floor(x);
    };

    for (let i = 0; i < count; i++) {
      const radius =
        3.5 +
        random(i * 3.7) * 5.5;

      const theta =
        random(i * 2.4) *
        Math.PI *
        2;

      const phi =
        Math.acos(
          2 *
            random(i * 4.8) -
            1
        );

      array[i * 3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      array[i * 3 + 1] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      array[i * 3 + 2] =
        radius *
        Math.cos(phi);
    }

    return array;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y -=
      delta * 0.018;

    ref.current.rotation.x +=
      delta * 0.005;

    ref.current.rotation.z =
      Math.sin(
        state.clock.elapsedTime * 0.15
      ) * 0.02;
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
        color="#00bfa5"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* =========================================================
   ANNEAUX ORBITAUX
========================================================= */

function OrbitRings() {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y +=
      delta * 0.09;

    group.current.rotation.z +=
      delta * 0.025;

    const scale =
      1 +
      Math.sin(
        state.clock.elapsedTime * 0.8
      ) *
        0.025;

    group.current.scale.setScalar(scale);
  });

  return (
    <group ref={group}>

      {/* Anneau principal */}
      <mesh
        rotation={[
          Math.PI / 2.4,
          0.2,
          0,
        ]}
      >
        <torusGeometry
          args={[
            2.55,
            0.009,
            8,
            180,
          ]}
        />

        <meshBasicMaterial
          color="#00e6c3"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Deuxième anneau */}
      <mesh
        rotation={[
          1.1,
          0.7,
          0.25,
        ]}
      >
        <torusGeometry
          args={[
            2.85,
            0.006,
            8,
            180,
          ]}
        />

        <meshBasicMaterial
          color="#00a88f"
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Grand anneau */}
      <mesh
        rotation={[
          0.35,
          1.2,
          0,
        ]}
      >
        <torusGeometry
          args={[
            3.25,
            0.004,
            8,
            180,
          ]}
        />

        <meshBasicMaterial
          color="#00ffe0"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

    </group>
  );
}

/* =========================================================
   PETITS OBJETS 3D
========================================================= */

function FloatingObjects() {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y +=
      delta * 0.025;
  });

  return (
    <group ref={group}>

      {/* Objet haut gauche */}
      <mesh
        position={[
          -3.7,
          2.1,
          -0.5,
        ]}
        rotation={[
          0.4,
          0.6,
          0.2,
        ]}
      >
        <icosahedronGeometry
          args={[0.25, 1]}
        />

        <meshBasicMaterial
          color="#008f7a"
          wireframe
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Objet haut droit */}
      <mesh
        position={[
          3.7,
          2.4,
          -1,
        ]}
        rotation={[
          0.3,
          0.7,
          0.5,
        ]}
      >
        <icosahedronGeometry
          args={[0.22, 1]}
        />

        <meshBasicMaterial
          color="#00cdb0"
          wireframe
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Objet bas droit */}
      <mesh
        position={[
          3.4,
          -2.2,
          -0.5,
        ]}
        rotation={[
          0.7,
          0.4,
          0.8,
        ]}
      >
        <icosahedronGeometry
          args={[0.3, 1]}
        />

        <meshBasicMaterial
          color="#008f7a"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>

    </group>
  );
}

/* =========================================================
   ORBES LUMINEUX
========================================================= */

function GlowOrbs() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.children.forEach(
      (child, index) => {
        child.position.y +=
          Math.sin(
            state.clock.elapsedTime *
              (0.5 + index * 0.15)
          ) *
          0.001;
      }
    );
  });

  return (
    <group ref={group}>

      <mesh
        position={[
          -2.8,
          1.2,
          0,
        ]}
      >
        <sphereGeometry
          args={[0.055, 16, 16]}
        />

        <meshBasicMaterial
          color="#00ffe0"
        />
      </mesh>

      <mesh
        position={[
          3,
          0.7,
          -0.5,
        ]}
      >
        <sphereGeometry
          args={[0.075, 16, 16]}
        />

        <meshBasicMaterial
          color="#00ffe0"
        />
      </mesh>

      <mesh
        position={[
          2.4,
          -1.9,
          0,
        ]}
      >
        <sphereGeometry
          args={[0.045, 16, 16]}
        />

        <meshBasicMaterial
          color="#00cdb0"
        />
      </mesh>

      <mesh
        position={[
          -3.2,
          -1.7,
          -1,
        ]}
      >
        <sphereGeometry
          args={[0.04, 16, 16]}
        />

        <meshBasicMaterial
          color="#00ffe0"
        />
      </mesh>

    </group>
  );
}

/* =========================================================
   SCÈNE
========================================================= */

function Scene() {
  return (
    <>
      <AmbientParticles />

      <group position={[0, 0, 0]}>
        <ParticleSphere />
        <OrbitRings />
      </group>

      <FloatingObjects />

      <GlowOrbs />
    </>
  );
}

/* =========================================================
   BACKGROUND
========================================================= */

export default function DataFlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#000103]">

      {/* =================================================
          HALO CENTRAL
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#00cdb0]/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[48%]
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#00ffe0]/10
          blur-[100px]
        "
      />

      {/* =================================================
          THREE.JS
      ================================================= */}

      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 50,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene />
      </Canvas>

      {/* =================================================
          VIGNETTE
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,1,3,0.45)_65%,#000103_100%)]
        "
      />

      {/* =================================================
          GRID FUTURISTE
      ================================================= */}

      <div
        className=" pointer-events-none absolute bottom-0 left-0 right-0 h-[35%] opacity-[0.13] [background-image:linear-gradient(rgba(0,255,220,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,220,.3)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:linear-gradient(to_bottom,transparent,black)] "
      />
 
      <div
        className=" pointer-events-none absolute bottom-[15%] left-1/2 h-px w-[70%] -translate-x-1/2 bg-[#00d9bd]/20 blur-[1px]"
      />

    </div>
  );
}