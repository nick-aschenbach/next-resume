'use client'

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'

import * as city from '@/public/images/city.png'
import * as cityfar from '@/public/images/city-far.png'
import * as mountains from '@/public/images/mountains.png'
import * as sky from '@/public/images/sky.png'

import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'
import Image from 'next/image'
import { useAdaptiveTriggers } from '@/app/experiments/parallax/use-adaptive-triggers'
import { ParallaxConfig } from '@/app/experiments/parallax/adaptive-config'
import { useRef } from 'react'

// TODO: See https://medium.com/@other.world.html/adaptive-parallax-with-react-spring-e301c5740e6f for screen responsiveness
export default function ParallaxPage() {
  const width = useAdaptiveTriggers({})
  const parallax = useRef<IParallax>(null!)

  // @ts-ignore
  return (
    <div>
      <Parallax ref={parallax} pages={ParallaxConfig[width].pages} key={width} className='bg-black'>
        <ParallaxLayer
          offset={ParallaxConfig[width]['firstPage'].offset}
          speed={ParallaxConfig[width]['firstPage'].speed}
          factor={ParallaxConfig[width]['firstPage'].factor}
          horizontal
        >
          <Image src={sky} style={{ backgroundSize: 'cover' }} alt='dreary city scape' />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.1}
          speed={10}
          className='text-center lightBlueText text-3xl drop-shadow-md outline-gray-700'
        >
          <p>SCROLL DOWN 🔽</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={ParallaxConfig[width]['secondPage'].offset}
          speed={ParallaxConfig[width]['secondPage'].speed}
          factor={ParallaxConfig[width]['secondPage'].factor}
        >
          <Image src={mountains} style={{ backgroundSize: 'cover' }} alt='dreary city scape' />
        </ParallaxLayer>
        <ParallaxLayer
          offset={ParallaxConfig[width]['thirdPage'].offset}
          speed={ParallaxConfig[width]['thirdPage'].speed}
          factor={ParallaxConfig[width]['thirdPage'].factor}
        >
          <Image src={cityfar} style={{ backgroundSize: 'cover' }} alt='dreary city scape' />
        </ParallaxLayer>
        <ParallaxLayer
          offset={ParallaxConfig[width]['fourthPage'].offset}
          speed={ParallaxConfig[width]['fourthPage'].speed}
          factor={ParallaxConfig[width]['fourthPage'].factor}
        >
          <Image src={city} style={{ backgroundSize: 'cover' }} alt='dreary city scape' />
        </ParallaxLayer>
      </Parallax>
      <div className={'fixed left-1 top-16 flex nav-link-dark z-40'}>
        <IoMdArrowRoundBack size={24} />
        <Link href={'/experiments'} className={'pl-1'}>
          Back
        </Link>
      </div>
      <div style={{ position: 'fixed', left: 25, bottom: 50, color: 'yellow', zIndex: 40 }}>
        <p data-tooltip-id='react-tooltip' className={'cursor-pointer'}>
          Info
        </p>
        <Tooltip place='right' id='react-tooltip'>
          This experiment involved generating several images using Adobe Photoshops new generative AI feature.
          <br />
          The clouds, mountains, post apocalyptic city scape layers and fox were all procedurally generated. I used
          <br />
          the <code>@react-spring/parallax</code> library then to implement the parallax effect seen when you scroll
          down the page.
          <br />
          It achieves the sense of depth by changing the rate at which the images move depending on their perceived
          <br />
          distance (further things appear to move slower than ones that are closer).
        </Tooltip>
      </div>
    </div>
  )
}
