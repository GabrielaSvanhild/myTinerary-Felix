import { combineReducers } from 'redux'
import citiesReducer from './citiesReducers'

const rootReducer = combineReducers({
   cities: citiesReducer,
})

export default rootReducer