import {useState, useEffect} from 'react'
import axios from 'axios'

const City = (props) => {

   const [city,setCity]=useState({})

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/cities/${props.match.params.id}`)
        .then(response => {
            setCity(response.data.response)
            
        })
    },[])

    return(
        <h1>Soy la pagina de una ciudad {city.name} </h1>
    )
}
export default City