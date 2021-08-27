const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers= require('../controllers/itinerariesControllers')
const userControllers= require('../controllers/userControllers')
const passport = require('passport')
const validator = require('../controllers/validator')


router
   .route('/cities')
      .get(passport.authenticate('jwt',{session:false}),citiesControllers.obtenerTotalCities)
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
   .post(validator,userControllers.newUser) 

router.route('/user/signin')
   .post(userControllers.userLogued)

module.exports = router