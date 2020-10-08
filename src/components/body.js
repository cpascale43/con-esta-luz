import React from "react"

import "./body.css"

const Body = () => (
  <div className="triangle">
    <div className="container">
      <div className="row body-text body-container-left">
        <h2>
          Fierce defender of children. Serial entrepreneur.
          <br /> Rabid soccer fan. Spiritual beacon.
        </h2>
        <p>
          We're excited to introduce you to this transformative force of nature,
          Sor Maria Rosa
          <br /> Leggol—a 93-year-old Franciscan nun and humanitarian with a 70+
          year legacy of <br />
          improving the lives of Honduras' most vulnerable. Con Esta Luz (With
          This Light) is a <br />
          feature length documentary film that shares her story through the eyes
          of young
          <br /> people whose lives she forever changed.
        </p>
        <p className="bold-attribution-text">Coming 2021.</p>
      </div>

      <div
        className="row d-flex align-items-center"
        style={{ maxWidth: "90vw", height: 600, backgroundColor: "black" }}
      ></div>

      <div className="row d-flex justify-content-end align-items-center body-container-center">
        <p className="center-text quote-text">
          I will always need a lighthouse, a beacon of light, <br /> because
          with that light I can get through to people to <br />
          understand them, so I can help them, so they can have relief. <br />
          My life is, how to relieve others? How can I make <br />
          them feel, even a little bit, that God loves them.
        </p>
        <p className="bold-attribution-text">SOR MARIA ROSA LEGGOL</p>
      </div>

      <div className="row body-container-bottom d-flex justify-content-end align-items-center">
        <h2>PARTNERS</h2>
        <p className="center-text row">
          Several organizations in the USA and Canada were established to
          support <br />
          the ongoing work of the charitable organizations founded by Sor Maria{" "}
          <br />
          Rosa focusing on education, healthcare, housing and entrepreneurship.
        </p>
      </div>
    </div>
  </div>
)

export default Body
