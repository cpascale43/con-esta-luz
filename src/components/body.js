import React from "react"

import "./body.css"

const Body = () => (
  <div className="body-container triangle">
    <div className="body-text">
      <h2>
        Fierce defender of children. Serial entrepreneur.
        <br /> Rabid soccer fan. Spiritual beacon.
      </h2>
      <p>
        We're excited to introduce you to this transformative force of nature,
        Sor Maria Rosa Leggol—a 93-year-old Franciscan nun and humanitarian with
        a 70+ year legacy of improving the lives of Honduras' most vulnerable.
        Con Esta Luz (With This Light) is a feature length documentary film that
        shares her story through the eyes of young people whose lives she
        forever changed.
      </p>
      <p>Coming 2021.</p>
    </div>
    <div
      className="video-container"
      //   style={{ width: "1200px", height: "600px", backgroundColor: "black" }}
    ></div>

    <div className="quote-text-container">
      <p className="quote-text">
        I will always need a lighthouse, a beacon of light, because with that
        light I can get through to people to understand them, so I can help
        them, so they can have relief. My life is, how to relieve others? How
        can I make them feel, even a little bit, that God loves them.
      </p>
      <p className="quote-attribution-text">SOR MARIA ROSA LEGGOL</p>
    </div>

    <div className="partner-text-container">
      <h2>PARTNERS</h2>
      <p className="partner-text">
        Several organizations in the USA and Canada were established to support
        the ongoing work of the charitable organizations founded by Sor Maria
        Rosa focusing on education, healthcare, housing and entrepreneurship.
      </p>
      <div className="partner-logos-container">
        <button>hello</button>
        <button>hello</button>
        <button>hello</button>
        <button>hello</button>
        <button>hello</button>
      </div>
    </div>
  </div>
)

export default Body
