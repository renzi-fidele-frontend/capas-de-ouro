import React, { useEffect } from "react";
import styles from "./Acordeao.module.css";
import Swiper3d from "../Swiper3d/Swiper3d";
import estiloBeleza from "../../Pages/OculosBeleza/OculosBeleza.module.css";
import estiloHome from "../../Pages/Home/Home.module.css";

//Icons
import { AiOutlineMessage } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { ImFilePicture } from "react-icons/im";

// Imagens do slider
import i1 from "../../assets/quem_comprou/1.jpg";
import i2 from "../../assets/quem_comprou/2.jpg";
import i3 from "../../assets/quem_comprou/3.jpg";
import i4 from "../../assets/quem_comprou/4.jpg";
import i5 from "../../assets/quem_comprou/5.jpg";
import i6 from "../../assets/quem_comprou/6.jpg";
import i7 from "../../assets/quem_comprou/7.jpg";
import i8 from "../../assets/quem_comprou/8.jpg";
import i9 from "../../assets/quem_comprou/9.jpg";
import i10 from "../../assets/quem_comprou/10.jpg";

const imagens = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10];

const Acordeao = () => {
   return (
      <div id={styles.ct}>
         <details open={true}>
            <summary id={styles.sum}>
               <VscFeedback />
               <span className={estiloBeleza.tit2}>Avaliações dos clientes</span>{" "}
            </summary>
            <Swiper3d nrFotos={3} />
         </details>
         <details>
            <summary id={styles.sum}>
               <ImFilePicture />
               <span className={estiloBeleza.tit2}>Recebido dos clientes</span>
            </summary>
            <Swiper3d nrFotos={3} imagens={imagens} />
         </details>
         <details id={styles.faq}>
            <summary id={styles.sum}>
               <AiOutlineMessage />
               <span className={estiloBeleza.tit2}>Perguntas frequentes</span>{" "}
            </summary>
            <details id={styles.primeiro}>
               <summary>Qual é o preço do frete?</summary>
               <p>O envio é padrão. O valor do envio padrão é de R$20 para todo o Brasil, independente da região.</p>
            </details>

            <details>
               <summary>Qual o prazo de entrega?</summary>
               <p>Enviamos via Correios para todo Brasil. O prazo de entrega depende da sua região.</p>
            </details>

            <details>
               <summary>Possui frete grátis?</summary>
               <p>Sim, a partir de 2 óculos ganhe frete grátis.</p>
            </details>

            <details>
               <summary>Qual o tipo de rosto ideal?</summary>
               <p>A medida é padrão e combina com todos os tipos de rostos.</p>
            </details>

            <details>
               <summary>O Beleza All Black é Unissex?</summary>
               <p>Sim, Beleza All Black foi feito para homens e mulheres.</p>
            </details>

            <details>
               <summary>Possui autorização para revenda?</summary>
               <p>Claro. Compre para uso pessoal ou para ganhar uma renda extra com 100% de lucro.</p>
            </details>

            <details id={styles.ultimo}>
               <summary>Possui proteção?</summary>
               <p>Sim, possui a mais alta proteção UV400 existente em óculos solares.</p>
            </details>
         </details>
      </div>
   );
};

export default Acordeao;

/*
 */
