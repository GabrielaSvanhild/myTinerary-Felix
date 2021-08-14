const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

router
   .route('/cities')
   .get(citiesControllers.obtenerTotalCities)
   .post(citiesControllers.crearNuevaCity)


router.route('/cities/:id').get(citiesControllers.obtenerCity)

module.exports = router