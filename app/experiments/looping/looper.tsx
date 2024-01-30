import { useCallback, useEffect, useRef, useState } from 'react'
import './looper.css'

// @ts-ignore
const InfiniteLooper = function InfiniteLooper({ speed, direction, children }) {
  const [looperInstances, setLooperInstances] = useState(1)
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const orientation = direction === 'up' || direction === 'down' ? 'vertical' : 'horizontal'

  function resetAnimation() {
    if (innerRef?.current) {
      // @ts-ignore
      innerRef.current.setAttribute('data-animate', 'false')

      setTimeout(() => {
        if (innerRef?.current) {
          // @ts-ignore
          innerRef.current.setAttribute('data-animate', 'true')
        }
      }, 10)
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return

    // @ts-ignore
    const { width, height } = innerRef.current.getBoundingClientRect()

    // @ts-ignore
    const { width: parentWidth, height: parentHeight } = outerRef.current.getBoundingClientRect()

    if (orientation === 'vertical') {
      const heightDeficit = parentHeight - height

      // @ts-ignore
      const instanceHeight = height / innerRef.current.children.length

      if (heightDeficit) {
        setLooperInstances(looperInstances + Math.ceil(heightDeficit / instanceHeight) + 1)
      }
    } else {
      const widthDeficit = parentWidth - width

      // @ts-ignore
      const instanceWidth = width / innerRef.current.children.length
      if (widthDeficit) {
        setLooperInstances(looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1)
      }
    }

    resetAnimation()
  }, [looperInstances, orientation])

  /*
        6 instances, 200 each = 1200
        parent = 1700
    */

  useEffect(() => setupInstances(), [setupInstances])

  useEffect(() => {
    window.addEventListener('resize', setupInstances)

    return () => {
      window.removeEventListener('resize', setupInstances)
    }
  }, [looperInstances, setupInstances])

  return (
    // @ts-ignore
    <div className='looper' ref={outerRef} orientation={orientation}>
      {/* @ts-ignore*/}
      <div className='looper__innerList' ref={innerRef} data-animate='true' orientation={orientation}>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className='looper__listInstance'
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' || direction === 'down' ? 'reverse' : 'normal',
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfiniteLooper
