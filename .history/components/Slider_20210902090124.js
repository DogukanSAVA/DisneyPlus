import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/image/slider-2.jpg" alt="" />
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
  );
}

export default Slider;