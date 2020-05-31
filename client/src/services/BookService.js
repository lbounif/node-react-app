import axios from 'axios'

export default {
  getAll: async () => {
    let res = await axios.get(`/api/book`)
    console.log("response from front is: ", res)
    return res.data || [];
  }
}