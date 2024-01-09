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
    img: '/images/terrain.png',
    href: '/experiments/heightfield',
    title: 'Wireframe Fractal Terrain Video',
  },
  {
    img: '/images/starfield.png',
    href: '/experiments/starfield',
    title: 'Starfield intro SVG animation',
  },
  {
    img: '/images/heatmap.png',
    href: '/experiments/8760',
    title: 'Solar irradiance (8760 data)',
  },
]

export default function Experiments() {
  return (
    <div className={'grid md:grid-cols-4 m-10 gap-10 justify-items-center'}>
      {tileData.map((tile, index) => {
        return (
          <div className={'text-center'} key={index}>
            <Link href={tile.href}>
              <Image
                src={tile.img}
                alt={tile.title}
                width={250}
                height={250}
                className={'bg-cover h-100 w-50 rounded 50-vw h-60 object-cover drop-shadow-md'}
              />
            </Link>
            {tile.title}
          </div>
        )
      })}
    </div>
  )
}
