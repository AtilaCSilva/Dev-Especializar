const express = require('express')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').post((req, res) => {
  const User = true

  const user23 = req.body[0].User23
  const user14 = req.body[1].User14

  if (User) {
    const { name, city, bio, favBooks } = user23
    res.send(
      `Olá, me chamo ${name} e vim da cidade de  ${city}. Eu sou ${bio}  \n
       Meus livros favoritos são: ${favBooks}
        `
    )
  } else if (!User) {
    const { name, city, bio, favBooks } = user14
    res.send(
      `Hello, my name is ${name} and i'm from ${city} city. ${bio} and  \n
        that are my favorites books: ${favBooks}
        `
    )
  }
})
