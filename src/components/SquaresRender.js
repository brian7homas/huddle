import React, { useEffect, useState } from "react"
import Parallax from "parallax-js"
import LandscapeSquares from '../../assets/squares.svg'
import PortraitSquares from '../../assets/mobile-squares.svg'
function SquareRender() {
  const isBrowser = () => typeof window !== "undefined"
  const [width, setWidth] = useState(isBrowser() ? window.innerWidth : undefined)
  const breakpoints = [801]
  const loadParallax = () => {
    if (width > breakpoints[0]) {
      let landscapeScene = document.getElementById('squares-container');
      let landscapeParallaxInstance = new Parallax(landscapeScene, {
        relativeInput: true,
        hoverOnly: true,
        invertY: true
      });
      landscapeParallaxInstance.friction(0.03, 0.013);
    } else if (width < breakpoints[0]) {
      let mobileLandscapeScene = document.getElementById('mobile-squares-container');
      let mobileParallaxInstance = new Parallax(mobileLandscapeScene, {
        hoverOnly: false,
        invertX: true
      });
      mobileParallaxInstance.friction(0.03, 0.013);
    }
  }
  const handleWindowSize = () => setWidth(window.innerWidth)
  useEffect(() =>{
    loadParallax()
    handleWindowSize()
    window.addEventListener('resize', handleWindowSize)
    return () => window.removeEventListener('resize', handleWindowSize)
  },)

  return width < breakpoints[0] ? <PortraitSquares /> : <LandscapeSquares />
}
export default SquareRender