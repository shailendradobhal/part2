import React from "react"
import Button from "./Button"

const Person = ({ person: { name, phone }, onHandleDelete }) => (
  <div key={name}>
    {name} {phone}
    <Button text="delete" onHandleClick={onHandleDelete} />
  </div>
)

export default Person
