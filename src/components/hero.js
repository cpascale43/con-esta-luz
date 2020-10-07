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
    <h1 className="text text-normal">
      HONDURAN <br className="visible-xs" />
      CHILDREN <br className="visible-xs" />
      NEEDED HELP.{" "}
    </h1>
    <h1 className="text text-bold">
      SHE ANSWERED <br className="visible-xs" />
      THE CALL.
    </h1>
    <div className="button-container">
      <div>
        <Button {...CTA1} />
      </div>
      <div>
        <Button {...CTA2} />
      </div>
    </div>
  </div>
)

export default Hero
