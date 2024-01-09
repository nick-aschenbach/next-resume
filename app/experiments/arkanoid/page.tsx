import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'

export default function ArkanoidPage() {
  return (
    <div className='experiment-background-dark experiment-background-height grid justify-center items-center grid-cols-1'>
      <iframe
        frameBorder='0'
        title='ArkanoidScreen'
        src='https://nick-aschenbach.github.io/assets/2015-04-27-arkanoid-game-levels/demo/index.html'
        className={'p-10 h-full w-full'}
      />
      <div className={'fixed left-1 top-16 flex nav-link-dark'}>
        <IoMdArrowRoundBack size={24} />
        <Link href={'/experiments'} className={'pl-1'}>
          Back
        </Link>
      </div>
      <div className={'fixed left-1 bottom-1 nav-link-dark'}>
        <Link href='https://nick-aschenbach.github.io/blog/2015/04/27/arkanoid-game-levels/' target='_blank'>
          See related blog posts
        </Link>
      </div>
    </div>
  )
}
