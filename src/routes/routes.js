const { Router } = require('express')

const casesController = require('../controllers/casesController')

const routes = Router()

routes.get('/', (req, res) => {
    console.log('Hello world')
})

routes.post('/case', casesController.create)
routes.get('/case', casesController.indexAll)

module.exports = routes