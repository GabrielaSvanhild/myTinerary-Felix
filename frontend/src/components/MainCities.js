const MainCities = () => {

  const cities=[
    {ruta:"/assets/oslo.jpg",texto:"Oslo-Norway"},
    {ruta:"/assets/arendal.jpg",texto:"Arendal-Norway"},
    {ruta:"/assets/bergen.jpg",texto:"Bergen-Norway"},
    {ruta:"/assets/stavanger.jpg",texto:"Stavanger-Norway"},
    {ruta:"/assets/copenahue.jpeg",texto:"Copenhagen-Denmark"},
    {ruta:"/assets/Reykjavik.jpeg",texto:"Reykjavik-Iceland"},
    {ruta:"/assets/Selfoss islandia.jpeg",texto:"Selfoss-Iceland"},
    {ruta:"/assets/Saariselkä.jpeg",texto:"Saariselkä-Findald"},
    {ruta:"/assets/Skellefteå.jpg",texto:"Skellefteå-Sweden"},
    {ruta:"/assets/helsinki.jpeg",texto:"Helsinki-Finland"},
    {ruta:"/assets/rovaniemi.jpeg",texto:"Rovaniemi-Finland"},
    {ruta:"/assets/estocolmo.jpg",texto:"Stockholm-Sweden"},
    {ruta:"/assets/helsinki.jpeg",texto:"Helsinki-Finland"},
    {ruta:"/assets/rovaniemi.jpeg",texto:"Rovaniemi-Finland"},
    {ruta:"/assets/estocolmo.jpg",texto:"Stockholm-Sweden"},  
 ]

 cities.map((citie)=>{
     
         console.log(citie.ruta)
     
 })
 console.log(cities.length)

 {/* <div className='contenedor'>
        {
                cities.map((city)=>{
                    return(
                    <div 
                
                        style={{
                            backgroundImage:`url("${city.ruta}")`,
                        }}key={objeto.texto}>
                            <h3 className="texto-carousel">{objeto.texto}</h3>                           
                        </div> 
                    )
                })
            }
      
                 
        </div> */}
    return (
       <main>
         <div className="contenedor-buscador-cities">
             <h2 className="titulo-cities">Find Your Adventure</h2>
             <input placeholder="Search by destination"/>
         </div>
         <div className='contenedor-cities'>
        {
                cities.map((city,index)=>{
                    return(
                        <div 
                            className={`foto-cities foto-city${index}`}
                            style={{
                                backgroundImage:`url("${city.ruta}")`,
                            }}key={index}>
                                <h3 className="texto-fotos-cities">{city.texto}</h3>                           
                        </div> 
                    )
                })
            }            
        </div> 

        
      </main>
    )
 }
 export default MainCities