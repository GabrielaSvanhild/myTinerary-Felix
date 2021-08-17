import {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import HeroCities from '../components/HeroCities';


const City = (props) => {
    const [city,setCity]=useState({})
    const[loading,setLoading]=useState(true)


    useEffect(()=>{
        window.scrollTo(0,0)
        axios.get(`http://localhost:4000/api/city/${props.match.params.id}`)
        .then(response => {
            if(response.data.success){
                setCity(response.data.response) 
            }else{
                swal("Error","Sorry the city is not found" ,"error")
                props.history.push("/cities")
            }
            
        })
        .catch(()=>{
            swal("Error","Sorry, we couldn't load the cities" ,"error")
            props.history.push("/cities")
         })
         .finally(()=>setLoading(false))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(loading){
        return(
            <>
                <div className="contenedor-loading">
                    <h2 className="loading">
                        Loading...
                    </h2>
                    <img src="/assets/icon_boat.gif" alt="gif"/>
               </div>  
            </>       
        )
    }

    return(
        <>
            <Header/>
            <div className={`contenedor-hero-ciudad hero-${city.name}`} style={{backgroundImage:`url("${city.src}")`}}> 
                <h1>Welcome to {city.name}</h1>
            </div>
            <div className="contenedor-ciudad">
                <img className="foto-cerrado" src="/assets/closed-1.png" alt="closed"/>
               <h3>Page under construction</h3>
                <button className="boton-regreso-cities"> <Link to="/cities"><p>BACK TO CITIES!</p></Link> </button>  
            </div>
            <Footer/> 
        </>
    )
}
export default City

