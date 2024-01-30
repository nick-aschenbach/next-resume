'use client'

import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'
import Image from 'next/image'

import Looper from './looper'

export default function LoopingPage() {
  return (
    <div className={'experiment-background-dark experiment-background-size'}>
      <Looper speed={25} direction={'horizontal'}>
        <Image
          src={'/images/side-scroll.jpg'}
          alt={'Side scrolling'}
          width={3600}
          height={1200}
          className={'experiment-background-size side-scrolling-image'}
        />
      </Looper>
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
          Infinite side scrolling. Procedurally created content generated in photoshop / ChatGPT. <br />
          Content wrapping using content aware fill / AI generated fill.
        </Tooltip>
      </div>
    </div>
  )
}
