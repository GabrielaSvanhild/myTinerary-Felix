import {useState, useEffect} from 'react'
import Activities from './Activities'
import activityActions from '../redux/actions/activityActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import { connect } from 'react-redux';
import Swal from 'sweetalert2'
import axios from 'axios'


const Itinerary =(props)=>{
    const itinerary=props.itinerary 
    const [activities,setActivities]=useState([])
    const [view,setView] =useState(false)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const changeButton=()=>{
       setView(!view) 
    }

    useEffect(()=>{
        if(view===true && activities.length===0){
            props.getActtivity(itinerary._id)
            .then(res=>{
                if(res.success)setActivities(res.response)
                else throw new Error()
                
            })
            .catch(error=>alert("Sorry, try later"))
        }
    },[view])

    const like_dislike_click=() =>{
        if(!props.token){
            Toast.fire({
                icon: 'error',
                title: "You must be logged in to like a post"
              }) 
        }else{
            console.log("entre")
            console.log(props.token)
            axios.put(
                `http://localhost:4000/api/itinerary/like/${itinerary._id}`,
                {
                    headers: {
                    Authorization: 'Bearer ' +props.token,
                    },
                }
            ).then((res)=>console.log(res))
            .catch(error=> console.log(error))
            /* props.likeDislike(itinerary._id,props.token)
            .then(res=>{
                console.log(res)
            })  */ 

        }
          
    }
     
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
                            <h6  onClick={like_dislike_click} className="text-secondary d-flex align-items-center ms-1 corazon">
                             💜  {itinerary.likes.length}
                             </h6>
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
                    view && <Activities activities={activities}/>
                }
                <button onClick={changeButton} className="btn btn-primary my-2" type="button" data-bs-toggle="collapse"    >
                    {!view ? "View More" : "View Less"  }
                </button>   
            </div>                                       
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
       token: state.user.token,
    }
 }

const mapDispatchToProps = {
    getActtivity:activityActions.getActivityOfItinerary,
    likeDislike:itinerariesActions.like_dislike_itinerary
 }


export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)

