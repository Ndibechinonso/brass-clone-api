import Axios from 'axios'
const baseURL = 'https://rest-api-dummy.herokuapp.com/api'
// Create an axios instance
const api = Axios.create({
  baseURL,
})
export default api