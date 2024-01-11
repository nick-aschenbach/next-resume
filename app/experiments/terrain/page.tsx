'use client'

import 'react-tooltip/dist/react-tooltip.css'
import { useEffect, useState } from 'react'
import { Tooltip } from 'react-tooltip'
import { createNoise2D } from 'simplex-noise'
import * as THREE from 'three'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'

const simplex = createNoise2D(Math.random)

export default function TerrainPage() {
  const [terrain, setTerrain] = useState()

  const WIDTH = 150
  const HEIGHT = 600
  const SCALAR = 50
  const SPEED = 0.15

  useEffect(() => {
    const arr = []
    for (let x = 0; x < WIDTH; x++) {
      const inner = []
      for (let y = 0; y < HEIGHT; y++) {
        let val = simplex(x / SCALAR, y / SCALAR) // between -1.0 and 1.0
        val = val * 10.0
        inner.push(val)
      }
      arr.push(inner)
    }
    // @ts-ignore
    setTerrain(arr)
  }, [])

  useEffect(() => {
    if (!terrain) return

    console.log('creating scene transforming grid into a mesh')

    // Create an empty scene
    const scene = new THREE.Scene()

    scene.fog = new THREE.Fog(0x303030, 50, 100)

    // Create a basic perspective camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 15
    camera.position.x = WIDTH / 2
    camera.position.y = -5
    camera.rotateX(Math.PI / 2 - 0.3)

    // Create a renderer with Antialiasing
    const renderer = new THREE.WebGLRenderer({ antialias: false })

    // Configure renderer clear color
    renderer.setClearColor('#303030')

    // Configure renderer size
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Append Renderer to DOM
    // @ts-ignore
    document.getElementById('terrainTarget').appendChild(renderer.domElement)

    const imgTexture = new THREE.TextureLoader().load('/images/water-bump.jpg')
    imgTexture.repeat.set(20, 100)
    imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping
    imgTexture.anisotropy = 4

    // water plane
    const waterGeom = new THREE.PlaneGeometry(WIDTH, HEIGHT)
    const waterMat = new THREE.MeshPhongMaterial({
      map: imgTexture,
      color: 'cornflowerblue',
      opacity: 0.5,
      transparent: true,
      specular: 0x0000ff,
      shininess: 25,
      reflectivity: 20.0,
    })
    const plane = new THREE.Mesh(waterGeom, waterMat)
    plane.translateX(WIDTH / 2)
    plane.translateY(HEIGHT / 2)
    plane.translateZ(0.2)
    scene.add(plane)

    // rendering wireframe
    const terrainGeom = new THREE.BufferGeometry()
    const vertexArray: any[] = []
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

    // itemSize = 3 because there are 3 values (components) per vertex
    terrainGeom.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(vertexArray), 3))
    terrainGeom.computeVertexNormals()

    const earthMat = new THREE.MeshPhongMaterial({
      color: 0x3c2817,
      specular: 0xffffff,
      shininess: 25,
      reflectivity: 20.0,
    })

    const mesh = new THREE.Mesh(terrainGeom, earthMat)
    scene.add(mesh)

    // lighting
    const light = new THREE.PointLight(0xffffff, 100, 100)
    light.position.set(WIDTH / 2, HEIGHT / 2, 30)
    scene.add(light)
    scene.add(new THREE.AmbientLight(0xffffff, 10))

    // Render Loop
    let requestId: number
    const render = function () {
      requestId = requestAnimationFrame(render)
      camera.position.y += SPEED
      if (camera.position.y > HEIGHT - 50) {
        light.position.y = HEIGHT / 10.0
        camera.position.y = 0.0
      }
      renderer.shadowMap.enabled = true
      renderer.render(scene, camera)

      light.position.y = camera.position.y + 20.0
    }

    render()

    return () => cancelAnimationFrame(requestId)
  }, [terrain])

  return (
    <div id='terrainTarget' className='experiment-background-dark experiment-background-size'>
      <div className={'fixed left-1 top-16 flex nav-link-dark'}>
        <IoMdArrowRoundBack size={24} />
        <Link href={'/experiments'} className={'pl-1'}>
          Back
        </Link>
      </div>
      <div style={{ position: 'fixed', left: 25, bottom: 50, color: 'yellow' }}>
        <p data-tooltip-id='react-tooltip' className={'cursor-pointer'}>
          Info
        </p>
        <Tooltip place='right' id={'react-tooltip'} className={'overflow-auto'}>
          This experiment uses a Simplex-Noise generator to create a 3D array of points. A lookup is performed at each
          <br />
          <code>(x, y)</code> point using the <code>simplex.noise2D</code> function to calculate the height
          <code>(z)</code>.
          <br />
          The Simplex Noise algorithm is similar to Perlin noise, but does not have some of the same directional
          artifacts. The grid of
          <br />
          <code>(x, y, z)</code> points is used to generate a THREE.js mesh. The lights and textured semi-transparent
          water are added for effect.
        </Tooltip>
      </div>
    </div>
  )
}
