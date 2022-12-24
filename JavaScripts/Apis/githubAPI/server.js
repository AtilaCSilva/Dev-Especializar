import axios from 'axios'
import express from 'express'

const app = express()
app.listen('3000')

app.route('/').get((req, res) => {
  axios
    .get('https://api.github.com/users/atilaCSilva')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`)) // O Axios traz a resposta da API dentro do data
    .catch(error => console.log(error))
})
