import React from "react"

import { SocialIcon } from "../components/icons"
import { socialIcons } from "../constants/index"
import miraflores from "../images/miraflorescolorlogo.png"

import "./footer.css"

const Footer = () => (
  <div style={{ background: "#8cc7f1" }}>
    <footer id="footer-container" className="container p-3">
      <div className="row ft-row">
        <div className="ft-social-column col-3 miraflores-logo">
          <a href={"https://mirafloresfilms.com/"}>
            <img
              className="miraflores-logo"
              src={miraflores}
              style={{ margin: 0 }}
              alt="A green and teal logo representing Miraflores films."
            />
          </a>
        </div>

        <div className="ft-social-column col d-flex justify-content-end">
          {socialIcons.map(icon => (
            <div key={icon.id}>
              <SocialIcon {...icon} />
            </div>
          ))}
        </div>
      </div>

      <div className="row ft-row">
        <div className="col-4">
          <p
            className="ft-text bold"
            style={{ margin: 0, color: "whitesmoke" }}
          >
            Produced by Miraflores Films LLC
          </p>
        </div>
        <div className="col d-flex justify-content-end">
          <p
            className="ft-text bold"
            style={{ margin: 0, color: "whitesmoke" }}
          >
            info@withthislight.com
          </p>
        </div>
      </div>
    </footer>
  </div>
)

export default Footer
