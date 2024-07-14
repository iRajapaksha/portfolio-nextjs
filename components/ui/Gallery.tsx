import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { galleryImages } from "@/data";
import Image from "next/image";
function Gallery() {
  return (
    <div className="h-[400px] sm:h-[450px] md:h-full 2xl:h-full w-full">
      <Swiper
        modules={ [Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper rounded-2xl"
      >
        {
            galleryImages.map((img)=>(
                <SwiperSlide key={img.id}>
                    <Image src={img.img} alt="" className="object-contain object-center w-full h-full object-left-top"/>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}

export default Gallery;
