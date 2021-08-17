const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')

router
   .route('/cities')
   .get(citiesControllers.obtenerTotalCities)
   .post(citiesControllers.crearNuevaCity)


router.route('/city/:id')
   .get(citiesControllers.obtenerCity)
   .delete(citiesControllers.borrarCity)
   .put(citiesControllers.modificarCity)

module.exports = router