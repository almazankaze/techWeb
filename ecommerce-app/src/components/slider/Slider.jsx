import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product-card/ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.css";

// import required modules
import { Autoplay, Navigation } from "swiper";

const Slider = ({ slides, resSlides, data }) => {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      breakpoints={{
        1200: {
          slidesPerView: slides,
        },
        850: {
          slidesPerView: resSlides,
        },
        480: {
          slidesPerView: 2,
        },
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {data.map((card) => (
        <SwiperSlide key={card.id}>
          <ProductCard product={card} />
        </SwiperSlide>
      ))}

      <div className="slider-btn swiper-button-next"></div>
      <div className="slider-btn swiper-button-prev"></div>
    </Swiper>
  );
};

export default Slider;
