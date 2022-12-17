const {Router} = require('express')
const controller = require('../controllers/controller')
const router = Router()
router.get('/data', controller.data_get)
router.post('/data',controller.data_post)

module.exports = router