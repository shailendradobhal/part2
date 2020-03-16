import axios from "axios"

const baseUrl = `http://localhost:3001/api/persons`

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data)
}

const create = personDetails => {
  return axios.post(baseUrl, personDetails).then(response => response.data)
}

const update = (id, personDetails) => {
  return axios
    .put(`${baseUrl}/${id}`, personDetails)
    .then(person => person.data)
}

const remove = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, update, create, remove }
