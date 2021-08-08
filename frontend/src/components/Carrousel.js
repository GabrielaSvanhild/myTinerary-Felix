import React, { useState } from 'react';
      
        import {
          Carousel,
          CarouselItem,
          CarouselControl,
          CarouselIndicators,
        } from 'reactstrap';
        
        const items = [
          {
            //src:["/assets/foto-footer.png","/assets/foto-footer.png","/assets/foto-footer.png","/assets/foto-footer.png"],
            src:[{ruta:"/assets/oslo.jpg",
            texto:"Oslo-Norway", 
            },

            {ruta:"/assets/arendal.jpg",
            texto:"Arendal-Norway",                    
            },

            {ruta:"/assets/bergen.jpg",
            texto:"Bergen-Norway", 
            },

            {ruta:"/assets/stavanger.jpg",
            texto:"Stavanger-Norway",
            }],
 
          },
          {
            //src:["/assets/foto-footer.png","/assets/foto-footer.png","/assets/foto-footer.png","/assets/foto-footer.png"],
            //src:["/assets/Skellefteå.jpg","/assets/estocolmo.jpg","/assets/helsinki.jpeg","/assets/rovaniemi.jpeg"],
            src:[{ruta:"/assets/Skellefteå.jpg",
            texto:"Skellefteå-Sweden", 
            },
            {ruta:"/assets/estocolmo.jpg",
            texto:"Stockholm-Sweden",                    
            },
            {ruta:"/assets/helsinki.jpeg",
            texto:"Helsinki-Denmark", 
            },
            {ruta:"/assets/rovaniemi.jpeg",
            texto:"Rovaniemi-Finland",
            }],
          },
          {
            //src:["/assets/copenahue.jpeg","/assets/Reykjavik.jpeg","/assets/Selfoss islandia.jpeg","/assets/Kaklauttanen.jpeg"],
            src:[{ruta:"/assets/copenahue.jpeg",
            texto:"Copenhagen-Denmark", 
            },
            {ruta:"/assets/Reykjavik.jpeg",
            texto:"Reykjavik-Iceland",                    
            },
            {ruta:"/assets/Selfoss islandia.jpeg",
            texto:"Selfoss-Iceland", 
            },
            {ruta:"/assets/Saariselkä.jpeg",
            texto:"Saariselkä-Findald",
            }],
          }
        ];
        
        const Carrousel = (props) => {
          const [activeIndex, setActiveIndex] = useState(0);
          const [animating, setAnimating] = useState(false);
        
          const next = () => {
            if (animating) return;
            const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
            setActiveIndex(nextIndex);
          }
        
          const previous = () => {
            if (animating) return;
            const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
            setActiveIndex(nextIndex);
          }
        
          const goToIndex = (newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }
        
          const slides = items.map((item,index) => {
            return (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
              >
              <div className="contenedor-carrousel">
                {
                    item.src.map((objeto)=>{
                        return(
                            <div 
                            id="foto_carrousel"
                            style={{
                                backgroundImage:`url("${objeto.ruta}")`,
                            }}key={objeto.texto}>
                            <h3 className="texto-carousel">{objeto.texto}</h3>                           
                            </div> 
                        )
                    })
                }
                
                {/* <img src={item.src} alt={item.altText} /> */}
              </div>
              
                {/* <CarouselCaption captionText={""} captionHeader={""} /> */}
              </CarouselItem>
            );
          });
        
          return (
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
          );
        }
        
export default Carrousel;


