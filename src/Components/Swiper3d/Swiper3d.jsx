import React from "react";
import styles from "./Swiper3d.module.css";

// SwiperJs
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

//  Imagens
import i1 from "../../assets/depoimentos/dp-2.jpg";
import i2 from "../../assets/depoimentos/dp-2.jpg";
import i3 from "../../assets/depoimentos/dp-2.jpg";
import i4 from "../../assets/depoimentos/dp-2.jpg";
import i5 from "../../assets/depoimentos/dp-2.jpg";
import i6 from "../../assets/depoimentos/dp-2.jpg";
import i7 from "../../assets/depoimentos/dp-2.jpg";
import i8 from "../../assets/depoimentos/dp-2.jpg";
import i9 from "../../assets/depoimentos/dp-2.jpg";
import i10 from "../../assets/depoimentos/dp-2.jpg";
import i11 from "../../assets/depoimentos/dp-2.jpg";
import i12 from "../../assets/depoimentos/dp-2.jpg";
import i13 from "../../assets/depoimentos/dp-2.jpg";
import i14 from "../../assets/depoimentos/dp-2.jpg";
import i15 from "../../assets/depoimentos/dp-2.jpg";
import i16 from "../../assets/depoimentos/dp-2.jpg";

const Swiper3d = ({ nrFotos = 4, imagens = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16] }) => {
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
            {imagens.map((v, key) => {
               return (
                  <SwiperSlide className={styles.slide}>
                     <img className={styles.img} src={v} alt="Imagem do slide" />
                  </SwiperSlide>
               );
            })}

            <div className="slider-controler">
               <div className="swiper-pagination"></div>
            </div>
         </Swiper>
      </div>
   );
};

export default Swiper3d;
