const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/todos/1'
https.get(API, res => {
  console.log(res.statusCode)
})
console.log('conectando API')
