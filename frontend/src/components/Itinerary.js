import {useState} from 'react'
const Itinerary =(props)=>{

    const [view,setView] =useState(true)
    const changeButton=()=>{
       setView(!view)
    }
    const itinerary=props.itinerary 

   /* var money=[]
   for(let i=0;i<5;i++){
       money.push("$")
    } 
    console.log(money) */

    return(
     
        <div className="cardItinerary my-5">
                <div className="d-flex ">
                    <img className=" " src={itinerary.photo_itinerary}/>
                <div>
                    <div className="d-flex align-items-center ms-3">
                        <img className="foto-perfil img-fluid "src={itinerary.photo_author}/>
                        <h4 className="ms-3">{itinerary.name_author}</h4>
                    </div> 
                    <div>
                        <h4 className="titulo-itinerario ms-3">{itinerary.title}</h4>
                        <h5 className="descripcion-itinerario ms-4 ">{itinerary.description}</h5>
                        {
                            itinerary.hashtag.map((hashtag,index)=>{
                                return(
                                    <p className="hashtag-itinerario ms-3 text-secondary" key={index}>{hashtag}</p>
                                )
                            })
                        }
                        <div className="d-flex align-items-center">
                            <div className="ms-3">
                                <p>{'. 💵'.repeat(parseInt(itinerary.price))}</p>
                            </div>
                            <div className="ms-1">
                                <h6 clasName="text-secondary d-flex align-items-center"> 🕓  {itinerary.duration} hours</h6>
                            </div>
                            <div className="ms-1">
                                💜
                            </div>

                        </div>

                    </div>
                </div>
            </div> 
            <div className="ms-5">
            {
                !view && <h2>Under Construction</h2>
            }
                    <button onClick={changeButton} className="btn btn-primary my-2" type="button" data-bs-toggle="collapse"    >
                        {view ?"View More" :"View Less" }
                    </button>
                    
                
            </div>                                       
        </div>

    )
}
export default Itinerary
/* 
 data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" */