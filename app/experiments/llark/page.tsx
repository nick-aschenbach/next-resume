'use client'

import Link from 'next/link'
import { IoMdArrowRoundBack } from 'react-icons/io'
import ReactPlayer from 'react-player'
import { Suspense, useEffect, useState } from 'react'
import { Tooltip } from 'react-tooltip'

export default function LlarkKnightPage() {
  const [renderPlayer, setRenderPlayer] = useState(false)

  useEffect(() => {
    setRenderPlayer(true)
  }, [])

  const getPlayer = () => {
    if (!renderPlayer) return <div className={'experiment-background-size'} />

    return (
      <div className={'grid experiment-background-size justify-center items-center'}>
        <ReactPlayer url={'https://www.youtube.com/watch?v=_lpbBPUJawk'} width={'800px'} height={'600px'} playing />
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
      <div style={{ position: 'fixed', left: 25, bottom: 50, color: 'yellow' }}>
        <p data-tooltip-id='react-tooltip' className={'cursor-pointer'}>
          Info
        </p>
        <Tooltip place='right' id='react-tooltip'>
          This was a fun little project I did in Adobe&apos;s After Effects product. I worked with a UX designer <br />
          who came up with the artwork. I animated the scene and added the Danny Elfman&apos;s song from the
          <br />
          Batman soundtrack.
        </Tooltip>
      </div>
    </div>
  )
}
