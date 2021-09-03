/* import {useState, useEffect} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'


const MainCities = (props) => {
  const [cities, setCities] = useState({
        all_cities: [],
        cities_filtered:[]
    }) 
    const[loading,setLoading]=useState(true) */

   /*  useEffect(()=>{
        axios.get('http://loalhost:4000/api/cities')
        .then((res)=>{              aca cae cuando el back le devuelve una respuesta 
                                    pero puede ser que esa sea un error del back,
                                      entonces lo tengo que validar aca en el front 
            if(res.data.succes){
                 setCities({
                    all_cities: res.data.response,
                    cities_filtered: res.data.response
                })
            }else{
                props.history.push("/")
            } 
        })
        .catch(error=>{ Cae aca cuando el back esta caido, cuando no se pudo pegar a la api
            props.history.push("/") 
            console.log(props.history)
            alert(error)
        })
        .finally(()=>setLoading(false))
        eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) */

/*     if(loading){
        return <h1>Loading...</h1>
    }
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

    return(
        <main>
            <div className="contenedor-buscador-cities">
                <h2 className="titulo-cities">Find Your Adventure</h2>
                <input type="text" placeholder="Search by destination" onChange={filter_cities}/>
            </div>
            <div className='contenedor-cities'>
                {   
                    cities.cities_filtered.length===0 
                    ?<h3>Sorry, There are not results for your search. Try another one!</h3>         
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
        </main>
    )
         */
    
   /*  const [cities,setCities]=useState([])
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
    ) */
 




 /*  const pepe="hola"
    const respuesta=pepe.startsWith("")
    console.log(respuesta) */
