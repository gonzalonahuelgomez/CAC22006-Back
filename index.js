require('dotenv').config()

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

app.use(require('./router'))

app.use((req, res, next) => {
    res.status(404).send('Not Found')
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))