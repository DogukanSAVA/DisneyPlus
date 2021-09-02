import { Carousel } from "react-responsive-carousel"

function Slider() {
          return (
                    <section>
                                <Carousel
                               autoPlay
                               infiniteLoop
                               showStatus={false}
                              showIndicators={false}
                              showThumbs={false}
                              interval={5000}
                                                   >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
        </div>
      </Carousel>
                    </section>
          )
}

export default Slider
