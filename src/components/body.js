import React from "react"

import "./body.css"
import "./triangle.css"

import { PartnerIcon } from "./icons"
import { partnerLogos } from "../constants"
import miraflores from "../images/miraflorescolorlogo.png"
import Video from "./video"

const Body = () => (
  <div className="triangle-wrapper">
    <div className="triangle" />
    <div className="container">
      <div className="mobile-container row body-container-left">
        <h2 className="secondary-heading-text">
          Fierce defender of children. Serial entrepreneur.
          <br /> Rabid soccer fan. Spiritual beacon.
        </h2>
        <p className="body-text-regular">
          We're excited to introduce you to this transformative force of nature,
          Sor Maria Rosa Leggol—a 93-year-old Franciscan nun and humanitarian
          with a 70+ year legacy of improving the lives of Honduras' most
          vulnerable. Con Esta Luz (With This Light) is a feature length
          documentary film that shares her story through the eyes of young
          people whose lives she forever changed.
        </p>
        <p className="body-text-regular bold">Coming 2021.</p>
      </div>

      <div className="mobile-container">
        <Video
          videoSrcURL="https://www.youtube.com/embed/5VLk2D8e1C4"
          videoTitle="With This Light Teaser"
        />
      </div>

      <div className="mobile-container row d-flex justify-content-end align-items-center body-container-center">
        <p className="center-text quote-text bold">
          I will always need a lighthouse, a beacon of light,{" "}
          <br className="visible-lg" />
          because with that light I can get through to people to{" "}
          <br className="visible-lg" />
          understand <br className="visible-xs" /> them, so I can help them, so
          they can have relief. <br />
          My life is, how to relieve others? How can I make{" "}
          <br className="visible-lg" />
          them feel, even a little bit, that God loves them.
        </p>
        <p className="body-text-regular">SOR MARIA ROSA LEGGOL</p>
      </div>

      <div className="row body-container-bottom">
        <h2 className="partner-text center-text margin-bottom">PARTNERS</h2>
        <p className="mobile-left body-text-regular center-text">
          Several organizations in the
          <br className="visible-xs" /> USA and Canada were{" "}
          <br className="visible-xs" /> established to support <br />
          the ongoing work of the charitable organizations founded by Sor{" "}
          <br className="visible-xs" /> Maria <br className="visible-lg" />
          Rosa focusing on <br className="visible-xs" />
          education, healthcare, <br className="visible-xs" /> housing and
          entrepreneurship.
        </p>
        <div className="row d-flex justify-content-center align-items-baseline">
          {partnerLogos.map(logo => (
            <PartnerIcon key={logo.id} {...logo} />
          ))}
        </div>
      </div>

      <div className="mobile-container row d-flex justify-content-center">
        <p className="margin-top-lg body-text-regular bold text-center">
          info@withthislight.com
        </p>
      </div>

      <footer
        className="row d-flex flex-column align-items-center"
        style={{ margin: "2em" }}
      >
        <div className="col-3" style={{ margin: "1em" }}>
          <img className="miraflores-logo" src={miraflores} style={{ margin: "0" }} />
        </div>
        <div className="col">
          <p
            className="body-text-small bold text-center"
            style={{ margin: "0" }}
          >
            Produced by Miraflores Films LLC
          </p>
        </div>
      </footer>
    </div>
  </div>
)

export default Body
