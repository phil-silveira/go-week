const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(
	'mongodb://go-week:go-week123@ds217360.mlab.com:17360/go-week-database',
	{ useNewUrlParser: true }
)

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
	return res.send('<h3>Hello World<h3>');
})

app.listen(PORT, () => {
	console.log(`listening on localhost:${PORT}`)
})
