// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import carousel from "../assets/img/sliderhomewe.png";
import { Image } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Image className="opacity-1" src={carousel} alt="asdas" fluid />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="opacity-1" src={carousel} alt="asdas" fluid />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="opacity-1" src={carousel} alt="asdas" fluid />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="opacity-1" src={carousel} alt="asdas" fluid />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
