import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

import { SpainFlag } from "./images"

import "./icons.css"

library.add(fab)

export const SocialIcon = ({ url, icon }) => (
  <a
    href={url}
    className="icon social"
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <FontAwesomeIcon icon={icon} size="m" />
  </a>
)

export const FlagIcon = ({ src, alt, onClick }) => (
  <a
    type="button"
    className="flag"
    onClick={onClick}
    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <img style={{margin: '0'}} src={src} alt={alt} />
  </a>
)
