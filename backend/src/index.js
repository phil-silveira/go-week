const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

// configure database
mongoose.connect(
    "mongodb://go-week:go-week123@ds217360.mlab.com:17360/go-week-database",
    { useNewUrlParser: true }
)

// configure express

app.use((req, res, next) => {
    req.io = io

    return next()
})

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(3000, () => {
    console.log(`server started on port 3000`)
})