"use client";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";

export default function OfficeHeader({
  image,
  images
}: {
  image: string;
  images: string[];
}) {
    return (
         <section id="Gallery" className="-mb-[50px]">
          <div className="swiper w-full">
            <Swiper 
            className="swiper-wrapper" 
            slidesPerView={"auto"} 
            spaceBetween={10}
            slidesOffsetAfter={10}
            slidesOffsetBefore={10}
            >
              <SwiperSlide className="swiper-slide !w-fit">
                <div className="w-[700px] h-[550px] overflow-hidden">
                  <Image
                    width={700}
                    height={550}
                    src={image}
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                </div>
              </SwiperSlide>
              {images.map((image, index) => (
                <SwiperSlide className="swiper-slide !w-fit" key={index}>
                  <div className="w-[700px] h-[550px] overflow-hidden">
                    <Image
                      width={700}
                      height={550}
                      src={image}
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
    )
}