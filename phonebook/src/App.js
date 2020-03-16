import React, { useState, useEffect } from "react"

import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import phoneService from "./services"
import Notification from "./components/Notification"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newPhoneNumber, setNewPhoneNumber] = useState("")
  const [search, setSearch] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    phoneService.getAll().then(persons => setPersons(persons))
  }, [])

  const onHandleSubmit = event => {
    event.preventDefault()

    const person = persons.find(person => person.name === newName)

    if (person) {
      const isConfirm = window.confirm(
        `${person.name} is already added to phonebook, replace the old number with new?`
      )
      const updatePerson = { ...person, phone: newPhoneNumber }
      if (isConfirm) {
        phoneService
          .update(updatePerson.id, updatePerson)
          .then(person => {
            setPersons(
              persons.map(p => (p.id === person.id ? updatePerson : p))
            )
          })
          .catch(error => {
            setErrorMessage(error.response.data)
          })
      }
      setNewName("")
      setNewPhoneNumber("")
    } else {
      const person = { name: newName, phone: newPhoneNumber }
      phoneService
        .create(person)
        .then(person => {
          setPersons([...persons, person])
          setNewName("")
          setNewPhoneNumber("")
        })
        .catch(error => {
          setErrorMessage(error.response.data)
          setTimeout(() => setErrorMessage(""), 5000)
        })
    }
  }

  const onHandleAddName = event => {
    setNewName(event.target.value)
  }

  const onHandleAddPhoneNumber = event => {
    setNewPhoneNumber(event.target.value)
  }

  const onHandleSearch = event => {
    setSearch(event.target.value)
  }

  const onHandleDelete = id => () => {
    phoneService
      .remove(id)
      .then(() => setPersons(persons.filter(person => person.id !== id)))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {errorMessage && <Notification message={errorMessage} />}
      <Filter search={search} onHandleSearch={onHandleSearch} />
      <h2>Add a new name</h2>
      <PersonForm
        onHandleSubmit={onHandleSubmit}
        newName={newName}
        onHandleAddName={onHandleAddName}
        newPhoneNumber={newPhoneNumber}
        onHandleAddPhoneNumber={onHandleAddPhoneNumber}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        search={search}
        onHandleDelete={onHandleDelete}
      />
    </div>
  )
}

export default App
