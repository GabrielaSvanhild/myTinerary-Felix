import { combineReducers } from 'redux'
import citiesReducer from './citiesReducers'
import itinerariesReducers from './itinerariesReducers'

const rootReducer = combineReducers({
   cities: citiesReducer,
   itineraries: itinerariesReducers
})

export default rootReducer