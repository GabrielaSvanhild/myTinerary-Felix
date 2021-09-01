import { NavLink } from 'react-router-dom'

const Hero = () => {
    
    return (
        <div className="contenedor-hero">
            <video autoPlay="autoplay" loop muted>
                <source src="/assets/video_hero.mp4"/>
            </video>
            <div className="contenedor-hero">
                <div className="titulo my-3">
                    <h1> MY<span className="tinerary">TINERARY</span> </h1>
                </div>
                <div className="contenedor-slogan"> 
                    <div className="typewriter">
                        <h4>
                            Find your perfect trip, designed by insiders who know and love their cities!
                        </h4>
                    </div>      
                </div>
                <div className="contenedor_llamada_a_la_accion">
                    <p>Let your adventure begin!</p>
                    <button >
                        <NavLink to="/cities"><p>CLICK HERE!</p></NavLink>
                    </button>
                    </div>        
            </div>
        </div>
    )
 }
 
 export default Hero