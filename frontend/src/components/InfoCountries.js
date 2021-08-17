const InfoCountries = () => {
    return (
   
        <div className="container">
            <div className="row ">
                <div className="col-12 col-md-6">
                    <div className="contenedor-titulo-info-countries">
                        <h3> NORDIC TRAVEL GUIDE</h3>
                    </div>
                    <p>The Nordic countries have stunning landscapes, the northern lights, historic neighbourhoods and
                        modern cities. There’s a lot to love about the Nordic countries of Europe.</p>
                    <div className="row d-flex ">
                        <div className="col-6 caja-columna1-paises">
                            <div className="caja-banderas d-flex">
                                <img className="align-self-center" src="/assets/denmark_flags.png" alt="denmark"/>
                                <p>Denmark</p>
                            </div>
                            <div className="caja-banderas d-flex">
                                <img className="align-self-center" src="/assets/norway_flags.png" alt="Norway" />
                                <p>Norway</p>
                            </div>
                            <div className="caja-banderas d-flex">
                                <img className="align-self-center" src="/assets/greenlandFlag.png" alt="Greenland" />
                                <p>Greenland</p>
                            </div>
                        </div>
                        <div className=" col-6 caja-columna2-paises">
                            <div className="caja-banderas d-flex">
                                <img className="align-self-center" src="/assets/sweden_flags.png" alt="Sweden" />
                                <p>Sweden</p>
                            </div>
                            <div className="caja-banderas d-flex">
                                <img className="align-self-center" src="/assets/finland_flags.png" alt="Finland"  />
                                <p>Finland</p>
                            </div>
                            <div className="caja-banderas d-flex">
                                <img className="align-self-center" src="/assets/iceland_flags.png" alt="Iceland"  />
                                <p>Iceland</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-md-block col-md-6 my-3">
                    <img className="align-self-center img-fluid" src="/assets/mapa.png" alt="map"/>
                </div>
            </div>
        </div>
    
    )
    }
    export default InfoCountries