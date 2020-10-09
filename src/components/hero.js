import React, { useState } from "react"

import { Button } from "./button"
import { heroText } from "../constants"

import "./button.css"
import "./heroText.css"

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="row text text-normal pl-2">
        HONDURAN
        <br className="visible-xs" /> CHILDREN
        <br className="visible-xs" /> NEEDED HELP.
      </h1>
      <h1 className="row text text-bold pl-2">
        SHE ANSWERED
        <br className="visible-xs" /> THE CALL.
      </h1>
      <div className="button-container justify-content-between">
        <div className="button-col row d-flex">
          <div className="button-row col">
            <Button {...heroText.EN.button.cta1} />
          </div>
          <div className="button-row col">
            <Button {...heroText.EN.button.cta2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
