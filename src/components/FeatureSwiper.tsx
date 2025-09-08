import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "../components/FeatureSwiper.css";

export const FeatureSwiper = () => {
  return (
    <div className="feature-swiper-container">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        centeredSlides={true}
        initialSlide={1}
        loop
        grabCursor
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2000, // 3s delay
          disableOnInteraction: false, // keep autoplay after user swipes
          pauseOnMouseEnter: true, // pause when hovering
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/argus_pc.jpg" alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/v_pc.jpg" alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/vinci_pc_37.jpg" alt="slide3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/argus_pc.jpg" alt="slide4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/vinci_pc_37.jpg" alt="slide5" />
        </SwiperSlide>
      </Swiper>

      {/* 👇 Custom pagination container */}
      <div className="custom-pagination"></div>

      {/* 👇 Custom navigation buttons */}
      <div className="custom-prev">‹</div>
      <div className="custom-next">›</div>
    </div>
  );
};
