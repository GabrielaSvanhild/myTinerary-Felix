import axios from 'axios'
import { Input } from 'reactstrap';
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
                if(!response.data.success) return{success:false, error:"error"}    
                    /* throw new Error('Problems with Back-end') */
                
                 dispatch({type:"GET_ITINERARIES_OF_CITY", payload:response.data.response })
            }catch(e){
                return{success:false, error:e}    

            }
            
        }
    },
    likeDislikeItinerary:(id,token)=>{
        return async (dispatch,getState)=>{
            try{
                let response= await axios.put(
                    `http://localhost:4000/api/itinerary/like/${id}`,{},
                    {
                        headers: {
                        Authorization: 'Bearer ' + token,
                        },
                    }
                )
              if(response.data.success) return{success:true, response: response.data.response}
              else throw new Error()
            }catch(e){
                return{success:false, error:e}    

            }
        }
    },
    addCommentItinerary:(id,comment,token)=>{
        return async()=>{
            try{
                let response= await axios.put(`http://localhost:4000/api/itinerary/comments/${id}`,
                {comment, actionType:"addComment"},
                {
                    headers: {
                    Authorization: 'Bearer ' +token,
                    },
                }
                )
                if(response.data.success)  return{success:true, response: response.data.response}
                else throw new Error()
              }catch(e){
                  return{success:false, error:e}    
  
              }
        }
        
    },
    modifyComment:(commentId,comment,token)=>{
        return async()=>{
            try{
                let response= await axios.put(`http://localhost:4000/api/itinerary/comments/${commentId}`,
                {comment, actionType:"modifyComment"},
                {
                    headers: {
                    Authorization: 'Bearer ' + token,
                    },
                }
                )
                if(response.data.success)  return{success:true, response: response.data.response}
                else throw new Error()
              }catch(e){
                  return{success:false, error:e}    
  
              }
        }
        
    },
    deleteComment:(idComment,token)=>{
        return async(dispatch)=>{
            try{
                let response= await axios.put(`http://localhost:4000/api/itinerary/comments/${idComment}`,
                { actionType:"deleteComment"},
                {
                    headers: {
                    Authorization: 'Bearer ' + token,
                    },
                }
                )
                if(response.data.success){
                    return{success:true}
                }  
                else throw new Error()
              }catch(e){
                  return{success:false, error:e}    
  
              }
        }
        
    },
   




}
export default itinerariesActions