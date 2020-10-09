import React from "react"

import Triangle from "./triangle"

import "./body.css"
import "./triangle.css"

import { PartnerIcon } from "./icons"
import fohcLogo from "../images/Partner Logos/FoHC_Logo.svg"
import fundacionLogo from "../images/Partner Logos/Fundacion.png"
import hcrfLogo from "../images/Partner Logos/hcrf-new-logo-feb-20220.png"
import sanLogo from "../images/Partner Logos/InProduction-SAN-Logo.jpg"
import virtuLogo from "../images/Partner Logos/Virtu.png"
import miraflores from "../images/miraflorescolorlogo.png"

const partnerLogos = [
  { id: 0, src: hcrfLogo, alt: "" },
  { id: 1, src: virtuLogo, alt: "" },
  { id: 2, src: fohcLogo, alt: "" },
  { id: 3, src: sanLogo, alt: "" },
  { id: 4, src: fundacionLogo, alt: "" },
]

const Body = () => (
  <div className="container">
    <div className="row body-container-left">
      <h2 className="secondary-heading-text">
        Fierce defender of children. Serial entrepreneur.
        <br /> Rabid soccer fan. Spiritual beacon.
      </h2>
      <p className="body-text-regular">
        We're excited to introduce you to this transformative force of nature,
        Sor Maria Rosa Leggol—a 93-year-old Franciscan nun and humanitarian with
        a 70+ year legacy of improving the lives of Honduras' most vulnerable.
        Con Esta Luz (With This Light) is a feature length documentary film that
        shares her story through the eyes of young people whose lives she
        forever changed.
      </p>
      <p className="body-text-regular bold">Coming 2021.</p>
    </div>

    <div
      className="row d-flex align-items-center"
      style={{ maxWidth: "90vw", height: 600, backgroundColor: "black" }}
    ></div>

    <div className="row d-flex justify-content-end align-items-center body-container-center">
      <p className="center-text quote-text bold">
        I will always need a lighthouse, a beacon of light, <br />
        because with that light I can get through to people to <br />
        understand them, so I can help them, so they can have relief. <br />
        My life is, how to relieve others? How can I make <br />
        them feel, even a little bit, that God loves them.
      </p>
      <p className="body-text-regular">SOR MARIA ROSA LEGGOL</p>
    </div>

    <div className="row body-container-bottom">
      <h2 className="partner-text center-text margin-bottom">PARTNERS</h2>
      <p className="body-text-regular center-text">
        Several organizations in the USA and Canada were established to support
        <br />
        the ongoing work of the charitable organizations founded by Sor Maria{" "}
        <br />
        Rosa focusing on education, healthcare, housing and entrepreneurship.
      </p>
      <div className="row d-flex justify-content-center align-items-baseline margin-bottom">
        {partnerLogos.map(logo => (
          <PartnerIcon key={logo.id} {...logo} />
        ))}
      </div>
    </div>

    <footer
      className="row d-flex flex-column align-items-center"
      style={{ margin: "1.5em" }}
    >
      <div className="col-1">
        <img src={miraflores} style={{ margin: "0" }} />
      </div>
      <div className="col">
        <p className="body-text-small bold text-center" style={{ margin: "0" }}>
          Produced by Miraflores Films LLC
        </p>
      </div>
    </footer>
  </div>
)

export default Body
