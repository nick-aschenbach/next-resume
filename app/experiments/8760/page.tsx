'use client'

import Link from 'next/link'
import { IoMdArrowRoundBack } from 'react-icons/io'

import HeatMap from '@/app/experiments/8760/HeatMap'

import GHI_SOLAR_IRRADIANCE_GHI from './data'
import { useState } from 'react'
import gradients from '@/app/ui/gradients'
import { Tooltip } from 'react-tooltip'

export default function EightySevenSixtyPage() {
  const [gradient, setGradient] = useState('incandescent')

  return (
    <div className='experiment-background-dark experiment-background-size p-20 grid justify-center items-center grid-cols-1'>
      <HeatMap data={GHI_SOLAR_IRRADIANCE_GHI} unit={'w / m²'} useLargeFont gradient={gradient} />
      <div className={'fixed left-1 top-16 flex nav-link-dark'}>
        <IoMdArrowRoundBack size={24} />
        <Link href={'/experiments'} className={'pl-1'}>
          Back
        </Link>
      </div>
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
      <div style={{ position: 'fixed', left: 25, bottom: 50, color: 'yellow' }}>
        <p data-tooltip-id='react-tooltip' className={'cursor-pointer'}>
          Info
        </p>
        <Tooltip place='right' id='react-tooltip'>
          A data visualisation I developed that shows hourly data across the year. There are 8760 rectangles <br />
          (24 hours x 365 days). Data is provided in an array and the color gradient is scaled to fit. The data <br />
          shown here is from the National Renewable Energy Laboratory solar irradiance dataset. This shows the <br />
          solar panel energy generation potential for a site in California.
        </Tooltip>
      </div>
    </div>
  )
}
