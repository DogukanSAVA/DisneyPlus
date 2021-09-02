import { Carousel } from "react-responsive-carousel";
npm install react-responsive --save

function Slider() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
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
        <img loading="lazy" src="/image/slider-4.jpg" alt="" />
       </div>
      </Carousel>
    </section>
  );
}

export default Slider;