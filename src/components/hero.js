import React from "react"

import { Button } from "./button"
import "./button.css"
import "./heroText.css"

const CTA1 = {
  text: "STAY IN THE LOOP",
  onClick: () => {},
}

const CTA2 = {
  text: `LEARN ABOUT SOCIEDAD AMIGOS DE\nLOS NIÑOS (SAN)`,
  onClick: () => {},
  type: "button-secondary",
}

const Hero = () => (
  <div className="hero-container">
    {/* <div className="container d-flex flex-column align-items-center"> */}
      <h1 className="row text text-normal pl-2">
        HONDURAN CHILDREN NEEDED HELP.
      </h1>
      <h1 className="row text text-bold pl-2">SHE ANSWERED THE CALL.</h1>
      <div className="button-container justify-content-between"> 
        <div className="row d-flex">
          <div className="col">
            <Button {...CTA1} />
          </div>
          <div className="col">
            <Button {...CTA2} />
          </div>
        </div>
      </div>
    {/* </div> */}
  </div>
)

export default Hero
