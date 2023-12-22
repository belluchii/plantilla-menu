"use client";
import "swiper/css";
import "swiper/css/pagination";
import Circle from "@/common/Circle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
export default function Nav() {
  const [slides, setSlides] = useState(0);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    setSlides(
      Math.floor(screenWidth / 360) > 5 ? 5 : Math.floor(screenWidth / 350)
    );
  }, []);

  return (
    <nav className="sticky w-full rounded-md top-[70px] backdrop-blur  pt-4 ">
      <div>
        <Swiper
          className="h-[140px]"
          pagination={true}
          spaceBetween={10}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          slidesPerView={slides}
          loop={true}
        >
          <SwiperSlide>
            <Circle image={"pasta.svg"} name="Pastas" />
          </SwiperSlide>
          <SwiperSlide>
            <Circle image={"carnes.svg"} name="Carnes" />
          </SwiperSlide>
          <SwiperSlide>
            <Circle image={"ensaladas.svg"} name="Ensaladas" />
          </SwiperSlide>
          <SwiperSlide>
            <Circle image={"infantil.svg"} name="Infantil" />
          </SwiperSlide>
          <SwiperSlide>
            <Circle image={"bebidas.svg"} name="Bebidas" />
          </SwiperSlide>
          <SwiperSlide>
            <Circle image={"vinos.svg"} name="Vinos" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="h-[1px] w-full  mt-2 mx-auto bg-gray-400"></div>
    </nav>
  );
}
