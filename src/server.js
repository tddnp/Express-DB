const express = require("express")
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8081

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('sample')
})

app.listen(port, () => {
    console.log(`litsening on port ${port}`)
})