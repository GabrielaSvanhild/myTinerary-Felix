import axios from 'axios'
const citiesActions={
    getAllCities:()=>{
        return async (dispatch,getState)=>{
            let response= await axios.get('http://localhost:4000/api/cities')
            let data= response.data.response
            dispatch({type:"GET_ALL_CITIES", payload:data })
        }
    },
    filterCities:(input_entered)=>{
        return  (dispatch,getState)=>{
            dispatch({type:"GET_CITIES_FILTERED", payload:input_entered })
        }
    }

}
export default citiesActions