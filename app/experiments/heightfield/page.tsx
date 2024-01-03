'use client'

import Link from 'next/link'
import { IoMdArrowRoundBack } from 'react-icons/io'
import ReactPlayer from 'react-player'
import { Suspense, useEffect, useState } from 'react'

export default function Heightfield() {
  const [renderPlayer, setRenderPlayer] = useState(false)

  useEffect(() => {
    setRenderPlayer(true)
  }, [])

  const getPlayer = () => {
    if (!renderPlayer) return <div className={'h-screen'} />

    return (
      <div className={'grid h-screen justify-center items-center'}>
        <ReactPlayer url={'https://www.youtube.com/embed/0cVVC1rkCho'} width={'800px'} height={'600px'} playing />
      </div>
    )
  }

  return (
    <div className='experiment-background-dark'>
      {getPlayer()}
      <div className={'fixed left-1 top-16 flex nav-link-dark'}>
        <IoMdArrowRoundBack size={24} />
        <Link href={'/experiments'} className={'pl-1'}>
          Back
        </Link>
      </div>
      <div className={'fixed left-1 bottom-1 nav-link-dark'}>
        <Link
          href='https://nick-aschenbach.github.io/blog/categories/terrain/'
          target='_blank'
        >
          See related blog posts
        </Link>
      </div>
    </div>
  )
}
