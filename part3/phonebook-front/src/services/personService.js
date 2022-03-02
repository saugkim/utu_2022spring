import axios from 'axios'

//const baseUrl = '/api/persons'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = async () => {
console.log(baseUrl)
  const request = axios.get(baseUrl)
  const response = await request
    return response.data
}

const create = async (newObject) => {
  const request = axios.post(baseUrl, newObject)
  const response = await request
    return response.data
}

const remove = (id) => {
    const url = `${baseUrl}/${id}`
    console.log(url)
    return axios.delete(`${baseUrl}/${id}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, remove }
