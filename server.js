const express = require('express');

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send({message: 'hello word'})
})

app.get('/teste1', (req, res) => {
    res.send({message: 'teste1'})
})

app.get('/teste2', (req, res) => {
    res.send({message: 'teste2'})
})
app.get('/teste3', (req, res) => {
    res.send({message: 'teste3'})
})

module.exports = app