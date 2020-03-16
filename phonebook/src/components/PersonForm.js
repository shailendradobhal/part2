import React from "react"

const PersonForm = ({
  newName,
  onHandleAddName,
  newPhoneNumber,
  onHandleAddPhoneNumber,
  onHandleSubmit
}) => (
  <form onSubmit={onHandleSubmit}>
    <div>
      <div>
        name: <input value={newName} onChange={onHandleAddName} />
      </div>
      <div>
        number:{" "}
        <input value={newPhoneNumber} onChange={onHandleAddPhoneNumber} />
      </div>
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
)

export default PersonForm
