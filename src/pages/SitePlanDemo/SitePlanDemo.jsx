import React, { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { ArrowUpRight, MousePointer2, RotateCw } from "lucide-react";
import styles from "./SitePlanDemo.module.scss";

// -------------------------------------------------------------------------
// Demo data — linked to real case-study routes already in the app so the
// hotspots go somewhere meaningful instead of dead links.
// -------------------------------------------------------------------------
const PROJECTS = [
  { id: "nexora", name: "Nexora", type: "Commercial", position: [-3.2, 0, -1.8], height: 1.6, color: "#E5348C", link: "/work/nexora" },
  { id: "hylete", name: "Hylete", type: "Hospitality", position: [-1.6, 0, -3.4], height: 1.1, color: "#3ECF8E", link: "/work/hylete" },
  { id: "bms", name: "BMS", type: "Institutional", position: [1.4, 0, -3.0], height: 1.9, color: "#5B8CFF", link: "/work/bms" },
  { id: "purus", name: "Purus", type: "Residential", position: [3.0, 0, -1.0], height: 1.3, color: "#FFB84D", link: "/work/purus" },
  { id: "alankar", name: "Alankar", type: "Residential", position: [3.4, 0, 1.6], height: 2.2, color: "#E5348C", link: "/work/alankar" },
  { id: "necc", name: "NECC", type: "Institutional", position: [1.2, 0, 3.2], height: 1.5, color: "#3ECF8E", link: "/work/necc" },
  { id: "hms", name: "HMS", type: "Healthcare", position: [-1.4, 0, 3.0], height: 1.7, color: "#5B8CFF", link: "/work/hms" },
  { id: "bosch", name: "Bosch", type: "Industrial", position: [-3.4, 0, 0.8], height: 1.0, color: "#FFB84D", link: "/work/bosch" },
];

// -------------------------------------------------------------------------
// Procedural low-poly terrain — no external model required for the demo.
// Gently rolling ground that flattens toward the centre plaza, with a
// green -> sand vertex-color gradient standing in for landscaping/paths.
// -------------------------------------------------------------------------
function Terrain() {
  const geometry = useMemo(() => {
    const size = 14;
    const segments = 90;
    const geo = new THREE.PlaneGeometry(size, size, segments, segments);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const green = new THREE.Color("#1f6b4a");
    const sand = new THREE.Color("#d9cca3");

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.sqrt(x * x + z * z);

      const noise =
        Math.sin(x * 0.6) * Math.cos(z * 0.5) * 0.18 +
        Math.sin(x * 1.3 + z * 0.7) * 0.06;
      const flatten = THREE.MathUtils.smoothstep(dist, 0, 3.6);
      pos.setY(i, noise * flatten);

      const t = THREE.MathUtils.clamp(1 - flatten * 1.15, 0, 1);
      const c = green.clone().lerp(sand, t);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh geometry={geometry} receiveShadow>
      <meshStandardMaterial vertexColors roughness={0.95} metalness={0} />
    </mesh>
  );
}

// -------------------------------------------------------------------------
// A single site-plan marker: a simple massing block + a floating HTML
// hotspot that reveals the project card on hover/focus and navigates to
// the real case-study route on click.
// -------------------------------------------------------------------------
function Building({ project, hovered, onHover, onLeave }) {
  const navigate = useNavigate();
  const meshRef = useRef();
  const isHovered = hovered === project.id;
  const isDimmed = hovered && !isHovered;

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    const bob = Math.sin(t * 1.4 + project.position[0]) * 0.02;
    meshRef.current.position.y = project.height / 2 + bob;
    const targetScale = isHovered ? 1.08 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.15
    );
  });

  const go = () => navigate(project.link);

  return (
    <group position={project.position}>
      <mesh
        ref={meshRef}
        position={[0, project.height / 2, 0]}
        castShadow
        receiveShadow
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
          onHover(project.id);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "auto";
          onLeave();
        }}
        onClick={(e) => {
          e.stopPropagation();
          go();
        }}
      >
        <boxGeometry args={[0.7, project.height, 0.7]} />
        <meshStandardMaterial
          color={project.color}
          roughness={0.35}
          metalness={0.15}
          emissive={project.color}
          emissiveIntensity={isHovered ? 0.4 : 0.06}
          transparent
          opacity={isDimmed ? 0.55 : 1}
        />
      </mesh>

      {/* thin roof cap for a touch of architectural detail */}
      <mesh position={[0, project.height + 0.02, 0]} receiveShadow>
        <boxGeometry args={[0.76, 0.04, 0.76]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} opacity={isDimmed ? 0.55 : 1} transparent />
      </mesh>

      <Html
        position={[0, project.height + 0.55, 0]}
        center
        distanceFactor={8}
        occlude={false}
        style={{ pointerEvents: "auto" }}
      >
        <div
          className={`${styles.hotspot} ${isHovered ? styles.hotspotActive : ""}`}
          onPointerOver={() => onHover(project.id)}
          onPointerOut={onLeave}
          onClick={go}
          role="button"
          tabIndex={0}
          aria-label={`View ${project.name} project`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              go();
            }
          }}
        >
          <span
            className={styles.hotspotDot}
            style={{ background: project.color, boxShadow: `0 0 0 4px ${project.color}33` }}
          />
          <div className={styles.hotspotCard}>
            <p className={styles.hotspotType}>{project.type}</p>
            <h4>{project.name}</h4>
            <span className={styles.hotspotCta}>
              View Project <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </Html>
    </group>
  );
}

// -------------------------------------------------------------------------
// Scene: lighting, terrain, markers, ground shadow, orbit controls.
// Auto-rotates gently when idle, pauses while the user is interacting.
// -------------------------------------------------------------------------
function Scene({ hovered, setHovered }) {
  const [autoRotate, setAutoRotate] = useState(true);
  const resumeTimer = useRef(null);

  useEffect(() => () => clearTimeout(resumeTimer.current), []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[6, 9, 4]}
        intensity={1.35}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />
      <hemisphereLight args={["#bcd9ff", "#2b2016", 0.4]} />

      <Terrain />

      {PROJECTS.map((project) => (
        <Building
          key={project.id}
          project={project}
          hovered={hovered}
          onHover={setHovered}
          onLeave={() => setHovered(null)}
        />
      ))}

      <ContactShadows
        position={[0, -0.01, 0]}
        opacity={0.4}
        scale={14}
        blur={2.4}
        far={4}
      />

      <OrbitControls
        makeDefault
        enablePan={false}
        minDistance={5.5}
        maxDistance={13}
        minPolarAngle={0.55}
        maxPolarAngle={1.3}
        autoRotate={autoRotate}
        autoRotateSpeed={0.55}
        enableDamping
        dampingFactor={0.08}
        onStart={() => {
          setAutoRotate(false);
          clearTimeout(resumeTimer.current);
        }}
        onEnd={() => {
          resumeTimer.current = setTimeout(() => setAutoRotate(true), 4500);
        }}
      />
    </>
  );
}

function CanvasLoader() {
  return (
    <Html center>
      <div className={styles.loader}>
        <span className={styles.loaderRing} />
        <p>Loading site plan…</p>
      </div>
    </Html>
  );
}

// -------------------------------------------------------------------------
// Page
// -------------------------------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const FadeIn = ({ children, className, delay = 0 }) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export default function SitePlanDemo() {
  const [hovered, setHovered] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const activeProject = PROJECTS.find((p) => p.id === hovered);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <FadeIn className={styles.heroText}>
          <p className={styles.eyebrow}>Concept Demo — Interactive Site Plan</p>
          <h1>
            Explore the masterplan <span>in 3D</span>.
          </h1>
          <p className={styles.heroSub}>
            Drag to orbit, hover a plot to preview it, click a marker to open
            the full project. Built with a procedural terrain — swap in a
            real site model or GLTF whenever it's ready.
          </p>
        </FadeIn>
      </section>

      <FadeIn className={styles.canvasCard} delay={0.1}>
        <div
          className={styles.canvasWrap}
          onPointerDown={() => setHasInteracted(true)}
        >
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 5.4, 9], fov: 42 }}
            gl={{ antialias: true }}
          >
            <color attach="background" args={["#0e1a14"]} />
            <fog attach="fog" args={["#0e1a14", 9, 20]} />
            <Suspense fallback={<CanvasLoader />}>
              <Scene hovered={hovered} setHovered={setHovered} />
            </Suspense>
          </Canvas>

          <div
            className={`${styles.dragHint} ${
              hasInteracted ? styles.dragHintHidden : ""
            }`}
          >
            <RotateCw size={14} />
            <span>Drag to rotate</span>
            <MousePointer2 size={14} />
            <span>Hover a plot</span>
          </div>

          <div
            className={`${styles.previewChip} ${
              activeProject ? styles.previewChipVisible : ""
            }`}
          >
            {activeProject && (
              <>
                <span
                  className={styles.previewDot}
                  style={{ background: activeProject.color }}
                />
                <div>
                  <p>{activeProject.type}</p>
                  <h4>{activeProject.name}</h4>
                </div>
              </>
            )}
          </div>
        </div>
      </FadeIn>

      <section className={styles.legendSection}>
        <FadeIn className={styles.legendHeading}>
          <h2>All plots on this masterplan</h2>
          <p>Same links as the hotspots above — for keyboard and screen-reader access.</p>
        </FadeIn>
        <div className={styles.legendGrid}>
          {PROJECTS.map((project, i) => (
            <FadeIn
              key={project.id}
              className={styles.legendCard}
              delay={i * 0.05}
            >
              <a
                href={project.link}
                className={styles.legendCardInner}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className={styles.legendDot}
                  style={{ background: project.color }}
                />
                <div>
                  <p className={styles.legendType}>{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <ArrowUpRight size={18} className={styles.legendArrow} />
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
