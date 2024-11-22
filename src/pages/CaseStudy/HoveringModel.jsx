import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import "./HoveringModel.scss";

// Custom shader material for the glow effect
const glowShader = {
  uniforms: {
    tDiffuse: { value: null },
    color: { value: new THREE.Color(0xff0000) },
    intensity: { value: 200000.0 },
    outerRim: { value: 0.5 },
    outerRim2: { value: 0.2 }
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform vec3 color;
    uniform float intensity;
    uniform float outerRim;
    uniform float outerRim2;
    
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      float fresnel = dot(normal, viewDir);
      float glowFactor = pow(1.0 - fresnel, 3.0);
      
      // Apply outer rim effects
      float rim = smoothstep(0.0, outerRim, 1.0 - fresnel);
      float rim2 = smoothstep(0.0, outerRim2, 1.0 - fresnel);
      
      vec3 glow = color * intensity * (glowFactor + rim + rim2);
      gl_FragColor = vec4(glow, 1.0);
    }
  `
};

// Create custom shader material
class GlowMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: THREE.UniformsUtils.clone(glowShader.uniforms),
      vertexShader: glowShader.vertexShader,
      fragmentShader: glowShader.fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }
}

// Extend Three.js materials
extend({ GlowMaterial });

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("/models/air.glb");

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Apply materials
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Cylinder013" || child.parent.name === "crean") {
            // Create base material for the glowing part
            const baseMaterial = new THREE.MeshStandardMaterial({
              color: new THREE.Color(0xfF5880),
              emissive: new THREE.Color(0xfF5880),
              emissiveIntensity: 5,
              metalness: 5,
              roughness: 0.0,
            });

            // Create glow material
            const glowMat = new GlowMaterial();
            glowMat.uniforms.color.value = new THREE.Color(0xf880);
            glowMat.uniforms.intensity.value = 10000;
            glowMat.uniforms.outerRim.value = 0.5;
          

            // Apply materials
            child.material = baseMaterial;
            
            // Create a clone of the mesh for the glow effect
            const glowMesh = child.clone();
            glowMesh.material = glowMat;
            glowMesh.scale.multiplyScalar(1.05);
            child.parent.add(glowMesh);
          } else {
            // Default material for other meshes
            child.material = new THREE.MeshStandardMaterial({
              color: child.material.color,
              metalness: 0.5,
              roughness: 0.3
            });
          }
        }
      });
    }
  }, []);

  useFrame(({ clock }) => {
    if (modelRef.current) {
      const time = clock.getElapsedTime();
      const amplitude = 0.1;
      const frequency = 2;
      modelRef.current.position.y = (-5 + Math.sin(time * frequency) * amplitude);
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={30} 
      position={[-0.5, 0, 2]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
};

const HoveringModel = () => {
  return (
    <div className="hovering-model-container">
      <Canvas
        shadows
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={{ position: [0, 0, 0], fov: 30 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <spotLight
          position={[-10, 10, -5]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
        />
        <pointLight 
          position={[0, 0, 0]} 
          intensity={4} 
          color={0xff0000} 
          distance={50}
        />
        <Environment preset="night"  />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default HoveringModel;