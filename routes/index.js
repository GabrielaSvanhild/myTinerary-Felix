const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers= require('../controllers/itinerariesControllers')
const userControllers= require('../controllers/userControllers')
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
   .get(itinerariesControllers.getAnItinerary)
   .delete(itinerariesControllers.deleteItinerary)
   .put(itinerariesControllers.editItinerary)

router.route('/itineraries/:id')
   .get(itinerariesControllers.getItinerariesOfCity)

router.route('/users')
   .get(userControllers.getUser)

router.route('/user/signup')
   .post(userControllers.newUser) 

router.route('/user/signin')
   .post(userControllers.userLogued)

module.exports = router