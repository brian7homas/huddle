import * as React from "react"
import { useEffect } from "react"
import Parallax from "parallax-js"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import ColumnContainer from "../components/ColumnContainer"
export default function Home() {
  useEffect(() => {
    let mainScene = document.getElementById('scene');
    let desktopSVGScene = document.getElementById('desktop-scene');
    let mainParallaxInstance = new Parallax(mainScene)
    mainParallaxInstance.friction(0.01, .02);
    let desktopParallaxInstance = new Parallax(desktopSVGScene);
    desktopParallaxInstance.friction(0.009, 0.03);
  }, [])

  return (
    <main id="scene" style={{
      background: `url('fullscreen.svg') no-repeat, 
      linear-gradient(217deg,#e882e8,rgba(55, 0, 100, .15) 70.71%),
      linear-gradient(127deg, hsla(257, 40%, 49%, 1), hsla(257, 40%, 49%, .5) 70.71%),
      linear-gradient(336deg, hsla(257, 40%, 49%, 1), hsla(257, 40%, 49%, 1) 70.71%)`,
      backgroundSize: 'cover',
      backgroundPosition: 'left center'
    }}>
      <MainContainer>
        <Header />
        <ColumnContainer />
      </MainContainer>
    </main>
  )
}

