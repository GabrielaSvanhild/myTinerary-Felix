import Header from '../components/Header'
import {useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions'
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom'

const SignIn = (props) => {

    let field_empty=""
    const [loggedUser, setloggedUser]=useState({
        email:"",
        password:""
    })

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    const inputHandler=(e)=>{
        const value_input = e.target.value
        const field = e.target.name
        setloggedUser({...loggedUser, [field]:value_input})
    }
    const submit=()=>{
        Object.values(loggedUser).forEach((field_value)=>!field_value && (field_empty = true))
        if(field_empty){
            Toast.fire({
                icon: 'error',
                title: "Please fill all the fields"
              }) 
        }else{
            props.logUser(loggedUser)
            .then((res)=>{
                if(res.data && !res.data.success){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.error
                    })
                }else if(res.data && res.data.success){
                    Toast.fire({
                        icon: 'success',
                        title: 'Welcome Back!'
                    })
                }else{
                    Toast.fire({
                        icon: 'error',
                        title: "Sorry we have technical problems, come back soon!"
                    })
                }
            })
        }     
    }
    const responseGoogle= async(response)=>{
        let userGoogle={
            email:response.profileObj.email,
            password:response.profileObj.googleId,
            flagGoogle: true,
        }
         props.logUser(userGoogle)
         .then((res)=>{
            if(res.data && !res.data.success){
                Toast.fire({
                    icon: 'error',
                    title: res.data.error
                })
            }else if(res.data && res.data.success){
                Toast.fire({
                    icon: 'success',
                    title: 'Welcome Back!'
                })
            }else{
                Toast.fire({
                    icon: 'error',
                    title: "Sorry we have technical problems, come back soon!"
                })
            }
        })
    }

    return(
        <>
            <Header/>
            <main className="main-form" style={{backgroundImage:`url("assets/Home-8.png")`}}>
                <div className="contenedor-form">
                    
                    <div className="form-signIn">
                        <h2 className="title-form">Welcome back!</h2>
                        <input className="email" type="email" name="email" onChange={inputHandler} placeholder="E-mail"/> 
                        <input className="password" type="password" name="password" onChange={inputHandler} placeholder="Password"/>
                        <button onClick={submit} className="boton-send btn btn-primary my-2" >SEND</button>

                        <GoogleLogin
                            clientId="171323830837-soags5m4c31eptkhuu3m757ufqus3t49.apps.googleusercontent.com"
                            buttonText="Sign Up with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        <h5>Don't have an account? </h5><Link to="/sign_up"><h6>Sign up here!</h6></Link> 
                    </div>
                </div>
            </main>
        </>
    )
    
}
const mapDispatchToProps = {
    /* loguin: userActions.login */
    logUser: userActions.signIn,
   
 }

export default connect(null, mapDispatchToProps)(SignIn) 

