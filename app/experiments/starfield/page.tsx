import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'
import Bethesda from '@/app/experiments/starfield/bethesda'

export default function StarfieldPage() {
  return (
    <div>
      <div className={'fixed top-0 left-0 w-full h-full experiment-background-dark'} />
      <Bethesda className={'fixed top-0 left-0 w-full h-full'} />
      <div className={'fixed left-1 top-16 flex nav-link-dark'}>
        <IoMdArrowRoundBack size={24} />
        <Link href={'/experiments'} className={'pl-1'}>
          Back
        </Link>
      </div>
    </div>
  )
}
