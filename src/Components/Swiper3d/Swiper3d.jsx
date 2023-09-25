import React from "react";
import styles from "./Swiper3d.module.css";

// SwiperJs
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Swiper3d = ({ nrFotos = 4, imagens = [] }) => {
   return (
      <div id={styles.ct}>
         <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={nrFotos}
            coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 100,
               modifier: 2.5,
            }}
            autoplay={{ pauseOnMouseEnter: false, disableOnInteraction: false }}
            modules={[EffectCoverflow, Autoplay]}
            className="swiper_cont"
            breakpoints={{ 250: { slidesPerView: 1 }, 400: { slidesPerView: 2 }, 900: { slidesPerView: 3 }, 1500: { slidesPerView: nrFotos } }}
         >
            {/*Caso seja passado array de imagens */}
            {imagens.length > 0
               ? imagens.map((v, key) => {
                    return (
                       <SwiperSlide className={styles.slide}>
                          <img className={styles.img} src={v} alt="Imagem do slide" />
                       </SwiperSlide>
                    );
                 }) //  Caso seja passado array de html
               : undefined}

            <div className="slider-controler">
               <div className="swiper-pagination"></div>
            </div>
         </Swiper>
      </div>
   );
};

export default Swiper3d;
