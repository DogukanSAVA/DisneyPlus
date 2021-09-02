import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
          return (
                    <section>
                              <Carousel>
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/image/slider-1.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/image/slider-2.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/image/slider-3.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" src="/image/slider-4.jpeg" alt="" />
        </div>
      </Carousel>
                    </section>
          )
}

export default Slider