import axios from 'axios'

axios
  .get('https://www.google.com/')
  .then(function (res) {
    console.log(res.data)
  })
  .catch(function (error) {
    console.log(error)
  })
