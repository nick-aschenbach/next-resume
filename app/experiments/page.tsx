import Image from 'next/image'
import Link from 'next/link'

const tileData = [
  {
    img: '/images/mandelbrot.png',
    href: '/experiments/mandelbrot',
    title: 'Mandelbrot Fractal',
    route: 'Mandelbrot Fractal',
  },
  {
    img: '/images/firework.png',
    href: '/experiments/firework',
    title: 'Firework particle simulation',
    route: 'Firework Simulator',
  },
  {
    img: '/images/arkanoid.png',
    href: '/experiments/arkanoid',
    title: 'Arkanoid Game Levels',
    route: 'Arkanoid Game Levels',
  },
  {
    img: '/images/terrain.png',
    href: '/experiments/heightfield',
    title: 'Wireframe Fractal Terrain Video',
    route: 'Wireframe Fractal Terrain Video',
  },
  // WIP
  // {
  //   img: '/images/ballistic.png',
  //   href: '/experiments/ballistic',
  //   title: 'Ballistics Simulator',
  //   route: 'Ballistics Simulator',
  // },
  // {
  //   img: '/images/plasma.png',
  //   title: 'Plasma Simulator Video',
  //   route: 'Plasma Simulator Video',
  // },
  // {
  //   img: '/images/terrain.png',
  //   title: 'WebGL Terrain Generator',
  //   route: 'WebGL Terrain Generator',
  // },
]

export default function Experiments() {
  return (
    <div className={'grid grid-cols-4 m-10'}>
      {tileData.map((tile, index) => {
        return (
          <Link href={tile.href} key={index}>
            <Image src={tile.img} alt={tile.title} width={250} height={250} />
          </Link>
        )
      })}
    </div>
  )
}
