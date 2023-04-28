const express = require('express')
const {
    get_pokemon_json,
    get_pokemon_html
} = require("./handlers")

const app = express()
const port = 8080

app.get('/json/pokemon', get_pokemon_json)
app.get('/html/pokemon', get_pokemon_html)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
