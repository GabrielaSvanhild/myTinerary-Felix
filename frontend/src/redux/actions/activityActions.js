import axios from 'axios'
const activityActions={
    getActivityOfItinerary:(id)=>{
        return async () =>{
            try{
                let response= await axios.get(`http://localhost:4000/api/activities/${id}`)
                if(!response.data.success){
                    return{success:false, error:"error"}    
                }else{
                    return{success:true, response: response.data.response}
                }
                 
            }catch(e){
                return{success:false, error:e}    

            }
        }
    }
}
export default activityActions