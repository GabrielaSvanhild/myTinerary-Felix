import axios from 'axios'
const itinerariesActions={
    getAllItineraries:()=>{
        return async (dispatch,getState)=>{
            try{
                let response= await axios.get('http://localhost:4000/api/itineraries')
                if(!response.data.success){
                    return{success:false, error:"error"}    
                    /* throw new Error('Problems with Back-end') */
                }
                 dispatch({type:"GET_ITINERARIES", payload:response.data.response })
            }catch(e){
                return{success:false, error:e}    

            }
            
        }
    },
    getItinerariesOfOneCity:(id)=>{
        return async (dispatch,getState)=>{
            try{
                let response= await axios.get(`http://localhost:4000/api/itineraries/${id}`)
                if(!response.data.success){
                    return{success:false, error:"error"}    
                    /* throw new Error('Problems with Back-end') */
                }
                 dispatch({type:"GET_ITINERARIES_OF_CITY", payload:response.data.response })
            }catch(e){
                return{success:false, error:e}    

            }
            
        }
    }

}
export default itinerariesActions