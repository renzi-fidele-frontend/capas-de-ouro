import React from "react";
import styles from "./TestimonialSwiper.module.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

// SwiperJs
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

// Fotos dos clientes em miniatura
import f1 from "../../assets/depoimentos/1.jpg";
import f2 from "../../assets/depoimentos/2.jpg";
import f3 from "../../assets/depoimentos/3.jpg";
import f4 from "../../assets/depoimentos/4.jpg";
import f5 from "../../assets/depoimentos/5.jpg";
import f6 from "../../assets/depoimentos/6.jpg";
import f7 from "../../assets/depoimentos/7.jpg";
import f8 from "../../assets/depoimentos/8.jpg";
import f9 from "../../assets/depoimentos/9.jpg";

const data = [
   {
      conteudo:
         "Estou encantada com a minha nova capa dourada! A qualidade é impressionante, e ela adicionou um toque de elegância ao meu smartphone. Com certeza, eu recomendo!",
      foto: f1,
      data_compra: "10/04/2023",
      nome: "Rui Cardoso",
   },
   {
      conteudo:
         "Eu adorei a minha capa dourada! Ela se encaixa perfeitamente no meu celular, e a qualidade do acabamento é surpreendente. Vou comprar mais para presentear meus amigos.",
      foto: f2,
      data_compra: "13/04/2023",
      nome: "António Cruzeiro",
   },
   {
      conteudo:
         "A capa que comprei no seu e-commerce é um verdadeiro luxo! Ela não só protege meu celular, mas também o deixa com um visual sofisticado. Estou muito feliz com minha escolha.",
      foto: f3,
      data_compra: "02/05/2023",
      nome: "Manuel dos Santos",
   },
   {
      conteudo:
         "Eu estava procurando uma capa dourada de alta qualidade há algum tempo, e finalmente encontrei a sua loja online. A capa é linda e resistente. Estou muito satisfeita!",
      foto: f4,
      data_compra: "15/05/2023",
      nome: "Mariana Barbosa Souza",
   },
   {
      conteudo:
         "Minha capa chegou hoje, e eu não poderia estar mais contente! O dourado é tão vibrante, e a capa se encaixa perfeitamente no meu celular. Obrigada pela qualidade excepcional.",
      foto: f5,
      data_compra: "09/08/2023",
      nome: "Mendonça Albuquerge",
   },
   {
      conteudo:
         "Essa capa dourada é um verdadeiro destaque! Além de proteger meu celular, ela chama a atenção de todos pela sua elegância. Ótimo produto!",
      foto: f6,
      data_compra: "22/05/2023",
      nome: "Nicolas Carvalho Ferreira",
   },
   {
      conteudo:
         "Recebi minha capa dourada e estou apaixonada! A embalagem estava impecável, e a capa em si é simplesmente deslumbrante. Valeu cada centavo!",
      foto: f7,
      data_compra: "14/07/2023",
      nome: "Mateus Cavalcanti Rodrigues",
   },
   {
      conteudo:
         "Comprei essa capa dourada para mim e outra para minha esposa, e ambos adoramos. Elas são duráveis e adicionam um toque de classe aos nossos smartphones. Recomendamos a todos!",
      foto: f8,
      data_compra: "25/07/2023",
      nome: "Luiza Lima Rocha",
   },
   {
      conteudo:
         "Essa capa é simplesmente incrível! A cor dourada é deslumbrante, e a textura é suave ao toque. Fiquei muito satisfeito com a minha compra.",
      foto: f9,
      data_compra: "19/08/2023",
      nome: "Otávio Pinto Alves",
   },
];

const TestimonialSwiper = ({ slides = 3 }) => {
   return (
      <div id={styles.ct}>
         <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={slides}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2, slideShadows: false }}
            autoplay={{ pauseOnMouseEnter: false, disableOnInteraction: false, delay: 6000 }}
            modules={[Autoplay, EffectCoverflow]}
            className="testimonial_ct"
            breakpoints={{ 250: { slidesPerView: 1 }, 600: { slidesPerView: 2 }, 900: { slidesPerView: 2 }, 1400: { slidesPerView: slides } }}
         >
            {data.map((v, key) => {
               return (
                  <SwiperSlide className="testimonialSlide">
                     <TestimonialCard nome={v.nome} conteudo={v.conteudo} foto={v.foto} data_compra={v.data_compra} />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};

export default TestimonialSwiper;
