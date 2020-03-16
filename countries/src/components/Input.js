import React from "react"

const Input = ({ onHandleCountriesChange, value }) => (
  <input onChange={onHandleCountriesChange} value={value} />
)

export default Input
