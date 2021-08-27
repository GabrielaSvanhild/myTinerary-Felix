

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect,useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions'


const SignUp = (props) => {

    let field_empty=""
    const [errors,setErrors]=useState({})
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
        window.scrollTo(0,0)
        axios.get('https://restcountries.eu/rest/v2/all?fields=name')
        .then((res)=>setCountries(res.data))
        .catch((error)=>console.log(error))
    },[])


    const inputHandler=(e)=>{
        const value_input = e.target.value
        const field = e.target.name
        setDataUser({...dataUser, [field]:value_input})
    }
    
    const submit= ()=>{
         Object.values(dataUser).forEach((field_value)=>!field_value && (field_empty = true))
        if(field_empty){
            Toast.fire({
                icon: 'error',
                title: 'Please fill all the fields'
              }) 
        }else{ 
            props.postNewUser(dataUser)
            .then((res)=>{
                console.log(res.data)
                if(res.data && !res.data.success && res.data.errors){
                    setErrors({})
                    res.data.errors.map(error=>setErrors(msjError=>{
                        return{
                            ...msjError,
                            [error.path]: error.message,
                        }
                    }))
                    console.log(errors)
                     /* array.map(obj=>setErrors(msjError=>{
                        return{
                            ...msjError,
                [obj.nombre]: obj.cualidad,
             }
           }))  */
                }else if( res.data && !res.data.success){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.error
                      }) 
                }else if(res.data && res.data.success){
                    Toast.fire({
                        icon: 'success',
                        title: 'Cool your username was created successfully'
                      })
                }else{//este es el caso en que no tengo comunicacion con el back!
                    Toast.fire({
                        icon: 'error',
                        title: 'Sorry we have technical problems'
                      })
                }
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
                        <p>{errors.firstName}</p>
                        <input type="text" name="lastName" id="lastName" placeholder="LastName" onChange={inputHandler}/>
                        <p>{errors.lastName}</p>
                        <input type="email" name="email" id="email"  placeholder="E-mail" onChange={inputHandler}/>
                        <p>{errors.email}</p> 
                        <input type="password" name="password" id="password" placeholder="Password" onChange={inputHandler}/>
                        <p>{errors.password}</p> 
                        <input type="url" name="src" id="src" placeholder="Url of your picture" onChange={inputHandler}/>
                        <p>{errors.url}</p> 
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
const mapDispatchToProps = {
    /* loguin: userActions.login */
    postNewUser: userActions.signUp,
   
 }
export default connect(null, mapDispatchToProps)(SignUp)





/* .then((res)=>{
                if(res && res.error){
                    Toast.fire({
                        icon: 'error',
                        title: res.error
                      })
                }else{
                    Toast.fire({
                        icon: 'success',
                        title: 'Cool your username was created successfully'
                      })
                }
            }) */
            /*  const [pepe,setpepe]=useState({})
    array.map(objeto=>{
        setpepe(prevState=>{
            return{
                ...prevState,
                [objeto.nombre]:objeto.cualidad,
            }
        }) 
        
    })

   
   /*  setpepe(array.map(objeto=>{
        return{
            [objeto.nombre]:objeto.cualidad,
        }
    })) */
    /* nuevo=array.map(objeto=>{
        return{
            [objeto.nombre]:objeto.cualidad,
        }
    }) */
    /* setpepe(nuevo) */