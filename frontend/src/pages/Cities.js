import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useState, useEffect} from 'react'
import{Link} from 'react-router-dom'
import swal from 'sweetalert';
import FilterNotFound from '../components/FilterNotFound';
import HeroCities from '../components/HeroCities';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'

const Cities = (props) => {
    const[loading,setLoading]=useState(true)
    const{filteredCities}=props
                 
    useEffect(()=>{
        window.scrollTo(0,0)
        props.getCities()
        .then((res)=>{
            if(res && res.error){
                swal("Error","Sorry the cities are not found" ,"error")
                     props.history.push("/") 
            }else{
                setLoading(false)
            }
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const inputHandler=(e)=>{
    props.filterCities(e.target.value)
    }
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
            <HeroCities/>
            <div className="contenedor-buscador-cities">
                <h2 className="titulo-cities">Find Your Adventure</h2>
                <input type="text" placeholder="Search by destination" onChange={inputHandler}/>
            </div>
            <div className='contenedor-cities'>
                {   
                   filteredCities.length===0 
                   ?<FilterNotFound/>       
                   :filteredCities.map((city,index)=>{
                       return(
                           <Link key={index} to ={`/info-city/${city._id}`}><div className={`foto-cities foto-city${index}`}
                           style={{backgroundImage:`url("${city.src}")`,
                           }}>
                               <h3 className="texto-fotos-cities">{city.name}</h3>                           
                           </div></Link>  
                       )
                   }) 
                }            
          </div> 
          <Footer />
    </>
)

}

const mapDispatchToProps = {
    getCities: citiesActions.getAllCities,
    filterCities:citiesActions.filterCities
 }
 const mapStateToProps = (state)=>{
     return{ //retorna un objeto por eso llaves
        filteredCities: state.cities.filtered_cities,
     }
 }
 
export default connect(mapStateToProps, mapDispatchToProps)(Cities)
