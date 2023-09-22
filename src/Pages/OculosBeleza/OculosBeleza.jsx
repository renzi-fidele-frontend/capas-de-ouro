import React, { useEffect, useRef, useState } from "react";
import styles from "./OculosBeleza.module.css";
import estiloHome from "../Home/Home.module.css";

import { Link, useLocation } from "react-router-dom";
import Swiper3d from "../../Components/Swiper3d/Swiper3d";
import Galeria2 from "../../Components/Galeria2/Galeria2";

// Imagens
import prd1 from "../../assets/produtos/p3.jpg";
import prd2 from "../../assets/produtos/p2.jpg";
import prd3 from "../../assets/produtos/p1.jpg";
import prd5 from "../../assets/produtos/p4.jpg";
import star from "../../assets/star.svg";

const OculosBeleza = () => {
   const loc = useLocation();
   const [imgAmostrar, setImgAmostrar] = useState(1);

   // Refs
   const btn1 = useRef();
   const btn2 = useRef();

   useEffect(() => {
      console.log(useLocation.state);
   }, [loc.state]);

   return (
      <div id={styles.ct}>
         <h3 className={estiloHome.titulo2}>Cardoso Capas Deluxe</h3>
         <p className={estiloHome.subtit2}>Para todos Iphones</p>
         <div id={styles.body}>
            {/*------------Seção 1------------- */}
            <div className={styles.secao} style={{ borderBottom: "1px solid var(--cor-borda)" }}>
               <h5 className={estiloHome.tit}>Uma capa especial.</h5>
               <h6 className={estiloHome.subtit}>Para pessoas especiais.</h6>
               <p>
                  A Capa Cardoso Deluxe é uma peça de excelência artesanal feita em material de qualidade da Itália com acabamento em linda cor
                  dourada que brilha com a luz. Uma capa única, criada para quem aprecia a durabilidade e a moda.
               </p>
               <div id={styles.imgsCont}>
                  <Galeria2 />
               </div>

               <h4>Cor</h4>
               <div style={{ marginBottom: "4em" }} id={styles.opcoes}>
                  <p
                     ref={btn1}
                     id={styles.produto1}
                     className={styles.btnAtivo}
                     onClick={() => {
                        setImgAmostrar(1);
                        btn1.current.classList.add(styles.btnAtivo);
                        btn2.current.classList.remove(styles.btnAtivo);
                     }}
                  >
                     <span></span>
                  </p>
                  {/*<p
                     ref={btn2}
                     id={styles.produto2}
                     onClick={() => {
                        setImgAmostrar(2);
                        btn1.current.classList.remove(styles.btnAtivo);
                        btn2.current.classList.add(styles.btnAtivo);
                     }}
                  >
                     <span></span>
                  </p> */}
               </div>
               <div style={{ textAlign: "center", width: "100%" }}>
                  <Link id={estiloHome.buyBtn} className={styles.cimaBtn} to={"/comprar/beleza-oculos"}>
                     Compre agora
                  </Link>
               </div>
            </div>

            {/*------------Seção 2------------- */}
            <div className={styles.secao} style={{ borderBottom: "1px solid var(--cor-borda)" }}>
               <h5 className={estiloHome.tit}>Um design versátil.</h5>
               <h6 className={estiloHome.subtit}>Que nunca sai de moda.</h6>
               <p>
                  A Capa Cardoso Deluxe é muito versátil e combina com todo tipo de Iphone. Um companheiro que vai estar com você em
                  todos os momentos especiais da sua vida.
               </p>
               <div className={styles.imgCont}>
                  <img src={prd5} alt="" />
               </div>
            </div>

            {/*------------Seção 3------------- */}
            <div className={styles.secao} style={{ borderBottom: "1px solid var(--cor-borda)" }}>
               <h5 className={estiloHome.tit}>Não é só estilo.</h5>
               <h6 className={estiloHome.subtit}>Protegemos o seu Iphone.</h6>
               <p>
                  A Capa Cardoso Deluxe possui tecnologia avançada em proteção contra os raios solares. O Brasil é o país que mais recebe
                  irradiação solar em todo o mundo e é por isso que focamos tanto no cuidado da sua capa banhada de ouro protegida em UV400.
               </p>
               <div className={styles.imgCont}>
                  <img src={prd3} alt="" />
               </div>
            </div>

            {/*------------Seção 4------------- */}
            <div className={styles.secao} style={{ borderBottom: "1px solid var(--cor-borda)" }}>
               <h5 className={estiloHome.tit}>Produto Original.</h5>
               <h6 className={estiloHome.subtit}>Feito com o melhor acabamento.</h6>
               <p>
                  A Capa Cardoso Deluxe é uma peça de excelência artesanal com um acabamento muito superior ao de qualquer outra capa da
                  internet. Sua produção é feita na Itália pelos mestres artesãos, os melhores do mundo, por isso seu material é
                  resistente à quedas e riscos.
               </p>
               <div id={styles.ftNova} className={styles.imgCont}>
                  <img src={prd2} alt="" />
               </div>
            </div>

            {/*------------Seção 5------------- */}
            <div className={styles.secao} style={{ paddingBottom: "0", marginBottom: "2.5em" }}>
               <ul>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
               </ul>
               <h2>Média 5,0 de 5,0</h2>
               <h5 className={estiloHome.tit}>A capa mais bem avaliada do Brasil.</h5>
               <h6 className={estiloHome.subtit}>Quem já comprou, adorou.</h6>
               <p>
                  A Capa Cardoso Deluxe conquistou o coração de + 1.700 clientes e já é o mais bem avaliado do Brasil. São milhares de avaliações
                  excelentes de clientes de todo o país recomendando a Capa Cardoso Deluxe.
               </p>
            </div>
            <img src={""} alt="amostras de quem comprou" />
            <Swiper3d />
         </div>
         <h3 className={estiloHome.titulo2}>Cardoso Capas Deluxe</h3>
         <p className={estiloHome.subtit2}>Para todos Iphones</p>
         <div id={styles.oferta}>
            <h6 className={styles.tit2}>Compre online.</h6>
            <p className={styles.subtit2}>Sem sair de casa.</p>
            <Link to={"/comprar/beleza-oculos"} id={estiloHome.buyBtn}>
               Compre agora{" "}
            </Link>
         </div>
      </div>
   );
};

export default OculosBeleza;
