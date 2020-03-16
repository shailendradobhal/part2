import React from "react"

const Button = ({ onHandleClick, text }) => (
  <button onClick={onHandleClick}>{text}</button>
)

export default Button
