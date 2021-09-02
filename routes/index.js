const express = require('express')
const router = express.Router()
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers= require('../controllers/itinerariesControllers')
const userControllers= require('../controllers/userControllers')
const passport = require('passport')
const validator = require('../controllers/validator')
const activitiesControllers = require('../controllers/activitiesControllers')


router.route('/cities')
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

router.route('/itinerary/like/:id')
   .put(passport.authenticate('jwt',{session:false}),itinerariesControllers.like_dislike_itinerary)

router.route('/itinerary/comments/:id')
   .put(passport.authenticate('jwt',{session:false}),itinerariesControllers.modifyItineraryComment)

router.route('/itineraries/:id')
   .get(itinerariesControllers.getItinerariesOfCity)

/* router.route('/comment/:id')
   .delete(itinerariesControllers.deleteComment)
   .put(itinerariesControllers.modifyComment)
 */


router.route('/users/validation')
   .get(passport.authenticate('jwt',{session:false}),userControllers.authenticateToken)

router.route('/users')
   .get(userControllers.getUser)

router.route('/user/signup')
   .post(validator,userControllers.newUser) 

router.route('/user/signin')
   .post(userControllers.userLogued)

router.route('/activities')
   .post(activitiesControllers.createAnActivity)

router.route('/activities/:id')
   .get(activitiesControllers.getActivitiesOfItinerary)



module.exports = router