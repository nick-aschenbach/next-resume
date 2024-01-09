'use client'

import * as Mandelbrot from '../../lib/mandelbrot/utilities'
import gradients from '@/app/ui/gradients'
import { useState, useEffect } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'

const MAX_ITERATIONS = 100

export default function MandelbrotPage() {
  const [array, setArray] = useState()
  const [gradient, setGradient] = useState('caribbeanBlues')

  let divisor: number, calculateXPosition: (arg0: number) => any, calculateYPosition: (arg0: number) => any

  if (typeof window !== 'undefined') {
    divisor = window.innerHeight < window.innerWidth ? window.innerHeight : window.innerWidth
    calculateXPosition = (xi: number) => (xi / divisor) * 4 - 3.5
    calculateYPosition = (yi: number) => -(yi / divisor) * 4 + 2
  }

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    setTimeout(() => {
      console.time('calculate')
      const temp = []
      for (let xi = 0; xi < width; xi++) {
        const line = []
        for (let yi = 0; yi < height; yi++) {
          // calculate position
          const x = calculateXPosition(xi)
          const y = calculateYPosition(yi)
          line.push(Mandelbrot.iterate(x, y, MAX_ITERATIONS))
        }
        temp.push(line)
      }
      // @ts-ignore
      setArray(temp)
      console.timeEnd('calculate')
    })
    // @ts-ignore
  }, [])

  useEffect(() => {
    if (!array) return
    const width = window.innerWidth
    const height = window.innerHeight

    const canvas = document.getElementById('mainCanvas') as HTMLCanvasElement
    if (!canvas) return
    canvas.setAttribute('width', String(width))
    canvas.setAttribute('height', String(height))

    const drawingContext = canvas.getContext('2d')
    if (!drawingContext) return
    drawingContext.globalCompositeOperation = 'screen'

    // clear the screen
    drawingContext.clearRect(0, 0, width, height)

    console.time('draw')
    // @ts-ignore
    const colors = gradients[gradient]
    for (let xi = 0; xi < width; xi++) {
      for (let yi = 0; yi < height; yi++) {
        const iterations = array[xi][yi]
        drawingContext.fillStyle = colors[iterations * 6]
        if (iterations < 0) drawingContext.fillStyle = 'black'
        drawingContext.fillRect(xi, yi, 1, 1)
      }
    }
    console.timeEnd('draw')
  }, [array, gradient])

  return (
    <div className={'experiment-background-height'}>
      <canvas id='mainCanvas' className={'w-full h-full'} />
      <div className={'fixed top-16 right-2'}>
        <label htmlFor='gradient' className={'text-yellow-300 pr-5'}>
          Choose a color gradient
        </label>
        <select
          name='gradient'
          id='gradient'
          value={gradient}
          onChange={event => setGradient(event.target.value)}
          className={'bg-black text-yellow-300 border-1 border-amber-50'}
        >
          {Object.keys(gradients).map(key => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <div className={'fixed left-1 top-16 flex nav-link-dark'}>
        <IoMdArrowRoundBack size={24} />
        <Link href={'/experiments'} className={'pl-1'}>
          Back
        </Link>
      </div>
    </div>
  )
}
