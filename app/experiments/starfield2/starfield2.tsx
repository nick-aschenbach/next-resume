import { JSX, SVGProps, useEffect, useState } from 'react'

import { motion, useAnimate } from 'framer-motion'
const SvgStarfield = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  const [scopeTopMask, animateTopMask] = useAnimate()
  const [scopeBottomMask, animateBottomMask] = useAnimate()
  const [scopeLetters, animateLetters] = useAnimate()
  const [scopeRing, animateRing] = useAnimate()
  const [scopeRectMask, animateRectMask] = useAnimate()
  const [scopeGradient, animateGradient] = useAnimate()
  const [scopeGradientMast, animateGradientMask] = useAnimate()
  const [scopeStars, animateStars] = useAnimate()
  const [stars, setStars] = useState([])

  useEffect(() => {
    const animation = async () => {
      // Animate arcs that mask the ring
      animateTopMask(
        scopeTopMask.current,
        {
          d: [
            'M 1452.98 1031 A 450 450 0 0 1 2352.97977499994 1030.54999999419 L 1902.98 1031 L 1452.98 1031 Z',
            'M 1452.98 1031 A 450 450 0 0 1 2228.72243509105 720.529605306795 L 1902.98 1031 L 1452.98 1031 Z',
            'M 1452.98 1031 A 450 450 0 0 1 1925.02117721132 581.540116910153 L 1902.98 1031 L 1452.98 1031 Z',
            'M 1452.98 1031 A 450 450 0 0 1 1609.17794868738 690.14760578148 L 1902.98 1031 L 1452.98 1031 Z',
            'M 1452.98 1031 A 450 450 0 0 1 1455.18342448905 986.522736587505 L 1902.98 1031 L 1452.98 1031 Z',
          ],
        },
        { duration: 2, ease: 'linear', delay: 0.5 },
      )
      animateBottomMask(
        scopeBottomMask.current,
        {
          d: [
            'M 2352.98 1130 A 450 450 0 0 1 1452.98 1130 L 1902.98 1130 L 2352.98 1130 Z',
            'M 2352.98 1130 A 450 450 0 0 1 1576.92725756443 1440.14449721097 L 1902.98 1130 L 2352.98 1130 Z',
            'M 2352.98 1130 A 450 450 0 0 1 1880.48937373601 1579.43761717312 L 1902.98 1130 L 2352.98 1130 Z',
            'M 2352.98 1130 A 450 450 0 0 1 2196.44105207768 1471.14602579169 L 1902.98 1130 L 2352.98 1130 Z',
            'M 2352.98 1130 A 450 450 0 0 1 2350.73187437511 1174.92503749107 L 1902.98 1130 L 2352.98 1130 Z',
          ],
        },
        { duration: 2, ease: 'linear', delay: 0.5 },
      )

      const SCALE_AMOUNT = 0.9

      animateLetters(
        scopeLetters.current,
        { opacity: [0, 1], scale: [SCALE_AMOUNT, 1.0] },
        { duration: 3, ease: 'easeInOut', delay: 0.0 },
      )

      animateRing(
        scopeRing.current,
        { opacity: [0, 1], scale: [SCALE_AMOUNT, 1.0] },
        { duration: 3, ease: 'easeInOut', delay: 0.0 },
      )

      animateRectMask(
        scopeRectMask.current,
        { scale: [SCALE_AMOUNT, 1.0] },
        { duration: 3, ease: 'easeInOut', delay: 0.0 },
      )

      animateGradient(scopeGradient.current, { cx: [2500, 3025] }, { duration: 3, ease: 'easeInOut', delay: 1.0 })

      animateGradientMask(
        scopeGradientMast.current,
        { opacity: [1, 0] },
        { duration: 6, ease: 'easeInOut', delay: 0.5 },
      )

      animateStars(
        scopeStars.current,
        { opacity: [0, 1, 1, 1], translateX: [0, 200] },
        { duration: 6, ease: 'easeInOut', delay: 0.5 },
      )
    }

    const NUMBER_OF_STARS = 20
    const starList = []
    for (let i = 0; i < NUMBER_OF_STARS; i++) {
      starList.push(
        <circle
          key={i}
          cx={2627.1 + 1212 * Math.random()}
          cy={Math.random() * 2160}
          r={2}
          style={{ fill: '#fff' }}
        />,
      )
    }
    // @ts-ignore
    setStars(starList)
    animation()
  }, [])

  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlSpace='preserve' viewBox='0 0 3840 2160' {...props}>
      <style>{'.starfield_svg__st1{fill:#fff}'}</style>
      <g id='starfield_svg__background_00000059988439401043005450000000303612354654246573_'>
        <radialGradient
          ref={scopeGradient}
          id='starfield_svg__SVGID_1_'
          cx={2842.907}
          cy={1083.914}
          r={851.888}
          gradientTransform='matrix(1.0185 0 0 1.3655 -48.531 -396.19)'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset={0}
            style={{
              stopColor: '#a1bcce',
            }}
          />
          <stop
            offset={0.013}
            style={{
              stopColor: '#9db7c9',
            }}
          />
          <stop
            offset={0.106}
            style={{
              stopColor: '#819aac',
            }}
          />
          <stop
            offset={0.21}
            style={{
              stopColor: '#6a8294',
            }}
          />
          <stop
            offset={0.328}
            style={{
              stopColor: '#586f81',
            }}
          />
          <stop
            offset={0.465}
            style={{
              stopColor: '#4b6274',
            }}
          />
          <stop
            offset={0.642}
            style={{
              stopColor: '#445a6c',
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: '#42586a',
            }}
          />
        </radialGradient>

        <motion.path
          d='M2627.1 0H3840v2160H2627.1z'
          style={{
            fill: 'url(#starfield_svg__SVGID_1_)',
          }}
        />

        <motion.path
          ref={scopeGradientMast}
          d='M2627.1 0H3840v2160H2627.1z'
          style={{
            fill: 'black',
          }}
        />

        <motion.g id='stars' ref={scopeStars}>
          {stars}
        </motion.g>

        <path
          id='black-planet'
          d='M2657.84 0H0v2160h2740.63c166.38-278.04 284.92-636.43 284.92-1027.6 0-442.29-152.22-832.05-367.71-1132.4'
        />
      </g>
      <motion.path
        ref={scopeRing}
        id='ring'
        d='M1902.98 708.27c-203.15 0-367.83 164.68-367.83 367.83s164.68 367.83 367.83 367.83 367.83-164.68 367.83-367.83-164.68-367.83-367.83-367.83m0 719.13c-194.02 0-351.3-157.28-351.3-351.3s157.28-351.3 351.3-351.3 351.3 157.28 351.3 351.3-157.28 351.3-351.3 351.3'
        className='starfield_svg__st1'
      />
      <g id='ring_masks'>
        <motion.path
          ref={scopeBottomMask}
          d='M 2352.98 1130 A 450 450 0 0 1 1452.98 1130 L 1902.98 1130 L 2352.98 1130 Z'
          style={{ fill: 'black' }}
        />
        <motion.path
          ref={scopeTopMask}
          d='M 1452.98 1031 A 450 450 0 0 1 2352.97977499994 1030.54999999419 L 1902.98 1031 L 1452.98 1031 Z'
          style={{ fill: 'black' }}
        />
      </g>
      <motion.g id='mask' ref={scopeRectMask}>
        <rect x='1505.86' y='1015.45' width='77.02' height='28.85' />
        <rect x='2235.56' y='1116.22' width='88.14' height='29.04' />
      </motion.g>
      <g>
        <motion.path
          ref={scopeLetters}
          d='M2032.18 1030.76h14.9v99.17h-14.9zM2133.68 1116.26v-29.89h47.2v-14.25h-47.2v-28.01h52.16v-13.35h-66.74v99.16h70.75v-13.66zM2252.01 1116.12h69.81v14.28h-69.81zM2406.11 1129.92c16.71 0 30.7-3.07 34.38-5.84 10.9-10.49 17.31-22.76 17.31-43.84 0-24.73-8.29-39.34-22.72-46.79-6.24-1.59-16.48-2.64-28.12-2.69h-28.27v99.17h14.63m-.54-15.31v-70.39h11.01c9.05.04 17.01.8 21.85 1.95 9.88 1.32 17.66 16.01 17.66 33.96 0 15.31-5.66 28.25-13.45 32.55-2.86 2.02-13.73 3.52-26.72 3.52-3.47 0-7.3-.13-10.36-.33M1970.94 1044v-13.33h-58.29v.09h-9.11v99.16h15.45v-45.98h46.96v-13.98h-46.96V1044zM1507.97 1030.6h73.38v13.71h-73.38zM1660.93 1051.37l29.06 79.2 16.52.02-39.48-99.59-12.03-.34-40.04 99.39 15.37.07zM1458.01 1056.12c0-.17.82-.02.8-.19-1.78-15.86-16.59-28.24-36.08-28.24s-34.67 12.52-34.69 27.94c-.01 6.85 5.23 19.07 16 23.64-.23.13 6.27 2.25 6.05 2.38l14.15 4.07c14.45 2.94 19.65 8.25 20.03 17.1.38 8.95-10.16 16.22-22.7 16.22s-22.09-7.72-23.33-16.25c-.15-1.05-.25-2.03-.27-3.07l-14.85-.19c-.09.86-.01 1.91-.01 2.79 0 16.89 17.72 30.59 38.57 30.59s37.77-13.69 37.77-30.58c0-10.06-6-18.98-15.26-24.56.35.21-.96-.64-1.06-.71l-19.67-6.34c-10.46-3.12-20.57-7.85-20.57-15.28 0-7.61 8.54-13.78 19.06-13.78 10.53 0 20.88 6.92 20.88 14.53M1812.11 1088.76l-.11-.74-.01-.05c6.75-.43 12.14-2.46 13.52-5.07 6.7-2.45 11.69-11.92 11.69-23.24 0-11.26-4.13-16.17-9.58-22.2-3.22-2.81-10.01-6.68-18.13-6.71h-47.269999999999996v99.17h14.41v-41.16h17.27l29.99 42.28h18.97zm-1.79-44.05c6.76.53 12.09 6.43 12.09 13.66 0 .51.02.65 0 1.47.05.49 0 1.02 0 1.53 0 7.15-5.22 13.02-11.88 13.65l-33.89-.08v-30.28h32.86'
          className='starfield_svg__st1'
        />
      </g>
    </svg>
  )
}
export default SvgStarfield
