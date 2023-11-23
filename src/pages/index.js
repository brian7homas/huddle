import * as React from "react"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import ColumnContainer from "../components/ColumnContainer"
import SquareRender from "../components/squaresRender"
import { Seo }  from "../components/Seo"
import UseIsClient from "../components/UseIsClient"
const Home = () => {
  const { isClient } = UseIsClient()
  if( !isClient ) return null
  return (
    <main id="scene">
      <SquareRender />
      <MainContainer>
        <Header />
        <ColumnContainer />
      </MainContainer>
    </main>
  )
}
export default Home
export const Head = () => {
  return(
    <Seo
      title="Huddle"
      description="Frontend Mentor Huddle challenge solution"
      image="/favicon.ico"
    />
  )
  
}