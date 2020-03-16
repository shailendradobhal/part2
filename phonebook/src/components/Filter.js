import React from "react"

const Filter = ({ search, onHandleSearch }) => (
  <div>
    Filter show with <input value={search} onChange={onHandleSearch} />
  </div>
)

export default Filter
