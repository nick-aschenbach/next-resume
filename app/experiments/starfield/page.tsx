import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'
import Bethesda from '@/app/experiments/starfield/bethesda'

export default function StarfieldPage() {
  return (
    <div className={'experiment-background-dark experiment-background-height'}>
      <Bethesda className={'h-full w-full'} />
      <div className={'fixed left-1 top-16 flex nav-link-dark'}>
        <IoMdArrowRoundBack size={24} />
        <Link href={'/experiments'} className={'pl-1'}>
          Back
        </Link>
      </div>
    </div>
  )
}
