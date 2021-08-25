import Header from '../components/Header'
import Footer from '../components/Footer'
import {useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

const SignIn = () => {
    let field_empty=""
    const [loggedUser, setloggedUser]=useState({
        email:"",
        password:""
    })
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
            axios.post('http://localhost:4000/api/user/signin',loggedUser)
            .then((res)=>{
                if(!res.data.success){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.error
                      })
                }else{
                    Toast.fire({
                        icon: 'success',
                        title: "Cool your username exist"
                      })
                } 
            })
            .catch((error)=>{
                console.log(error.message)
                Toast.fire({
                    icon: 'error',
                    title: "Sorry we have technical problems"
                  })
            })  
        }     
    }

    return(
        <>
            <Header/>
            <main className="main-form" style={{backgroundImage:`url("assets/Home-8.png")`}}>
                <div className="contenedor-form">
                    <div className="form-signIn">
                        <h2 className="title-form">Welcome back!</h2>
                        <input type="email" name="email" onChange={inputHandler} placeholder="E-mail"/> 
                        <input type="password" name="password" onChange={inputHandler} placeholder="Password"/>
                        <button onClick={submit} className="btn btn-primary my-2" >SEND</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
    
}
export default SignIn