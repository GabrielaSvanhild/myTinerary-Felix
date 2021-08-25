

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect,useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'

const SignUp = (props) => {
    let field_empty=""
    const [countries,setCountries]=useState([])
    const [dataUser, setDataUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        src:"",
        country:""
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

    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all?fields=name')
        .then((res)=>setCountries(res.data))
        .catch((error)=>console.log(error))
    },[])
    const inputHandler=(e)=>{
        const value_input = e.target.value
        const field = e.target.name
        setDataUser({...dataUser, [field]:value_input})
    }
    
    console.log(Object.values(dataUser))
    const submit=()=>{
        Object.values(dataUser).forEach((field_value)=>!field_value && (field_empty = true))
        if(field_empty){
            Toast.fire({
                icon: 'error',
                title: 'Please fill all the fields'
              })
        }else{
            axios.post('http://localhost:4000/api/user/signup',dataUser)
            .then((res)=>{
                if(!res.data.success){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.error
                      })
                }else{
                    Toast.fire({
                        icon: 'success',
                        title: 'Cool your username was created successfully'
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
                        <h2 className="title-form">Create an Account!</h2>
                        <input type="text" name="firstName" id="firstName" placeholder="FirstName" onChange={inputHandler} />
                        <input type="text" name="lastName" id="lastName" placeholder="LastName" onChange={inputHandler}/>
                        <input type="email" name="email" id="email" pattern=".+@.\.com" size="30" placeholder="E-mail" onChange={inputHandler}/> 
                        <input type="password" name="password" id="password" placeholder="Password" onChange={inputHandler}/>
                        <input type="url" name="src" id="src" placeholder="Url of your picture" onChange={inputHandler}/>
                        <select name="country" onChange={inputHandler} >
                        <option className="option-country">Country</option>
                        {countries.map((country)=><option key={country.name} value={country.name}>{country.name}</option>)}
                        </select>
                        <button onClick={submit} className="btn btn-primary my-2" type="button" >SEND</button>
                    </div>
                </div>
                
            </main>
        </>
    )
}
export default SignUp