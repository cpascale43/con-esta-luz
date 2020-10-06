import React from "react"

export const Button = ({ onClick, text, styles }) => (
  <button style={styles} onClick={onClick}>
    {text}
  </button>
)
