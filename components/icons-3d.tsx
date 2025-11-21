"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef, useEffect } from "react"

// 3D Icon Components
export function Icon3D({ type, size = 2 }: { type: string; size?: number }) {
  const ref = useRef<any>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.01
    }
  })

  const renderIcon = () => {
    switch (type) {
      case "community":
        return (
          <group ref={ref}>
            <mesh position={[-0.6, 0.4, 0]}>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
            <mesh position={[0.6, 0.4, 0]}>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
            <mesh position={[0, -0.2, 0]}>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
            <mesh position={[0, -0.8, 0]}>
              <boxGeometry args={[1.5, 0.4, 0.4]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
          </group>
        )
      case "link":
        return (
          <group ref={ref}>
            <mesh position={[-0.5, 0.5, 0]}>
              <torusGeometry args={[0.3, 0.1, 16, 32]} />
              <meshStandardMaterial color="#078f38" />
            </mesh>
            <mesh position={[0.5, 0.5, 0]}>
              <torusGeometry args={[0.3, 0.1, 16, 32]} />
              <meshStandardMaterial color="#078f38" />
            </mesh>
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[1.2, 0.15, 0.15]} />
              <meshStandardMaterial color="#078f38" />
            </mesh>
          </group>
        )
      case "eye":
        return (
          <group ref={ref}>
            <mesh position={[-0.4, 0.3, 0]}>
              <sphereGeometry args={[0.25, 32, 32]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
            <mesh position={[-0.4, 0.3, 0.2]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshStandardMaterial color="#0a0e27" />
            </mesh>
            <mesh position={[0.4, 0.3, 0]}>
              <sphereGeometry args={[0.25, 32, 32]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
            <mesh position={[0.4, 0.3, 0.2]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshStandardMaterial color="#0a0e27" />
            </mesh>
            <mesh position={[0, -0.5, 0]}>
              <boxGeometry args={[0.8, 0.2, 0.15]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
          </group>
        )
      case "building":
        return (
          <group ref={ref}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.6, 1.2, 0.6]} />
              <meshStandardMaterial color="#078f38" />
            </mesh>
            <mesh position={[-0.3, 0.3, 0.31]}>
              <boxGeometry args={[0.2, 0.2, 0.05]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
            <mesh position={[0.3, 0.3, 0.31]}>
              <boxGeometry args={[0.2, 0.2, 0.05]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
          </group>
        )
      case "lightning":
        return (
          <group ref={ref}>
            <mesh position={[0, 0.3, 0]}>
              <boxGeometry args={[0.15, 0.6, 0.15]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
            <mesh position={[0.3, -0.1, 0]}>
              <boxGeometry args={[0.15, 0.3, 0.15]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
            <mesh position={[-0.3, -0.4, 0]}>
              <boxGeometry args={[0.15, 0.3, 0.15]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
          </group>
        )
      case "book":
        return (
          <group ref={ref}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.5, 0.8, 0.3]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
            <mesh position={[0, 0, 0.16]}>
              <boxGeometry args={[0.48, 0.78, 0.05]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
            <mesh position={[-0.1, 0.2, 0.2]}>
              <boxGeometry args={[0.08, 0.4, 0.01]} />
              <meshStandardMaterial color="#078f38" />
            </mesh>
          </group>
        )
      case "palette":
        return (
          <group ref={ref}>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
            <mesh position={[-0.3, 0, 0.06]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshStandardMaterial color="#078f38" />
            </mesh>
            <mesh position={[0.3, 0, 0.06]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
            <mesh position={[0, 0.3, 0.06]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
          </group>
        )
      case "shopping":
        return (
          <group ref={ref}>
            <mesh position={[0, 0.2, 0]}>
              <boxGeometry args={[0.6, 0.6, 0.4]} />
              <meshStandardMaterial color="#078f38" />
            </mesh>
            <mesh position={[-0.4, 0.7, 0]}>
              <boxGeometry args={[0.2, 0.4, 0.3]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
            <mesh position={[0.4, 0.7, 0]}>
              <boxGeometry args={[0.2, 0.4, 0.3]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
          </group>
        )
      case "hospital":
        return (
          <group ref={ref}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.7, 0.9, 0.5]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
            <mesh position={[0, 0, 0.26]}>
              <boxGeometry args={[0.2, 0.4, 0.05]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
            <mesh position={[0, 0.3, 0.26]}>
              <boxGeometry args={[0.35, 0.1, 0.05]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
          </group>
        )
      case "newspaper":
        return (
          <group ref={ref}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.6, 0.8, 0.05]} />
              <meshStandardMaterial color="#ffd700" />
            </mesh>
            <mesh position={[0, 0.2, 0.03]}>
              <boxGeometry args={[0.55, 0.2, 0.02]} />
              <meshStandardMaterial color="#078f38" />
            </mesh>
            <mesh position={[-0.2, -0.1, 0.03]}>
              <boxGeometry args={[0.25, 0.3, 0.02]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
            <mesh position={[0.2, -0.1, 0.03]}>
              <boxGeometry args={[0.25, 0.3, 0.02]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
          </group>
        )
      case "filmstrip":
        return (
          <group ref={ref}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.8, 0.5, 0.1]} />
              <meshStandardMaterial color="#078f38" />
            </mesh>
            <mesh position={[-0.3, 0, 0.06]}>
              <boxGeometry args={[0.15, 0.4, 0.05]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
            <mesh position={[0, 0, 0.06]}>
              <boxGeometry args={[0.15, 0.4, 0.05]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
            <mesh position={[0.3, 0, 0.06]}>
              <boxGeometry args={[0.15, 0.4, 0.05]} />
              <meshStandardMaterial color="#fa7921" />
            </mesh>
          </group>
        )
      default:
        return (
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="#fa7921" />
          </mesh>
        )
    }
  }

  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 2.5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      {renderIcon()}
      <OrbitControls autoRotate autoRotateSpeed={4} enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

// Wrapper component for easier use
export function Icon3DDisplay({ type, size = "w-12 h-12" }: { type: string; size?: string }) {
  return (
    <div className={`${size} rounded-lg overflow-hidden`}>
      <Icon3D type={type} />
    </div>
  )
}
