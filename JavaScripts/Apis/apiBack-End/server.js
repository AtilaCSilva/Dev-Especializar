const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get((req, res) => res.send(req.query.name))
app.route('/').put((req, res) => res.send(req.body.name))
app.route('/:parametro').get((req, res) => res.send(req.params.parametro))
