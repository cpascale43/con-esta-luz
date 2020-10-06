import React from "react"

// import "./button.css"

export const Button = ({ onClick, text, type="button-primary" }) => (
  <button className={`button ${type}`} onClick={onClick}>
    <p className={`${type}-text`}>{text}</p>
  </button>
)
