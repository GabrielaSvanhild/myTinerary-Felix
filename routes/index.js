const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers= require('../controllers/itinerariesControllers')

router
   .route('/cities')
      .get(citiesControllers.obtenerTotalCities)
      .post(citiesControllers.crearNuevaCity)

router.route('/city/:id')
   .get(citiesControllers.obtenerCity)
   .delete(citiesControllers.borrarCity)
   .put(citiesControllers.modificarCity)

router.route('/itineraries')
   .get(itinerariesControllers.getAllItineraries)
   .post(itinerariesControllers.createAnItinerary)

router.route('/itinerary/:id')
   .delete(itinerariesControllers.deleteItinerary)

module.exports = router