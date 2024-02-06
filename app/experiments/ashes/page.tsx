'use client'

import React, { useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { comic_commando } from '@/app/ui/fonts'
import Title from '@/app/experiments/ashes/title'
import * as banner from '@/public/images/ashes/top-banner.webp'
import * as dreamWounded from '@/public/images/ashes/dream-wounded.webp'
import * as dreamApparition from '@/public/images/ashes/dream-apparition.webp'
import * as dreamScream from '@/public/images/ashes/dream-screaming.webp'
import * as awake from '@/public/images/ashes/wokeup.webp'
import * as fridge from '@/public/images/ashes/fridge.webp'
import * as packing from '@/public/images/ashes/packing.webp'
import * as openDoor from '@/public/images/ashes/open-door.webp'
import * as cityStreetView from '@/public/images/ashes/city-street-view.jpg'
import * as missingPersons from '@/public/images/ashes/missing-persons.webp'
import * as school from '@/public/images/ashes/school.jpg'
import * as rooftopPicture from '@/public/images/ashes/rooftop-picture.webp'
import * as militaryBuddies from '@/public/images/ashes/military-buddies.webp'

const CHAPTER1: { text: string; image: any }[] = [
  {
    text: 'It is the late afternoon after a bloody battle. There were no victors.\n\nOdd, Marcus reflects, there are almost no wounded. The day draws to a close.',
    image: dreamWounded,
  },
  {
    text: 'The night sky is shrouded and mist wraps Marcus in a cold blanket.\n\nAn apparition rises from the earth. It starts reaching for Marcus.',
    image: dreamApparition,
  },
  {
    text: "Marcus turns to run, but his feet are locked in place.\n\nThe apparition puts his hands around Marcus's neck and he starts to scream.",
    image: dreamScream,
  },
  {
    text: 'Marcus wakes up in a cold sweat. He exhales slowly.\n\nFuck... It was just a dream.',
    image: awake,
  },
  {
    text: 'A few hours later he takes stock of the refrigerator. He has had enough of choking down moldy food.\n\nMarcus made up his mind. It is well past time to leave.',
    image: fridge,
  },
  {
    text: 'Marcus methodically packs his backpack, his movements deliberate under the soft glow of the lantern. With a final glance around his underground shelter, he braces for the uncertain world outside.',
    image: packing,
  },
  {
    text: 'Marcus grips the cold metal handle and pulls open the shelter door. A rush of blinding light floods the darkness.\n\nHe takes his first step into the unknown.',
    image: openDoor,
  },
]

const CHAPTER2: { text: string; image: any }[] = [
  {
    text: 'Marcus walks past a weathered wall covered people loved and lost.\n\nHis gaze lingers on the hopeful and desperate messages.',
    image: missingPersons,
  },
  {
    text: 'The swing creaks in the gentle breeze. Whispering tales of silenced laughter.\n\nMarcus thinks, children were happy here. Once.',
    image: school,
  },
  {
    text: 'After an afternoon of scavenging, Marcus climbs to the roof for a better vantage point and to rest.\n\nHe pulls out an old picture.',
    image: rooftopPicture,
  },
  {
    text: 'Marcus traces the edges of an old photograph. He allows himself a small, wistful smile.\n\nThere were good times before the war.',
    image: militaryBuddies,
  },
]

export default function AshesPage() {
  const [width, setWidth] = useState<number>()
  const [fontSize, setFontSize] = useState<number>()

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    const handleResize = () => {
      setWidth(window.innerWidth)
      setFontSize(window.innerWidth / 30)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderSequence = (chapter = [], initialOffset: number) => {
    return chapter.map(({ text, image }, index) => {
      const textAlign = index % 2 === 0 ? 'left' : 'right'
      const leftOrRightText = index % 2 === 0 ? { right: '20px' } : { left: '20px' }
      const leftOrRightImage = index % 2 === 0 ? { left: '20px' } : { right: '20px' }
      const offset = index + 1.5 + initialOffset

      return (
        <React.Fragment key={index}>
          <ParallaxLayer offset={offset + 0.1} speed={Math.random() / 2 + 0.3}>
            <div
              className={`${comic_commando.className} text-white`}
              style={{
                fontSize: `${fontSize}px`,
                textAlign,
                position: 'absolute',
                ...leftOrRightText,
                width: '45%',
                paddingRight: '20px',
                paddingTop: '5%',
                whiteSpace: 'pre-wrap',
              }}
            >
              {text}
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={offset} speed={Math.random() / 3 + 0.3}>
            <div style={{ padding: '1px' }}></div>
            <Image
              src={image}
              alt={text}
              style={{
                padding: '10px',
                paddingLeft: '10px',
                background: 'white',
                width: '45%',
                marginTop: '5%',
                position: 'absolute',
                ...leftOrRightImage,
              }}
            />
          </ParallaxLayer>
        </React.Fragment>
      )
    })
  }

  return (
    <div className={'experiment-background-dark experiment-background-size'}>
      <div className={'fixed left-1 top-16 flex nav-link-dark'}>
        <IoMdArrowRoundBack size={24} />
        <Link href={'/experiments'} className={'pl-1'}>
          Back
        </Link>
      </div>
      <Parallax pages={CHAPTER1.length + CHAPTER2.length + 3} className='bg-black'>
        <ParallaxLayer offset={0} speed={0.05} factor={1}>
          <Image src={banner} style={{ backgroundSize: 'cover' }} alt='dreary city scape with marcus and ella' />
        </ParallaxLayer>
        <ParallaxLayer offset={0.0} speed={0.5} factor={1}>
          <Title
            color='#323'
            style={{
              marginLeft: '25%',
              transform: 'scale(0.5)',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.0} speed={0.5} factor={1}>
          <div className={`${comic_commando.className} text-white`} style={{ fontSize: `${(fontSize || 20) * 2}px` }}>
            Our story begins with Marcus...
          </div>
        </ParallaxLayer>
        {/*@ts-ignore*/}
        {renderSequence(CHAPTER1, 0)}
        <ParallaxLayer offset={CHAPTER1.length + 1.5} speed={0.1}>
          <Image
            src={cityStreetView}
            style={{ backgroundSize: 'cover' }}
            alt='Marcus views the city in the distance with clouds overhead'
          />
        </ParallaxLayer>
        <ParallaxLayer offset={CHAPTER1.length + 2} speed={0.3}>
          <div
            style={{
              fontSize: `${(fontSize || 20) * 2}px`,
            }}
            className={`${comic_commando.className} text-white`}
          >
            Stepping out into the street, Marcus&apos;s eyes widen at the sight. A silent graveyard.
          </div>
        </ParallaxLayer>
        {/*@ts-ignore*/}
        {renderSequence(CHAPTER2, CHAPTER1.length + 1.5)}
      </Parallax>
    </div>
  )
}
