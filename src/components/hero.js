import React from "react"

import { Button } from "./button"
import {heroText} from "../constants"

import "./button.css"
import "./heroText.css"

const Hero = () => (
  <div className="hero-container">
    {/* <div className="container d-flex flex-column align-items-center"> */}
      <h1 className="row text text-normal pl-2">
        {heroText.eng.primary}
      </h1>
      <h1 className="row text text-bold pl-2">{heroText.eng.secondary}</h1>
      <div className="button-container justify-content-between"> 
        <div className="row d-flex">
          <div className="col">
            <Button {...heroText.eng.button.cta1} />
          </div>
          <div className="col">
            <Button {...heroText.eng.button.cta2} />
          </div>
        </div>
      </div>
    {/* </div> */}
  </div>
)

export default Hero
