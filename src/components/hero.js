import React from "react"

import { Button } from "./button"

import "./button.css"
import "./heroText.css"
import { connect } from "react-redux"

const Hero = props => {
  const { spanishEnabled } = props

  const english = {
    button: {
      cta1: {
        text: "STAY IN THE LOOP",
        link: "https://twitter.com/withthislight",
      },
      cta2: {
        text: "LEARN ABOUT SOCIEDAD AMIGOS DE\nLOS NIÑOS (SAN)",
        link: "https://www.sanhn.org/",
        type: "button-secondary",
      },
    },
  }

  const spanish = {
    button: {
      cta1: {
        text: "ESTÉS AL TANTO",
        link: "",
      },
      cta2: {
        text: "CONOCE SOCIEDAD AMIGOS DE\nLOS NIÑOS (SAN)",
        link: "https://www.sanhn.org/",
        type: "button-secondary",
      },
    },
  }

  return (
    <div className="hero-container">
      {spanishEnabled ? (
        <>
          <h1 className="row text text-normal pl-2">
            LOS NIÑOS
            <br className="visible-xs" /> HONDUREÑOS
            <br className="visible-xs" /> NECESITABAN AYUDA.
          </h1>
          <h1 className="row text text-bold pl-2">
            ELLA RESPONDIÓ
            <br className="visible-xs" /> LA LLAMADA.
          </h1>
        </>
      ) : (
        <>
          <h1 className="row text text-normal pl-2">
            HONDURAN
            <br className="visible-xs" /> CHILDREN
            <br className="visible-xs" /> NEEDED HELP.
          </h1>
          <h1 className="row text text-bold pl-2">
            SHE ANSWERED
            <br className="visible-xs" /> THE CALL.
          </h1>
        </>
      )}

      <div className="button-container justify-content-between">
        <div className="button-col row d-flex">
          <div className="button-row col">
            {spanishEnabled ? (
              <Button {...spanish.button.cta1} />
            ) : (
              <Button {...english.button.cta1} />
            )}
          </div>
          <div className="button-row col">
            {spanishEnabled ? (
              <Button {...spanish.button.cta2} />
            ) : (
              <Button {...english.button.cta2} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ spanishEnabled }) => {
  return { spanishEnabled }
}

export default connect(mapStateToProps)(Hero)
