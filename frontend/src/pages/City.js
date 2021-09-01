import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import Itinerary from'../components/Itinerary'
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions'
import citiesActions from '../redux/actions/citiesActions'
import NoItineraries from '../components/NoItineraries';


const City = (props) => {
    const [city,setCity]=useState({})
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        window.scrollTo(0,0)
         if(props.cities.length===0){
            props.history.push('/cities')
            return false
        }
        setCity(props.cities.find(city=> city._id===props.match.params.id))
        props.getItinerariesOfCity(props.match.params.id)
        .then((res)=>{
            if(res && res.error){
                swal("Error","Sorry the itineraries are not found" ,"error")
                props.history.push("/cities")
            }else{
                setLoading(false)
            }
        })
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
            {
                props.itineraries.length>0
                ?props.itineraries.map((itinerary,index)=> <Itinerary  key={itinerary._id} itinerary={itinerary}/>)
                :<NoItineraries/>

            }
            <div className="contenedor-ciudad">
                <button className="boton-regreso-cities"> <Link to="/cities"><p>BACK TO CITIES!</p></Link> </button>  
            </div>
            
            <Footer/> 
        </>
    )
}

const mapStateToProps = (state)=>{
    return{ 
       itineraries: state.itineraries.itineraries_city,
       cities: state.cities.total_cities
    }
}

const mapDispatchToProps = {
    getItineraries:itinerariesActions.getAllItineraries,
    getItinerariesOfCity:itinerariesActions.getItinerariesOfOneCity
 }


export default connect(mapStateToProps, mapDispatchToProps)(City)





























    /* useEffect(()=>{
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
        axios.get('http://localhost:4000/api/itineraries')
        .then(response=> {
            setItineraries(response.data.response)
            console.log(response.data.response)
        })
        .catch((error)=>console.log(error))
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
            {
                itineraries.map(itinerary=>{
                    return <Itinerary itinerary={itinerary}/>
                })
            }
            <div className="contenedor-ciudad">
                <button className="boton-regreso-cities"> <Link to="/cities"><p>BACK TO CITIES!</p></Link> </button>  
            </div>
            
            <Footer/> 
        </>
    ) */