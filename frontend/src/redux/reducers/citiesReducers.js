const citiesReducer = (state = { total_cities: [], filtered_cities:[] }, action) => {
    // De acuerdo a la action que reciba tendra que modificar el store
    // de alguna manera.
    switch (action.type) {
       case 'GET_ALL_CITIES':
          return {
             ...state,
             total_cities: action.payload,
             filtered_cities:action.payload
          }
        case 'GET_CITIES_FILTERED':
          return{
              ...state,
            filtered_cities:state.total_cities.filter(city=>city.name.toUpperCase().trim().startsWith(action.payload.trim().toUpperCase())),
          }
       default:
          return state
    }
 }
 
 export default citiesReducer