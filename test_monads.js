const _ = require("lodash");
const Maybe = require("lodash-fantasy/data/Maybe");
const axios = require("axios");
axios.get('http://demo3521206.mockable.io/test').then((response) => {
  if (response.data.code) {
    throw response.data.code
  }
  return response.data
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
})