'use client'

import { useMemo } from 'react'
import { createNoise2D } from 'simplex-noise'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as three from 'three'

import { OrbitControls } from '@react-three/drei'

const WIDTH = 150
const HEIGHT = 600
const SCALAR = 50

// const simplex = createNoise2D(Math.random)
const simplex = createNoise2D(() => 0.2)

function Scene() {
  const waterMap = useLoader(TextureLoader, '/images/water-bump.jpg')
  waterMap.repeat.set(20, 40)
  waterMap.wrapS = waterMap.wrapT = three.RepeatWrapping
  waterMap.anisotropy = 4
  const dirtMap = useLoader(TextureLoader, '/images/dirt.jpg')

  const f32array = useMemo(() => {
    const terrain: any = []
    for (let x = 0; x < WIDTH; x++) {
      const inner = []
      for (let y = 0; y < HEIGHT; y++) {
        let val = simplex(x / SCALAR, y / SCALAR) // between -1.0 and 1.0
        val = val * 10.0
        inner.push(val)
      }
      terrain.push(inner)
    }
    // setTerrain(terrain)
    //terrain = arr

    const vertexArray: any = []
    for (let x = 0; x < WIDTH - 1; x++) {
      for (let y = 0; y < HEIGHT - 1; y++) {
        const newVertices = [
          x,
          y,
          terrain[x][y],
          x + 1,
          y,
          terrain[x + 1][y],
          x,
          y + 1,
          terrain[x][y + 1],

          x + 1,
          y + 1,
          terrain[x + 1][y + 1],
          x,
          y + 1,
          terrain[x][y + 1],
          x + 1,
          y,
          terrain[x + 1][y],
        ]

        newVertices.forEach(v => vertexArray.push(v))
      }
    }

    return new Float32Array(vertexArray)
  }, [])

  return (
    <>
      <mesh position={[WIDTH / 2.0, 0, 0.2]} scale={[10, 10, 1]} rotation={[Math.PI / 2.25, 0, 0]}>
        <planeGeometry args={[WIDTH, HEIGHT]} />
        <meshStandardMaterial
          map={waterMap}
          bumpMap={waterMap}
          bumpScale={0.2}
          color={'#438ad7'}
          opacity={0.1}
          transparent
          side={three.DoubleSide}
        />
      </mesh>
      <mesh rotation={[Math.PI / 7.5, 0, 0]}>
        <bufferGeometry attach='geometry'>
          <bufferAttribute attach='attributes-position' array={f32array} count={f32array.length / 3} itemSize={3} />
        </bufferGeometry>
        <meshStandardMaterial
          map={dirtMap}
          bumpMap={dirtMap}
          transparent
          opacity={0.9}
          bumpScale={0.9}
          color={'brown'}
          side={three.DoubleSide}
        />
      </mesh>
      <perspectiveCamera fov={75} near={0.1} far={100} aspect={window.innerWidth / window.innerHeight} />
      <OrbitControls />
      <pointLight position={[(2 * WIDTH) / 3, HEIGHT / 2, 50]} />
      <ambientLight />
    </>
  )
}

export default function TerrainScreen() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}

//light.position.set(2 * WIDTH / 3, HEIGHT / 2, 50)
