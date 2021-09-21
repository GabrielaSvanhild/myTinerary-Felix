import axios from 'axios'

const userActions={
    signIn: (user)=>{
        return async(dispatch,getState)=>{
           try{
                let response = await axios.post('https://mytinerary-felix.herokuapp.com/api/user/signin',{...user})
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
                let response= await axios.post('https://mytinerary-felix.herokuapp.com/api/user/signup',{...newUser})
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
                 'https://mytinerary-felix.herokuapp.com/api/users/validation',
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
                    _id: response.data._id
                 },
              })
           } catch (error) {
              return dispatch({ type: 'LOG_OUT' })
           }
        }
     },

}
export default userActions


