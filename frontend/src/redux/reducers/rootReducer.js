import { combineReducers } from 'redux'
import citiesReducer from './citiesReducers'
import itinerariesReducers from './itinerariesReducers'
import userReducer from './userReducers'

const rootReducer = combineReducers({
   cities: citiesReducer,
   itineraries: itinerariesReducers,
   user: userReducer
})

export default rootReducer