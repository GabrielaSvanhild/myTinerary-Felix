import {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'

const City = (props) => {

   const [city,setCity]=useState({})

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/city/${props.match.params.id}`)
        .then(response => {
            setCity(response.data.response) 
        })
    },[])

    return(
        <>
            <Header/>
            <div className="contenedor-hero-ciudad" style={{backgroundImage:`url("${city.src}")`}}> 
                <h1>Welcome to {city.name}</h1>
            </div>
            <Footer/>
        </>
    )
}
export default City



{/* <>
<Header/>
<div className="contenedor-hero-ciudad" style={{backgroundImage:`url("${city.src}")`}}> </div>

<Footer />
</> */}