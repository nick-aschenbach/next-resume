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
    <div className={'grid md:grid-cols-4 m-10 gap-10 justify-items-center'}>
      {tileData.map((tile, index) => {
        return (
          <div className={'text-center'}>
            <Link href={tile.href} key={index}>
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
