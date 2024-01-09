'use client'

import { JSX, SVGProps, useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'

export default function Bethesda(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  const [scopeGear, animateGear] = useAnimate()
  const [scopeBarMask, animateBarMask] = useAnimate()
  const [scopeTriangleMask, animateTriangleMask] = useAnimate()
  const [scopeText, animateText] = useAnimate()

  useEffect(() => {
    const animation = async () => {
      // fade in gear before starting next animations
      await animateGear(scopeGear.current, { opacity: [0, 1] }, { duration: 2, ease: 'easeInOut', delay: 0.5 })
      // gear rotation
      animateGear(scopeGear.current, { x: -71, rotate: -90 }, { duration: 3, ease: 'easeInOut' })
      // bethesda text
      animateText(scopeText.current, { opacity: [0, 0, 1] }, { duration: 5 })
      // masks that make the Bethesda copy visible white on black
      animateBarMask(scopeBarMask.current, { x: [0, -71], scaleY: [0, 0, 1] }, { duration: 3, ease: 'easeInOut' })
      animateTriangleMask(
        scopeTriangleMask.current,
        {
          x: [0, -71],
          d: ['M 854 568 H 854 V 568', 'M 854 568 H 854 V 568', 'M 854 568 H 1000 V 570', 'M 854 568 H 1000 V 725'],
        },
        { duration: 3.0, ease: 'easeInOut' },
      )
    }

    animation()
  }, [])

  return (
    <svg xmlns='http://www.w3.org/2000/svg' xmlSpace='preserve' viewBox='0 0 1728 1117' {...props}>
      <style>{'.bethesda_svg__st0{fill:#fff}'}</style>
      <path id='bethesda_svg__background' d='M0 0h1728v1117H0z' />
      <g id='bethesda_svg__gear-parts'>
        <motion.path
          ref={scopeGear}
          initial={{ opacity: 0 }}
          id='bethesda_svg__gear'
          d='M868.74 681.57c-61.18.81-113.13-49.62-114.1-111.74-1.01-64.8 51.91-115.93 112.87-116.21 63.59-.29 114.82 51.28 114.97 113.9.16 63.22-51.59 114.76-113.74 114.05m91.76-112.82c0-2.83.07-5.67-.02-8.5-.11-3.54-1.74-5.14-5.32-5.17-4.83-.04-9.67-.03-14.5.07-1.66.03-2.59-.56-3.2-2.12-2.92-7.44-5.87-14.87-8.92-22.26-.68-1.66-.37-2.79.83-4.01 3.21-3.26 6.41-6.55 9.49-9.94 2.76-3.03 2.61-5.35-.36-8.22-3.29-3.18-6.61-6.35-9.96-9.47-3.23-3.01-6.04-2.98-9.18.09-3.04 2.97-6.07 5.95-8.99 9.03-1.32 1.39-2.47 1.5-4.16.66-7.53-3.74-15.1-7.41-22.72-10.99-1.79-.84-2.41-1.96-2.37-3.88.09-4.58.09-9.17-.04-13.74-.1-3.41-1.63-4.79-5.03-4.83-4.83-.06-9.66-.12-14.5-.06-5.51.06-6.81 1.44-6.86 7.06-.03 4-.17 8 .04 11.99.14 2.56-.74 3.9-3.11 4.91-7.04 3.02-14.02 6.19-20.93 9.49-2.04.97-3.35.6-4.83-.91-3.26-3.33-6.57-6.63-10.01-9.77-2.51-2.29-4.69-2.21-7.05.14-3.79 3.75-7.51 7.57-11.16 11.45-2.36 2.51-2.26 4.99.14 7.47 3.13 3.23 6.26 6.46 9.53 9.56 1.5 1.43 1.77 2.7.93 4.61-3.11 7.09-6.13 14.22-9.02 21.41-.72 1.8-1.71 2.39-3.54 2.36-4.75-.07-9.5-.09-14.24.04-3.74.1-5.07 1.56-5.1 5.28-.04 4.83-.04 9.66-.03 14.5.01 5.07 1.49 6.57 6.55 6.61 4.33.03 8.67.08 13-.02 1.82-.04 2.86.5 3.56 2.31 2.83 7.3 5.78 14.55 8.79 21.78.77 1.84.41 3.06-.98 4.41-3.12 3.01-6.13 6.13-9.1 9.27-2.44 2.57-2.64 4.39-.39 7.03 3.52 4.11 7.14 8.15 10.97 11.96 3.19 3.18 5.65 2.92 8.8-.29 3.15-3.22 6.34-6.38 9.41-9.67 1.22-1.31 2.37-1.5 3.97-.81 7.26 3.15 14.54 6.24 21.83 9.31 1.42.6 2.01 1.48 1.99 3.04-.07 4.75-.04 9.5 0 14.25.03 4.26 1.24 5.53 5.52 5.59 5.08.08 10.17.08 15.25.01 4.16-.06 5.76-1.68 5.79-5.79.03-4.17.03-8.33-.11-12.5-.07-1.93.58-3.03 2.4-3.81 7.59-3.22 15.14-6.53 22.66-9.91 1.78-.8 3.01-.69 4.37.83 2.83 3.16 5.76 6.25 8.82 9.19 3.16 3.03 5.23 3.18 8.3.51 4.01-3.5 7.92-7.14 11.67-10.92 2.88-2.9 2.68-5.34-.22-8.21-3.25-3.22-6.47-6.49-9.8-9.63-1.34-1.26-1.7-2.4-.93-4.16a914 914 0 0 0 9.07-21.39c.72-1.75 1.7-2.41 3.55-2.37 4.66.09 9.33.04 14 .01 4.17-.03 5.32-1.17 5.4-5.39.08-2.49.04-4.99.05-7.49'
          className='bethesda_svg__st0'
        />
        <motion.path id='bethesda_svg__triangle-mask' ref={scopeTriangleMask} />
        <motion.path
          id='bethesda_svg__bar-mask'
          ref={scopeBarMask}
          className={'scale-0'}
          d='M735 540h93v57h-93zM906 540h93v31h-93z'
        />
      </g>
      <motion.g id='bethesda_svg__bethesda' ref={scopeText} initial={{ opacity: 0 }}>
        <path
          className='bethesda_svg__st0'
          d='M676.63 570.49c-2.32-2.06-6.34-2.67-6.34-2.67 6.07-.07 7.59-3.87 7.59-9.97s-4.69-11.89-10.76-11.95h-44.4v44.5h44.4c3.31-.04 7.25-1.15 9.57-3.73 1.94-2.15 2.56-5.52 2.56-8.3-.01-2.81-.65-6.13-2.62-7.88m-15.37 8.9h-25.13v-6.36h25.13c1.75 0 3.17 1.42 3.17 3.18s-1.42 3.18-3.17 3.18m0-16.14h-25.13v-6.36h25.13c1.75 0 3.17 1.42 3.17 3.18s-1.42 3.18-3.17 3.18M701.03 579.7v-6.64h32.27v-10.12h-32.27v-6.02h33.54v-10.75h-47.78v44.29h48.72V579.7zM792.17 546.17h-52.32v11.16h19.46v33.51h13.72v-33.51h19.14zM839.12 545.92v15.62h-28.05v-15.62h-14.03v44.64h14.03v-16.9h28.05v16.9h14.03v-44.64zM875.29 579.7v-6.64h32.27v-10.12h-32.27v-6.02h33.54v-10.75h-47.78v44.29h48.730000000000004V579.7zM1087.74 581.67h-25.88l-3.65 7.27h-14.62l22.84-42.9h16.75l23.45 42.9h-15.23zm-4.96-8.97-7.87-16.92-8.12 16.92zM956.82 563.18l-23.9-.31c-1.49 0-2.7-.9-2.7-2.39v-1.96c0-1.19.96-2.15 2.15-2.15h21.29c1.06 0 1.92.86 1.92 1.92v2.41h13.3v-6.800000000000001c0-4.27-5.94-7.73-10.21-7.73h-30.94c-6.32 0-11.44 5.12-11.44 11.44v5.69c0 5.57 4.64 9.77 10.21 9.77l27.73.62c1.42 0 2.58.85 2.58 2.27v2.09c0 1.18-.96 2.14-2.14 2.14h-22.71c-.97 0-1.76-.79-1.76-1.76v-2.88h-13.9v4.8c0 5.72 4.64 10.36 10.36 10.36h3.56l30-.31c5.81 0 10.52-4.4 10.52-10.21v-6.87c0-5.6-4.54-10.14-10.14-10.14zM802.17 620.91c-1.55-.64-2.74-1.54-3.6-2.71-.85-1.17-1.28-2.51-1.28-4.03v-6.3c0-1.51.44-2.85 1.33-4.01.88-1.16 2.12-2.06 3.71-2.71s3.42-.97 5.49-.97h4.77c1.98 0 3.73.28 5.24.85s2.69 1.36 3.53 2.39a5.44 5.44 0 0 1 1.26 3.54h-3.24c0-1.43-.62-2.59-1.87-3.47-1.24-.88-2.89-1.32-4.93-1.32h-4.77q-3.24 0-5.22 1.56c-1.32 1.04-1.98 2.42-1.98 4.13v6.3c0 1.72.64 3.09 1.91 4.13s2.96 1.56 5.06 1.56h4.86c2.13 0 3.85-.49 5.17-1.48q1.98-1.485 1.98-3.9v-1.82h-8.73v-1.97h11.97v3.78c0 1.45-.43 2.74-1.28 3.86s-2.07 1.99-3.64 2.6c-1.57.62-3.4.92-5.47.92h-4.86c-2.05.03-3.86-.29-5.41-.93M846.14 615.75h-13.81l-3.24 5.87h-3.42l12.1-21.19h1.53c.99 0 1.71.4 2.16 1.21l6.93 12.23h.05v.06l4.36 7.69h-3.42zm-12.77-1.87h11.74l-5.85-10.53h-.04zM872 619.42c-.02-.01-.49-.5-.51-.51l-11.26-13.7c-.16-.2-.49-.08-.49.17v15.97c0 .15-.12.28-.28.28h-3.25a.28.28 0 0 1-.28-.28v-20.64c0-.15.12-.28.28-.28h4.46c.08 0 .16.04.21.1l11.57 13.73c.11.13.31.13.42 0l11.69-13.73c.05-.06.13-.1.21-.1h3.98c.15 0 .28.12.28.28v20.64c0 .15-.12.28-.28.28h-3.25a.28.28 0 0 1-.28-.28v-15.93c0-.26-.33-.38-.49-.17l-8.6 11.01c-.38.4-2.16 3.01-2.43 3.16M894.41 621.1c-.51-.35-.76-.84-.76-1.47v-19.19h21.14v1.94h-17.82v7.45h16.47v1.94h-16.47v7.93h17.82v1.94h-18.22q-1.395-.015-2.16-.54M936.84 621.1c-1.38-.51-2.45-1.24-3.22-2.18a5.02 5.02 0 0 1-1.15-3.25h3.24c0 1.25.55 2.27 1.64 3.04 1.09.78 2.54 1.17 4.34 1.17h4.99c1.77 0 3.19-.27 4.27-.8s1.62-1.24 1.62-2.1v-1.94c0-.69-.4-1.27-1.19-1.76-.8-.48-1.88-.8-3.26-.94l-8.1-.91c-2.28-.26-4.05-.81-5.31-1.63q-1.89-1.245-1.89-3.12v-1.63c0-1.47.82-2.65 2.45-3.53s3.8-1.32 6.5-1.32h5.08c2.55 0 4.6.52 6.16 1.56s2.34 2.41 2.34 4.1h-3.24c0-1.11-.48-2-1.44-2.66-.96-.67-2.23-1-3.82-1h-5.08c-1.71 0-3.07.26-4.09.77s-1.53 1.21-1.53 2.07v1.63c0 .71.38 1.3 1.15 1.79.76.48 1.82.81 3.17.97l8.05.94c2.34.28 4.15.82 5.44 1.62s1.93 1.81 1.93 3.04v1.94c0 1.47-.84 2.66-2.52 3.56s-3.88 1.35-6.61 1.35h-5.17c-1.79-.01-3.38-.27-4.75-.78M968.78 602.37h-9.99v-1.94h23.3v1.94h-9.99v19.25h-3.33v-19.25zM990.04 621c-1.47-.57-2.61-1.39-3.42-2.45s-1.21-2.27-1.21-3.65v-14.47h3.33v14.53c0 1.47.58 2.66 1.75 3.56s2.71 1.35 4.63 1.35h4.86c1.92 0 3.46-.45 4.63-1.35s1.75-2.08 1.75-3.56v-14.53h3.33v14.47c0 1.37-.4 2.59-1.21 3.65s-1.95 1.88-3.42 2.45c-1.47.58-3.16.86-5.08.86h-4.86c-1.92.01-3.61-.28-5.08-.86M1015.68 621.1q-.81-.525-.81-1.47V600.2h13.77c2.34 0 5.37-.2 7.15.39 1.77.58 2.93 1.56 3.65 2.97.66 1.29.99 2.3.99 3.69v6.73c0 2.51-.98 4.41-2.95 5.71-1.96 1.3-4.84 1.94-8.64 1.94h-10.88c-.99 0-1.75-.18-2.28-.53m13.06-2.89c2.69 0 4.71.22 6.08-.73 1.38-.95 2.08-1.65 2.08-3.51v-6.73c0-1.49-.77-2.7-2.3-3.63-1.54-.93-3.61-.98-6.11-.98h-10.22v15.58zM1045.78 600.44h3.33v21.19h-3.33zM1059.2 620.93c-1.59-.63-3.31-.78-4.2-1.93-.88-1.15-1.33-3.21-1.33-4.73v-6.48c0-1.51.2-4.06 1.08-5.21s1.88-1.79 3.47-2.42 4.41-.45 6.51-.45h4.77c2.1 0 3.94-.17 5.53.45 1.59.63 3.31 2 4.2 3.15.88 1.15.84 2.97.84 4.48v6.48c0 1.51-.2 3.08-1.08 4.22-.89 1.14-2.13 2.03-3.73 2.66-1.6.64-3.68.47-5.75.47h-4.81c-2.08 0-3.91-.07-5.5-.69m10.21-2.28c2.19 0 3.14.53 5.31-.33 1.58-.62 2.02-2.38 2.02-4.06v-6.48c0-1.67-.68-3.03-2.02-4.06-1.35-1.03-3.12-1.06-5.31-1.06h-4.59c-2.19 0-3.96.03-5.31 1.06s-2.27 2.38-2.27 4.06v6.48c0 1.67.64 3.53 2.25 4.06 1.86.61 3.1.33 5.29.33zM1088.92 621.1c-1.38-.51-2.45-1.24-3.22-2.18a5.02 5.02 0 0 1-1.15-3.25h3.24c0 1.25.55 2.27 1.64 3.04 1.09.78 2.54 1.17 4.34 1.17h4.99c1.77 0 3.19-.27 4.27-.8s1.62-1.24 1.62-2.1v-1.94c0-.69-.4-1.27-1.19-1.76-.8-.48-1.88-.8-3.26-.94l-8.1-.91c-2.28-.26-4.05-.81-5.31-1.63q-1.89-1.245-1.89-3.12v-1.63c0-1.47.82-2.65 2.45-3.53s3.8-1.32 6.5-1.32h5.08c2.55 0 4.6.52 6.16 1.56s2.34 2.41 2.34 4.1h-3.24c0-1.11-.48-2-1.44-2.66-.96-.67-2.23-1-3.82-1h-5.08c-1.71 0-3.07.26-4.09.77s-1.53 1.21-1.53 2.07v1.63c0 .71.38 1.3 1.15 1.79.76.48 1.82.81 3.17.97l8.05.94c2.34.28 4.15.82 5.44 1.62s1.93 1.81 1.93 3.04v1.94c0 1.47-.84 2.66-2.52 3.56s-3.88 1.35-6.61 1.35h-5.17c-1.78-.01-3.37-.27-4.75-.78M1025.55 545.82h-45.89v43.51h45.46c7.07 0 12.8-5.73 12.8-12.8l.31-18.03c0-7-5.68-12.68-12.68-12.68m-1.78 26.22c0 3.42-3.01 6.19-6.72 6.19h-23.88v-21.05h24.1c3.68 0 6.66 2.75 6.66 6.14z'
        />
      </motion.g>
    </svg>
  )
}
