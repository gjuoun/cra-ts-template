import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { breakPointState } from './Home.recoil'

export const Home = () => {
  const { isLaptop, isMobile, isTablet } = useRecoilValue(breakPointState)
  const setBreakPoint = useSetRecoilState(breakPointState)


  useEffect(() => {
    const watchBreakPoint = () => {
      const windowWidth =  window.innerWidth
      setBreakPoint({
        isLaptop: windowWidth >= 1024,
        isTablet: windowWidth>= 640 && windowWidth < 1024,
        isMobile: windowWidth < 640
      })
    }

    window.addEventListener('resize', watchBreakPoint)
    window.addEventListener('focus', watchBreakPoint)
    watchBreakPoint()

    return () => {
      window.removeEventListener('resize', watchBreakPoint)
    }
  }, [setBreakPoint])

  if (isLaptop) {
    return <>isLaptop</>
  } else if (isTablet) {
    return <>isTablet</>
  } else {
    return <>mobile</>
  }
}