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
          <Image
            className="w-100"
            src="https://bioconstruccion.com.mx/wp-content/uploads/2019/11/1911_Media_Banner_OUM-1024x380.jpg"
            alt="asdas"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-100"
            src="https://bioconstruccion.com.mx/wp-content/uploads/2019/11/1911_Media_Banner_OUM-1024x380.jpg"
            alt="asdas"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-100"
            src="https://bioconstruccion.com.mx/wp-content/uploads/2019/11/1911_Media_Banner_OUM-1024x380.jpg"
            alt="asdas"
            fluid
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-100"
            src="https://bioconstruccion.com.mx/wp-content/uploads/2019/11/1911_Media_Banner_OUM-1024x380.jpg"
            alt="asdas"
            fluid
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
