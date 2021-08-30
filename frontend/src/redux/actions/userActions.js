import axios from 'axios'

const userActions={
    signIn: (user)=>{
        return async(dispatch,getState)=>{
           try{
                let response = await axios.post('http://localhost:4000/api/user/signin',{...user})
                if(response.data.success){
                    dispatch({type:'LOG_IN', payload: response.data.response}) 
                }
                return response
           }catch(e){
                return({success:false, error:e})
           }
        }
    },
    signUp:(newUser)=>{
        return async(dispatch,getState)=>{
            try{
                let response= await axios.post('http://localhost:4000/api/user/signup',{...newUser})
                if (response.data.success){
                    dispatch({type:'LOG_IN', payload: response.data.response}) 
                }
                return response
            }catch(e){
                return({success:false, error:e})
            }  
        }
    },

    logOut: () => {
        return (dispatch, getState) => {
           dispatch({ type: 'LOG_OUT' })
        }
     },
     logInLS: (token) => {
        return async (dispatch, getState) => {
           try {
              let response = await axios.get(
                 'http://localhost:4000/api/users/validation',
                 {
                    headers: {
                       Authorization: 'Bearer ' + token,
                    },
                 }
              )
              dispatch({
                 type: 'LOG_IN',
                 payload: {
                    token,
                    firstName: response.data.firstName,
                    src: response.data.src,
                 },
              })
           } catch (error) {
              return dispatch({ type: 'LOG_OUT' })
           }
        }
     },

}
export default userActions



/* let response = await axios.post('http://localhost:4000/api/user/signup',{...newUser}) 
            if (response.data.success){
                dispatch({type:'SIGN_UP', payload: response.data.response})
            }
            return response */
            /* try{
                let response= axios.post('http://localhost:4000/api/user/signup',{...newUser})
                    if(!response.data.success){
                        return{success:false, error:response.data.error}   
                    }
                    dispatch({type:"LOG_IN", payload:response.data.response })
            }catch(e){
                return{success:false, error:"technical problems"}   
            }    
        } */