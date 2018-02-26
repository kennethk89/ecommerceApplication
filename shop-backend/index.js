const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')
const fs = require('fs')

let cart = []

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.json())

fs.readFile('cart.json', (err, data)=>{
    if (data) {
        cart = JSON.parse(data)
    }
})

app.get('/cart', (req, res) => {
    res.send(cart)
})

app.post('/cart', (req, res)=>{
    cart = req.body
    res.json('win')
    fs.writeFile('cart.json', JSON.stringify(cart))
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})