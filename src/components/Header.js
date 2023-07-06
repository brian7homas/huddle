import React from "react"
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <header data-depth="0.2" className="header">
      <section>
        <Logo className="header_logo"/>
      </section>
    </header>
  )
}

export default Header