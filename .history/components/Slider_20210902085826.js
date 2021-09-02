import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
          return (
                    <section>
                         <Carousel
                              autoPlay
                              infiniteLoop
                              ShowStatus=(false)
                              ShowIndicators=(false)
                              ShowThumbs=(false)
                              interval=(5000)
                              
                              </Carousel>    
                    </section>
          )
}

export default Slider
