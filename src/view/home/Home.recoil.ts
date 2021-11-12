import { nanoid } from "nanoid";
import { atom } from "recoil";
import UAParser from 'ua-parser-js'

interface BreakPoint{
  isMobile: boolean
  isLaptop: boolean
  isTablet: boolean
}


const getBreakPoints = () => {
  const parser = new UAParser()
  const deviceType = parser.getDevice().type
  const breakPoint: BreakPoint = {
    isLaptop: false,
    isMobile: false,
    isTablet: false,
  }

  if(deviceType === 'mobile'){
    breakPoint.isMobile = true
  }else if(deviceType === 'tablet'){
    breakPoint.isTablet = true
  }else{
    breakPoint.isLaptop = true
  }
  
  return breakPoint
}


export const breakPointState = atom<BreakPoint>({
  key: "breakPointState"+ nanoid(),
  default: getBreakPoints()
})