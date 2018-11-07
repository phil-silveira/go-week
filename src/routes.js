const express = require('express')

const routes = express.Router()

const TweetController = require('./controllers/TweetController')
const LikeController = require('./controllers/LikeController')

// tweet controller
routes.get('/tweets', TweetController.index)
routes.post('/tweets', TweetController.store)

// like  controller
routes.put('/likes/:id', LikeController.store)

module.exports = routes