import React from "react"

const CountryDetail = ({
  countries: { name, capital, flag, languages, population }
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>capital {capital}</div>
      <div>population {population}</div>
      <h2>Language</h2>
      <ul>
        {languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <div>
        <img style={{ width: "100px" }} src={flag} alt={`${name} flag`} />
      </div>
    </div>
  )
}

export default CountryDetail
