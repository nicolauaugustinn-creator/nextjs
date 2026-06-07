"use client"

import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function Tree3D() {
  const groupRef = useRef<THREE.Group>(null)

  // Create main tree structure
  useEffect(() => {
    if (!groupRef.current) return

    const group = groupRef.current
    const material = new THREE.MeshStandardMaterial({
      color: "#fcd34d",
      emissive: "#f59e0b",
      emissiveIntensity: 0.8,
      metalness: 0.3,
      roughness: 0.4
    })

    const trunkGeometry = new THREE.CylinderGeometry(0.4, 0.5, 2, 16)
    const trunk = new THREE.Mesh(trunkGeometry, material)
    trunk.position.y = -1.5
    trunk.castShadow = true
    group.add(trunk)

    // Create branches
    const createBranch = (x: number, y: number, z: number, length: number, angle: number) => {
      const branchGeometry = new THREE.CylinderGeometry(0.15, 0.08, length, 12)
      const branch = new THREE.Mesh(branchGeometry, material)
      branch.position.set(x, y, z)
      branch.rotation.z = angle
      branch.castShadow = true
      group.add(branch)
    }

    // Left branches
    createBranch(-0.8, 0.5, 0, 1.2, Math.PI / 6)
    createBranch(-1.5, 1.2, 0, 1, Math.PI / 5)

    // Right branches
    createBranch(0.8, 0.5, 0, 1.2, -Math.PI / 6)
    createBranch(1.5, 1.2, 0, 1, -Math.PI / 5)

    // Top branches
    createBranch(0, 2, 0, 0.8, 0)

    // Create leaves using individual spheres
    const leafGeometry = new THREE.IcosahedronGeometry(0.2, 2)
    const leafPositions = [
      [-1, 1.5, 0.5],
      [-1.5, 1.8, 0.3],
      [-0.5, 1.8, -0.4],
      [1, 1.5, 0.5],
      [1.5, 1.8, 0.3],
      [0.5, 1.8, -0.4],
      [0, 2.2, 0.2],
      [-0.3, 2.3, 0.5],
      [0.3, 2.3, 0.5],
      [-1.2, 0.8, -0.3],
      [1.2, 0.8, -0.3],
      [0, 0.5, 0.3]
    ]

    leafPositions.forEach((pos, i) => {
      const leaf = new THREE.Mesh(leafGeometry, material)
      leaf.position.set(pos[0], pos[1], pos[2])
      leaf.scale.set(0.8, 1, 0.8)
      leaf.castShadow = true
      leaf.userData.originalY = leaf.position.y
      leaf.userData.index = i
      group.add(leaf)
    })

    // Create roots
    const rootMaterial = new THREE.MeshStandardMaterial({
      color: "#d97706",
      emissive: "#b45309",
      emissiveIntensity: 0.6,
      metalness: 0.2,
      roughness: 0.5
    })

    const rootGeometry = new THREE.CylinderGeometry(0.12, 0.08, 1, 8)
    const rootPositions = [
      [-0.6, -2.2, 0],
      [0.6, -2.2, 0],
      [0, -2.2, -0.6],
      [0, -2.2, 0.6]
    ]

    rootPositions.forEach(pos => {
      const root = new THREE.Mesh(rootGeometry, rootMaterial)
      root.position.set(pos[0], pos[1], pos[2])
      root.castShadow = true
      group.add(root)
    })

    // Add glow effect sphere
    const glowGeometry = new THREE.IcosahedronGeometry(4, 32)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: "#fcd34d",
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    glow.position.y = 0
    group.add(glow)
  }, [])

  // Animation loop
  useFrame(() => {
    if (!groupRef.current) return

    const group = groupRef.current
    const time = Date.now() * 0.001

    // Rotate entire tree slowly
    group.rotation.y = time * 0.3

    // Animate leaves bobbing
    group.children.forEach((child, index) => {
      if (child instanceof THREE.Mesh && child.geometry instanceof THREE.IcosahedronGeometry) {
        if (child.userData.originalY !== undefined) {
          child.position.y = child.userData.originalY + Math.sin(time * 1.5 + index) * 0.2
          child.rotation.x += 0.005
          child.rotation.z += 0.003
        }
      }
    })

    // Pulse glow
    const glowMesh = group.children.find(
      child => child instanceof THREE.Mesh && child.geometry instanceof THREE.IcosahedronGeometry && child.geometry.parameters.radius > 3
    )
    if (glowMesh && glowMesh instanceof THREE.Mesh) {
      const material = glowMesh.material as THREE.MeshBasicMaterial
      material.opacity = 0.05 + Math.sin(time * 2) * 0.03
    }
  })

  return <group ref={groupRef} position={[0, 0, 0]} />
}
