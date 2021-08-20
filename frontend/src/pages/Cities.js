import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useState, useEffect} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import FilterNotFound from '../components/FilterNotFound';
import HeroCities from '../components/HeroCities';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'

const Cities = (props) => {
  const{filteredCities}=props// destructuro cities de props.cities 
                    //para poder usar solo cities
   useEffect(()=>{
        props.getCities()
   },[])
   /* const filter_cities=(e)=>{
        const input_entered = e.target.value
        setCities({
            ...cities,
            cities_filtered:cities.all_cities.filter((city)=>{
                return(
                    city.name.toUpperCase().trim().startsWith(input_entered.trim().toUpperCase())
                )
            })    
        })
    } */
 const inputHandler=(e)=>{
  
     props.filterCities(e.target.value)
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
                   filteredCities.map((city,index)=>{
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
        filteredCities: state.cities.filtered_cities
     }
 }
 


export default connect(mapStateToProps, mapDispatchToProps)(Cities)



















  /* 
  const Cities = (props) => {
   const [cities, setCities] = useState({
      all_cities: [],
      cities_filtered:[]
   }) 
  const[loading,setLoading]=useState(true)
  
  useEffect(()=>{
         window.scrollTo(0,0)
        axios.get('http://localhost:4000/api/cities')
        .then((res)=>{                                                                   //aca cae cuando el back le devuelve una respuesta 
            if(res.data.succes && res.data.response.length!==0 ){                         //pero puede ser que esa sea un error del back,
                setCities({                                                              // entonces lo tengo que validar aca en el front 
                all_cities: res.data.response,
                cities_filtered: res.data.response
                })
            }else{
                swal("Error","Sorry, we have problems with the cities","error")
                props.history.push("/")
            } 
        })
        .catch(error=>{                                                                  //Cae aca cuando el back esta caido, cuando no se pudo pegar a la api
            swal("Error","Sorry, we have problems with the cities","error")
            props.history.push("/") 
        })
        .finally(()=>setLoading(false))
      //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const filter_cities=(e)=>{
      const input_entered = e.target.value
      setCities({
         ...cities,
          cities_filtered:cities.all_cities.filter((city)=>{
              return(
                  city.name.toUpperCase().trim().startsWith(input_entered.trim().toUpperCase())
              )
          })    
      })
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
                <input type="text" placeholder="Search by destination" onChange={filter_cities}/>
            </div>
            <div className='contenedor-cities'>
                {   
                    cities.cities_filtered.length===0 
                    ?<FilterNotFound/>       
                    :cities.cities_filtered.map((city,index)=>{
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
} */




/* window.scrollTo({
   top: 0,
   left: 0,
   behavior: 'smooth'
}) */
/* onClick={() => window.scrollTo(0, 0)} */