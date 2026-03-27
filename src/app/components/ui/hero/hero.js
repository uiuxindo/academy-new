"use client";

import Aurora from "../../plugin/aurora/Aurora"
import "./hero.scss"
import "../../../assets/ui/_button.scss"
import "../../../assets/ui/_text.scss"

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="animated-background">
        <Aurora
          colorStops={["#ffea00","#9b4dfa","#ffea00"]}
          amplitude={1}
          blend={1}
        />
      </div>
      <div className="container hero-greet" data-aos="fade-up">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="fw900 mb-3">Bantu kamu belajar dan siap menjadi<br />talenta digital Indonesia!</h1>
            <p className="text-lg mb-4">Dapatkan paket pembelajaran yang sesuai untuk meningkatkan keterampilan digital mu!</p>
            <button type="button" className="btn btn-primary btn-pill btn-lg fw700 px-5">Mulai Belajar</button>
          </div>
        </div>
      </div>
    </div>
  )
}