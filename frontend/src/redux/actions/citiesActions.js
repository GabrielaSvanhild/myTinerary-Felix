import axios from 'axios'
const citiesActions={
    getAllCities:()=>{
        return async (dispatch,getState)=>{
                try{
                    let response= await axios.get('http://localhost:4000/api/cities')
                     if(!response.data.success){
                        return{success:false, error:"error"}   
                     }
                     dispatch({type:"GET_ALL_CITIES", payload:response.data.response })
                }catch(e){
                    return{success:false, error:e}   
                }
                /* let response= await axios.get('http://localhost:4000/api/cities')
                console.log(response.data.response)
                if(!response.data.success){
                    throw new Error('Problems with Back-end-Cities')
                }
                dispatch({type:"GET_ALL_CITIES", payload:response.data.response }) */
        
            
        }
    },
    filterCities:(input_entered)=>{
        return  (dispatch,getState)=>{
            dispatch({type:"GET_CITIES_FILTERED", payload:input_entered })
        }
    }

}
export default citiesActions