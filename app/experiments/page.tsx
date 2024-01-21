import Image from 'next/image'
import Link from 'next/link'

const tileData = [
  {
    img: '/images/mandelbrot.png',
    href: '/experiments/mandelbrot',
    title: 'Mandelbrot Fractal',
  },
  {
    img: '/images/firework.png',
    href: '/experiments/firework',
    title: 'Firework particle simulation',
  },
  {
    img: '/images/arkanoid.png',
    href: '/experiments/arkanoid',
    title: 'Arkanoid Game Levels',
  },
  {
    img: '/images/heatmap.png',
    href: '/experiments/8760',
    title: 'Solar irradiance data viz',
  },
  {
    img: '/images/starfield.png',
    href: '/experiments/starfield',
    title: 'Starfield intro SVG animation',
  },
  {
    img: '/images/llark.png',
    href: '/experiments/llark',
    title: 'Llark knight animation',
  },
  {
    img: '/images/simplex-terrain.png',
    href: '/experiments/terrain',
    title: 'Random terrain generation',
  },
  {
    img: '/images/parallax.png',
    href: '/experiments/parallax',
    title: 'Parallax effect',
  },
]

export default function Experiments() {
  return (
    <div className={'grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-10 sm:gap-10 sm:justify-items-start'}>
      {tileData.map((tile, index) => {
        return (
          <div className={'text-center'} key={index}>
            <Link href={tile.href}>
              <Image
                src={tile.img}
                alt={tile.title}
                width={250}
                height={250}
                className={'bg-cover sm:h-100 sm:w-50 rounded sm:50-vw sm:h-60 object-cover drop-shadow-md sm:min-w-60 cursor-pointer'}
              />
            </Link>
            <div
              className={'text-left sm:text-center md:text-center lg:text-center xl:text-center 2xl:text-center mb-10'}
            >
              {tile.title}
            </div>
          </div>
        )
      })}
    </div>
  )
}
