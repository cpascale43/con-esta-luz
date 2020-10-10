import React from "react"
import { connect } from "react-redux"

import "./body.css"
import "./triangle.css"

import { PartnerIcon } from "./icons"
import { partnerLogos } from "../constants"
import miraflores from "../images/miraflorescolorlogo.png"
import Video from "./video"
import { Popup } from "./popup"

const Body = props => {
  return (
    <div className="triangle-wrapper">
      <div className="triangle" />
      <div className="container">
        <div className="row body-container-left">
          {props.spanishEnabled ? (
            <h2 className="secondary-heading-text">
              Defensora feroz de los niños. Emprendedora serie.
              <br /> Fanática rabiosa del fútbol. Modelo espiritual.
            </h2>
          ) : (
            <h2 className="secondary-heading-text">
              Fierce defender of children. Serial entrepreneur.
              <br /> Rabid soccer fan. Spiritual beacon.
            </h2>
          )}

          {props.spanishEnabled ? (
            <p className="body-text-regular">
              Nos complace presentarles esta transformadora y fuerza de la
              naturaleza, Sor María Rosa Leggol, una monja Franciscana y
              humanitaria de 93 años con un legado de más de 70 años mejorando
              las vidas de los más vulnerables de Honduras. Con Esta Luz es un
              documental que comparte la historia de Sor María a través de los
              ojos de los jóvenes cuyas vidas cambió para siempre.
            </p>
          ) : (
            <p className="body-text-regular">
              We're excited to introduce you to this transformative force of
              nature, Sor Maria Rosa Leggol—a 93-year-old Franciscan nun and
              humanitarian with a 70+ year legacy of improving the lives of
              Honduras' most vulnerable. Con Esta Luz (With This Light) is a
              feature length documentary film that shares her story through the
              eyes of young people whose lives she forever changed.
            </p>
          )}

          {props.spanishEnabled ? (
            <p className="body-text-regular bold">Próximamente en 2021.</p>
          ) : (
            <p className="body-text-regular bold">Coming 2021.</p>
          )}
        </div>

        <div className="video-container">
          <Video
            videoSrcURL="https://www.youtube.com/embed/5VLk2D8e1C4"
            videoTitle="With This Light Teaser"
          />
        </div>

        <div className="row d-flex justify-content-end align-items-center body-container-center">
          {props.spanishEnabled ? (
            <p className="center-text quote-text bold">
              Siempre necesitaré un faro, un faro de luz,{" "}
              <br className="visible-lg" />
              porque con esa luz puedo llegar a la gente para que
              <br className="visible-lg" />
              los entienda, <br className="visible-xs" /> así puedo ayudarlos,
              para que tengan alivio.
              <br /> Mi vida se trata de aliviar a los demás. Cómo puedo
              hacerles sentir, <br className="visible-lg" />
              aunque sea un poquito, que Dios los ama.
            </p>
          ) : (
            <p className="center-text quote-text bold">
              I will always need a lighthouse, a beacon of light,{" "}
              <br className="visible-lg" />
              because with that light I can get through to people to{" "}
              <br className="visible-lg" />
              understand them, so I can help them, so they can have relief.
              <br /> My life is, how to relieve others? How can I make{" "}
              <br className="visible-lg" />
              them feel, even a little bit, that God loves them.
            </p>
          )}

          <p className="body-text-regular">SOR MARIA ROSA LEGGOL</p>
        </div>

        <div className="row body-container-bottom">
          <h2 className="partner-text center-text margin-bottom">PARTNERS</h2>
          {props.spanishEnabled ? (
            <p className="mobile-left body-text-regular center-text">
              Se establecieron varias organizaciones
              <br className="visible-xs" /> en los Estados Unidos y Canadá{" "}
              <br className="visible-xs" /> para apoyar el trabajo <br />
              constante de las organizaciones benéficas fundadas por Sor{" "}
              <br className="visible-xs" /> Maria Rosa que se centran{" "}
              <br className="visible-xs" />
              en la educación, la atención médica, <br className="visible-xs" />{" "}
              el alojamiento, y el espíritu emprendedor.
            </p>
          ) : (
            <p className="mobile-left body-text-regular center-text">
              Several organizations in the
              <br className="visible-xs" /> USA and Canada were{" "}
              <br className="visible-xs" /> established to support
              <br className="visible-lg" /> the
              <br className="visible-xs" /> ongoing work of the charitable
              organizations founded by Sor Maria <br className="visible-lg" />
              Rosa focusing on <br className="visible-xs" />
              education, healthcare, <br className="visible-xs" /> housing, and
              entrepreneurship.
            </p>
          )}

          <div className="logos-container">
            {partnerLogos.map(logo => (
              <PartnerIcon key={logo.id} {...logo} />
            ))}
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <p className="margin-top-lg body-text-regular bold text-center">
            info@withthislight.com
          </p>
        </div>
        <footer
          className="row d-flex flex-column align-items-center"
          style={{ margin: "2em" }}
        >
          <div className="col-3" style={{ margin: "1em" }}>
            <a href={"https://mirafloresfilms.com/"}>
              <img
                className="miraflores-logo"
                src={miraflores}
                style={{ margin: "0" }}
                alt="A green and teal logo representing Miraflores films."
              />
            </a>
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
}

const mapStateToProps = ({ spanishEnabled }) => {
  return { spanishEnabled }
}

export default connect(mapStateToProps)(Body)
