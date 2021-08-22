const itinerariesReducer = (state = {  total_itineraries:[],itineraries_city:[] }, action) => {
    switch(action.type){
        case 'GET_ITINERARIES':
        return {
            ...state,
            total_itineraries:action.payload
         }
         case 'GET_ITINERARIES_OF_CITY':
        return {
            ...state,
            itineraries_city:action.payload
         }
         default:
            return state
    }
}
export default itinerariesReducer