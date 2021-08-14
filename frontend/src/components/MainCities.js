import {useState, useEffect} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'

/* const cities=[
    {ruta:"/assets/oslo.jpg",texto:"Oslo-Norway", id:0},
    {ruta:"/assets/arendal.jpg",texto:"Arendal-Norway",id:1},
    {ruta:"/assets/bergen.jpg",texto:"Bergen-Norway",id:2},
    {ruta:"/assets/stavanger.jpg",texto:"Stavanger-Norway",id:3},
    {ruta:"/assets/copenahue.jpeg",texto:"Copenhagen-Denmark",id:4},
    {ruta:"/assets/Reykjavik.jpeg",texto:"Reykjavik-Iceland",id:5},
    {ruta:"/assets/Selfoss islandia.jpeg",texto:"Selfoss-Iceland",id:6},
    {ruta:"/assets/Saariselkä.jpeg",texto:"Saariselkä-Findald",id:7},
    {ruta:"/assets/Skellefteå.jpg",texto:"Skellefteå-Sweden",id:8},
    {ruta:"/assets/helsinki.jpeg",texto:"Helsinki-Finland",id:9},
    {ruta:"/assets/rovaniemi.jpeg",texto:"Rovaniemi-Finland",id:10},
    {ruta:"/assets/estocolmo.jpg",texto:"Stockholm-Sweden",id:11},
    {ruta:"/assets/helsinki.jpeg",texto:"Helsinki-Finland",id:12},
    {ruta:"/assets/rovaniemi.jpeg",texto:"Rovaniemi-Finland",id:13},
    {ruta:"/assets/estocolmo.jpg",texto:"Stockholm-Sweden",id:14},  
 ] */

const MainCities = () => {
    const [cities,setCities]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/api/cities')
        .then(response => setCities(response.data.response))
    eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const [ciudad_buscada, setCiudad_buscada]=useState("")
    const[ciudad_no_encontrada, setCiudad_no_encontrada]=useState(false)

    const inputHandler=(e)=>{
        setCiudad_buscada(e.target.value)
    }
   /*  const pepe="hola"
    const respuesta=pepe.startsWith("")
    console.log(respuesta) */

    return (
        <main>
            <div className="contenedor-buscador-cities">
                <h2 className="titulo-cities">Find Your Adventure</h2>
                <input type="text" placeholder="Search by destination" onChange={inputHandler}/>
            </div>
            <div className='contenedor-cities'>
                {   
                    cities.map((city,index)=>{
                        return(
                                city.name.toUpperCase().startsWith(ciudad_buscada.trim().toUpperCase())&&
                                <Link key={index} to ={`/info-city/${city._id}`}><div className={`foto-cities foto-city${index}`}
                                style={{backgroundImage:`url("${city.src}")`,
                                }}>
                                    <h3 className="texto-fotos-cities">{city.name}</h3>                           
                                </div></Link>  
                        )

                    }) 
                }            
            </div> 
        </main>
    )
 }
 export default MainCities

