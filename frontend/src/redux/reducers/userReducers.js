const userReducer = (state = { token: null, firstName: null,src:null,_id:null }, action) => {


    switch(action.type){

        case 'LOG_IN': 
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('firstName', action.payload.firstName)
        localStorage.setItem('src', action.payload.src)
        localStorage.setItem('_id', action.payload._id)
        return {
            ...state,
            token: action.payload.token,
            firstName: action.payload.firstName,
            src: action.payload.src,
            _id: action.payload._id
         }
         case 'LOG_OUT': 
         localStorage.removeItem('token')
         localStorage.removeItem('firstName')
         localStorage.removeItem('src')
         localStorage.removeItem('_id')
         return {
            ...state,
            token: null,
            firstName: null,
            src: null,
            _id:null
         }
        default:
            return state
    }
}  
export default userReducer
