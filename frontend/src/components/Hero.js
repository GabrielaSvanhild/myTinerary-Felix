
const Hero = () => {
    
    return (
   <div className="contenedor-hero">
     <video autoPlay="autoplay" loop muted>
        <source src="/assets/video_hero.mp4"/>
        </video>
        <div className="contenedor-logo">
            {/* <img className="logo" src="/assets/logo_mytinerary.png"/> */}
            <div className="titulo">
            <h1> MY<span className="tinerary">TINERARY</span> </h1>
            </div>
            <div>
                <h4>
                Find your perfect trip, designed by insiders who know and love their cities!
                </h4>
            </div>
        </div>
   </div>

    )
 }
 
 export default Hero