'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { IoMdArrowRoundBack } from 'react-icons/io'

import FireworkJetParticle from '@/app/lib/firework/firework-jet-particle'
import BurstParticle from '@/app/lib/firework/burst-particle'
import FireworkParticle from '@/app/lib/firework/firework-particle'

import gradients from '@/app/ui/gradients'

const MAX_PARTICLES = 250

export default function Firework() {
  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    const canvas = document.getElementById('mainCanvas')
    if (!canvas) return
    canvas.setAttribute('width', String(width))
    canvas.setAttribute('height', String(height))

    const firework = new FireworkParticle(width / 2, height - 10)
    const particles = new Set()

    const timer = setInterval(() => {
      // @ts-ignore
      const drawingContext = canvas.getContext('2d')
      drawingContext.globalCompositeOperation = 'screen'

      // clear the screen
      drawingContext.clearRect(0, 0, width, height)

      // move the firework
      firework.update()
      if (firework.die) {
        const keys = Object.keys(gradients)
        const gradientName = keys[Math.floor(Math.random() * keys.length)]

        for (let i = 0; i < MAX_PARTICLES; i++) {
          particles.add(new BurstParticle(firework.x, firework.y, gradientName))
        }
      }
      firework.render(drawingContext)

      particles.add(new FireworkJetParticle(firework.x, firework.y))

      // render each particle and keep track of those that need to be cleared
      const particlesToClear: any[] = []
      particles.forEach((particle: any) => {
        particle.update()
        particle.render(drawingContext)
        if (particle.y > height) particlesToClear.push(particle)
      })

      particlesToClear.forEach(particle => particles.delete(particle))
      if (firework.die) firework.reset()
    }, 18)

    return () => clearTimeout(timer)
  })

  return (
    <div className='App experiment-background-dark'>
      <header className='App-header'>
        <canvas id='mainCanvas' />
      </header>
      <div className={'fixed left-1 top-16 flex nav-link-dark'}>
        <IoMdArrowRoundBack size={24} />
        <Link href={'/experiments'} className={'pl-1'}>
          Back
        </Link>
      </div>
      <div className={'fixed left-1 bottom-1 nav-link-dark'}>
        <Link
          href='http://nick-aschenbach.github.io/blog/2014/07/18/generating-code-from-color-gradients'
          target='_blank'
        >
          See related blog post
        </Link>
      </div>
    </div>
  )
}
