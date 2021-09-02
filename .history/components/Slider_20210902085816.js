import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
          return (
                    <section>
                         <Carousel>
                              autoPlay
                              infiniteLoop
                              ShowStatus=(false)
                              ShowIndicators=(false)
                              ShowThumbs=(false)
                              
                              </Carousel>    
                    </section>
          )
}

export default Slider
