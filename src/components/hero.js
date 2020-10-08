import React from "react"

import { Button } from "./button"
import "./button.css"
import "./heroText.css"

const CTA1 = {
  text: "STAY IN THE LOOP",
  onClick: () => {},
}

const CTA2 = {
  text: `LEARN ABOUT SOCIEDAD\nAMIGOS DE LOS NIÑOS (SAN)`,
  onClick: () => {},
  type: "button-secondary",
}

const Hero = () => (
  <div className="hero-container">
    <div style={{marginLeft: '8em'}} className="container">
      <h1 className="row text text-normal pl-2">
        HONDURAN <br className="visible-xs" />
        CHILDREN <br className="visible-xs" />
        NEEDED HELP.
      </h1>
      <h1 className="row text text-bold pl-2">
        SHE ANSWERED <br /> THE CALL.
      </h1>
      <div className="button-container">
        <div className="row d-flex flex-column">
          <div className="col py-2">
            <Button {...CTA1} />
          </div>
          <div className="col py-2">
            <Button {...CTA2} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
