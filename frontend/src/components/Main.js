import Carrousel from "./Carrousel";
import InfoCountries from "./InfoCountries";

const Main = () => {
    return (
       <main>
          <InfoCountries/>
          <div className="contenedor-titulo-carousel">
            <h2 className="titulo-carousel">Popular MYtineraries</h2>
         </div>
         <Carrousel/>
      </main>
    )
 }
 export default Main