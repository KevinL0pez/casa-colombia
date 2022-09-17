import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

export const CarouselHome = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-52 object-cover sm:h-72 lg:h-80 xl:h-[650px]"
            src="https://www.construyehogar.com/wp-content/uploads/2015/06/Fachada-de-casa-moderna-de-un-piso-de-un-piso.jpg"
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-52 object-cover sm:h-72 lg:h-80 xl:h-[650px]"
            src="https://www.construyehogar.com/wp-content/uploads/2015/06/Dise%C3%B1o-de-casa-moderna-de-un-piso.jpg"
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-52 object-cover sm:h-72 lg:h-80 xl:h-[650px]"
            src="https://casainpack.pt/echypsoa/2021/01/shutterstock_1513007366-scaled-e1610446670349.jpg"
            alt="image slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
