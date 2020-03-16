import React from "react"
import Button from "./Button"

const Lists = ({ lists, onHandleClick }) => {
  return (
    <ul>
      {lists.map(list => (
        <li key={list.alpha3Code}>
          {list.name}{" "}
          <Button text="show" onHandleClick={onHandleClick(list.name)} />
        </li>
      ))}
    </ul>
  )
}

export default Lists
