// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import { Image } from "react-bootstrap";
import andres from "../assets/img/andres.png";
import victor from "../assets/img/victor.png";
import monica from "../assets/img/monica.png";
import josy from "../assets/img/jasy.png";
import javier from "../assets/img/javier.png";

export default function SliderEquipo() {
  return (
    <>
      <div className="text-center text-white ">
        <h1>SOMOS WE</h1>
      </div>
      <Swiper
        slidesPerView={3.4}
        spaceBetween={20}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            className="py-5 foto-equipo"
            src={andres}
            alt="Andrés Broullón"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-5 foto-equipo"
            src={victor}
            alt="Victor Dabat Aracil"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-5 foto-equipo"
            src={monica}
            alt="Mónica Porchetto Velázquez"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-5 foto-equipo"
            src={josy}
            alt="Josy Ribeiro Da Silva"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="py-5 foto-equipo"
            src={javier}
            alt="Javier Pastor Cobos"
            fluid
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
