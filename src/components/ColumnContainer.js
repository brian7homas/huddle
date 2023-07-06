import React from "react"
import Illustration from '../../assets/illustration.svg'
function ColumnContainer() {
  return (
    <section className="column-container">
      <Illustration />
      <div className="copy-container">
        <h1>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communites. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
        <button>Register</button>
      </div>
    </section>
  )
}

export default ColumnContainer