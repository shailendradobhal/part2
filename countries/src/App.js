import React, { useState, useEffect } from "react"
import axios from "axios"
import Input from "./components/Input"
import Lists from "./components/lists"
import CountryDetail from "./components/CountryDetail"

const App = () => {
  const [countryName, setCountryName] = useState("")
  const [countries, setCountries] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(({ data }) => {
        setCountries(data)
        setError(false)
      })
      .catch(err => setError(true))
  }, [countryName])

  const onHandleCountriesChange = ({ target: { value } }) => {
    setCountryName(value)
  }

  const onHandleShowBtn = country => () => setCountryName(country)

  const list = () => {
    const length = countries.length

    if (length === 1) {
      return <CountryDetail countries={countries[0]} />
    } else if (length > 10) {
      return <p>Too many matches, specify another filter</p>
    } else if (length < 10) {
      return <Lists lists={countries} onHandleClick={onHandleShowBtn} />
    }
  }

  return (
    <>
      <Input
        onHandleCountriesChange={onHandleCountriesChange}
        value={countryName}
      />
      {error && countryName !== "" ? "No Country found" : list()}
    </>
  )
}

export default App
