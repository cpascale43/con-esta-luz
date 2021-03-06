import React from "react"

export const Button = ({ link, text, type = "button-primary" }) => (
  <a
    className={`button ${type} d-flex align-items-center justify-content-center`}
    href={link}
    target="_blank"
    rel="noreferrer"
  >
    <p>{text}</p>
  </a>
)
