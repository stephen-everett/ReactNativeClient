/*
    This instantiates an axios object. This object can then be used
    to make API calls anywhere it is imported.
    https://www.npmjs.com/package/axios
*/


import axios from 'axios'


const baseURL = "https://partionapp.com:5000/api"

export default axios.create({
  baseURL,
});