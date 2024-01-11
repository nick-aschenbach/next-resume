'use client'

import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'
import Bethesda from '@/app/experiments/starfield/bethesda'

export default function StarfieldPage() {
  return (
    <div className={'experiment-background-dark experiment-background-size'}>
      <Bethesda className={'h-full w-full'} />
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
        <Tooltip place='right' id='react-tooltip'>
          This experiment was a challenge to recreate part of the introduction screens in Starfield <br />
          produced by the Bethesda video game studio. It involved creating an SVG model of the logo <br />
          and then animating it using the Framer Motion library.
        </Tooltip>
      </div>
    </div>
  )
}
