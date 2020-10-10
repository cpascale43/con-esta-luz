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

export const FlagIcon = ({ onClick, src, alt }) => (
  <button
    type="button"
    className="flag"
    onClick={onClick}
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <img style={{ margin: "0", width: "28px" }} src={src} alt={alt} />
  </button>
)

export const PartnerIcon = ({ id, src, alt }) => {
  return (
    <img
      src={src}
      style={{ marginRight: id === 4 ? "0" : "1em" }}
      alt={alt}
    />
  )
}

// d-flex justify-content-center align-items-baseline
//
