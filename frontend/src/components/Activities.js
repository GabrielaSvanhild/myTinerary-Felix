

const Activities=(props)=>{
    const activities=props.activities 
    return(
        
        <>
            <div className="titulo-itinerario my-4">
                <h2 className=" titulo-activities">Activities</h2>
            </div>
            <div className="contenedor-activities">
                {
                    activities.map((activity, index)=>{
                        return(
                            <div 
                                key={index}
                                id="foto-activity"
                                style={{
                                    backgroundImage:`url("${activity.photo_activity}")`,
                                }} >
                                    <h3 className="texto-activity">{activity.title}</h3>                           
                            </div> 
                        )                    
                    })
                }
            </div>

        </>
    )
}
export default Activities