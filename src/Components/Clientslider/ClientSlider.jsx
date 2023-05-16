import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import "./clientslider.css";
function ClientSlider() {
  const data = [
    {
      id: 1,
      image: "/image/clients/fila.png",
    },
    {
      id: 7,
      image: "/image/clients/gucci.png",
    },
    {
      id: 2,
      image: "/image/clients/hollister.png",
    },
    {
      id: 3,
      image: "/image/clients/lacoste.png",
    },
    {
      id: 4,
      image: "/image/clients/nike.png",
    },
    {
      id: 5,
      image: "/image/clients/seafarer.png",
    },
    {
      id: 6,
      image: "/image/clients/HM-Logo.png",
    },
    {
      id: 8,
      image: "/image/clients/Zara-Logo.png",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        // loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,

        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation ]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="text-center">
              <img
                src={item.image}
                className="img-fluid client-slider-logo"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ClientSlider;
