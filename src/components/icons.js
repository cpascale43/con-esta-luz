import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import "./icons.css"

library.add(fab)

export const SocialIcon = ({ url, icon }) => (
  <a
    href={url}
    className="icon social"
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <FontAwesomeIcon icon={icon} size="1x" />
  </a>
)

export const FlagIcon = ({ src, alt, onClick }) => (
  <button
    type="button"
    className="flag"
    onClick={onClick}
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <img style={{ margin: "0" }} src={src} alt={alt} />
  </button>
)

export const PartnerIcon = ({ id, src, alt }) => {
  return (
    <div style={{ width: 150, height: 150, marginRight: id === 4 ? "0" : "1.5em" }}>
      <img style={{ margin: 0 }} src={src} alt={alt} />
    </div>
  )
}
