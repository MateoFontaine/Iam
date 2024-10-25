// src/components/Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet custom-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
      }}
    >
      <SwiperSlide><img src="/Perro.jpg" alt="Imagen 1" /></SwiperSlide>
      <SwiperSlide><img src="/perro.webp" alt="Imagen 2" /></SwiperSlide>
      <SwiperSlide><img src="/Perro.jpg" alt="Imagen 3" /></SwiperSlide>

      {/* Flechas personalizadas con Tailwind */}
      <div className="swiper-button-next text-orange-500"></div>
      <div className="swiper-button-prev text-orange-500"></div>
    </Swiper>
  );
};

export default Carousel;
