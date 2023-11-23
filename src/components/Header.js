import React from "react"
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <header data-depth="0.2" className="header">
      <div>
        <Logo className="header_logo"/>
      </div>
    </header>
  )
}

export default Header