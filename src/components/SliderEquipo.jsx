// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import logo from "../assets/img/circuloLogoPrueba.png";
import { Image } from "react-bootstrap";

export default function SliderEquipo() {
  return (
    <>
      <div className="text-center text-white ">
        <h1>SOMOS WE</h1>
      </div>
      <Swiper slidesPerView={3.4} spaceBetween={20} className="mySwiper">
        <SwiperSlide>
          <Image className="py-5 foto-equipo" src={logo} alt="logo" fluid />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="py-5 foto-equipo" src={logo} alt="logo" fluid />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="py-5 foto-equipo" src={logo} alt="logo" fluid />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="py-5 foto-equipo" src={logo} alt="logo" fluid />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="py-5 foto-equipo" src={logo} alt="logo" fluid />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
