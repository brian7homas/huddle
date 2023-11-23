import * as React from "react"
import { useEffect } from "react"
import Parallax from "parallax-js"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import ColumnContainer from "../components/ColumnContainer"
import { Seo }  from "../components/Seo"
import UseIsClient from "../components/UseIsClient"
  const { isClient } = UseIsClient()
  if( !isClient ) return null
  return (
    <main id="scene">
      <MainContainer>
        <Header />
        <ColumnContainer />
      </MainContainer>
    </main>
  )
}
    <Seo
