import {useState} from 'react'
const Itinerary =(props)=>{

    const [view,setView] =useState(true)
    const changeButton=()=>{
       setView(!view)
    }
    const itinerary=props.itinerary 

    return(
     
        <div className="cardItinerary my-5">
                <div className=" container-itinerary ">
                <div className="foto-itinerary" style={{backgroundImage:`url("${itinerary.photo_itinerary}")`}}></div>
                    {/* <img className=" " src={itinerary.photo_itinerary}/> */}
                <div>
                    <div className="d-flex align-items-center ms-3">
                        <img className="foto-perfil"src={itinerary.photo_author} alt={itinerary.name_author}/>
                        <h4 className="ms-3 ">{itinerary.name_author}</h4>
                        <div className="ms-1">
                            <h6 className="text-secondary d-flex align-items-center ms-1 corazon"> 💜 {(itinerary.likes)}</h6>
                        </div>
                    </div> 
                    <div className="contenedor-titulo-descripcion">
                        <div className="titulo-itinerario my-2"> 
                            <h4 >{itinerary.title}</h4>
                        </div>
                        
                        <h5 className="descripcion-itinerario ms-4 ">{itinerary.description}</h5>
                        <div className="hashtag">
                             {
                            itinerary.hashtag.map((hashtag,index)=>{
                                return(
                                    <p className="hashtag-itinerario ms-3 text-secondary" key={index}>{hashtag}</p>
                                )
                            })
                        }
                        </div>
                       
                        <div className="d-flex align-items-center">
                            <h6 className="ms-3 text-secondary price">Price:</h6>
                            <p className="billetes" >{' 💵'.repeat(parseInt(itinerary.price))}</p>
                            <p className="reloj">🕓</p>
                            <div className=" ms-1">
                                <h6 className=" horas text-secondary d-flex align-items-center">   {itinerary.duration} hours</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div> 
            <div className="boton-itinerios-view">
            {
                !view && <h2 className="my-2">Under Construction</h2>
            }
                    <button onClick={changeButton} className="btn btn-primary my-2" type="button" data-bs-toggle="collapse"    >
                        {view ?"View More" :"View Less" }
                    </button>
                    
                
            </div>                                       
        </div>

    )
}
export default Itinerary
