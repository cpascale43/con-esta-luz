import React from "react"

import { Button } from "./button"

const CTA1 = {
  text: "STAY IN THE LOOP",
  onClick: () => {},
  //   styles: {
  //     borderRadius: "15px",
  //     width: '15em',
  //     border: "0.5em solid white",
  //     backgroundColor: "white",
  //   },
}

const CTA2 = {
  //   text: "LEARN MORE ABOUT SOCIEDAD AMIGOS DE LOS NIÑOS (SAN)",
  text: "STAY IN THE LOOP",
  onClick: () => {},
  //   styles: {
  //     width: '15em',
  //     borderRadius: "15px",
  //     border: "0.5em solid white",
  //     backgroundColor: "transparent",
  //   },
}

const Hero = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "15% 5%",
    }}
  >
    <h2>HONDURAN CHILDREN NEEDED HELP.</h2>
    <h1>SHE ANSWERED THE CALL.</h1>
    <div
      style={{
        width: "25%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
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
