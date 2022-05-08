import axios from 'axios'
import {Person} from "../global/types";


const base_url = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(base_url)
  return request.then((response) => response.data)
}

const create = (newPerson: Person) => {
  const request = axios.post(base_url, newPerson)
  return request.then((response) => response.data)
}

const remove = (id:string) => {
  const request = axios.delete(`${base_url}/${id}`)
  return request.then((response) => response.data)
}

const update = (person:Person) => {
  const request =
}

export default { getAll, create, remove }
