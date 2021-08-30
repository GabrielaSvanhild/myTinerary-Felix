const userReducer = (state = { token: null, firstName: null,src:null }, action) => {


    switch(action.type){

        case 'LOG_IN': 
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('firstName', action.payload.firstName)
        localStorage.setItem('src', action.payload.src)
        return {
            ...state,
            token: action.payload.token,
            firstName: action.payload.firstName,
            src: action.payload.src
         }
         case 'LOG_OUT': 
         localStorage.removeItem('token')
         localStorage.removeItem('firstName')
         localStorage.removeItem('src')
         return {
            ...state,
            token: null,
            firstName: null,
            src: null
         }
        default:
            return state
    }
}  
export default userReducer
