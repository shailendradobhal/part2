import React from "react"
import Person from "./Person"

const Persons = ({ persons, search, onHandleDelete }) => {
  return persons
    .filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    .map(person => (
      <Person
        person={person}
        key={person.id}
        onHandleDelete={onHandleDelete(person.id)}
      />
    ))
}

export default Persons
