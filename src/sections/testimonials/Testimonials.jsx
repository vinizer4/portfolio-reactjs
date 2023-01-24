import "./testimonials.css";

import { Swiper, SwiperSlide } from "swiper/rect";

import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";

import testimonials from "./data";
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>There are unbiased testmonials from some of my clients</p>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={{ Pagination }}
          className="mySwiper"
        >
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
