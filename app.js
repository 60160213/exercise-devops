const express = require('express')
const app = express()
const port = 3000 

let items = [
    { id: 1, name: 'iPhone12'},
    { id: 2, name: 'Galaxy S20'}
]

app.get('/', (req,res) => {
    res.send('Hello World')
})

function getItems() {
    return items
}

app.get('/items', (req,res) => {
    res.json(getItem())
})

module.exports = app 

