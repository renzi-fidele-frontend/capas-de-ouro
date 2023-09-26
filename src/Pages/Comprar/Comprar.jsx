import React, { useRef, useState } from "react";
import styles from "./Comprar.module.css";
import estiloBeleza from "../OculosBeleza/OculosBeleza.module.css";
import estiloHome from "../Home/Home.module.css";
import { BsBoxSeam, BsInfoCircle, BsChat, BsWhatsapp } from "react-icons/bs";
import { PiSealCheckLight } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";

import Acordeao from "../../Components/Acordeao/Acordeao";
import { Link } from "react-router-dom";
import Galeria2 from "../../Components/Galeria2/Galeria2";

const Comprar = () => {
   const [imgAmostrar, setImgAmostrar] = useState(1);
   const [cor, setCor] = useState("Dourado Brilhante");

   // Refs
   const btn1 = useRef();
   const btn2 = useRef();

   return (
      <div id={styles.ct}>
         <div id={styles.cima}>
            <div id={styles.left}>
               <h3 className={estiloHome.titulo2}>Cardoso Capas Deluxe</h3>
               <p className={estiloHome.subtit2}>Para todos Iphones</p>
               <Galeria2 />
            </div>
            <div id={styles.right}>
               <h3 className={estiloBeleza.tit2}>Promoção disponível até 30/10</h3>
               <h5>Cor</h5>
               <p>- {cor}</p>
               {/*Opções */}
               <div id={estiloBeleza.opcoes} className={styles.opcoes}>
                  <p
                     ref={btn1}
                     id={estiloBeleza.produto1}
                     className={estiloBeleza.btnAtivo}
                     onClick={() => {
                        setImgAmostrar(1);
                        setCor("Dourado Brilhante");
                        btn1.current.classList.add(estiloBeleza.btnAtivo);
                        btn2.current.classList.remove(estiloBeleza.btnAtivo);
                     }}
                  >
                     <span></span>
                  </p>
               </div>

               <h5>Frete grátis</h5>
               <p>- A partir de 2 compras</p>
               <h5>Garantia de 2 anos</h5>
               <p>- Seguro autorizado</p>
               <h5>Especificações:</h5>
               <ul>
                  <p>
                     <FiCheckCircle />
                     <span>Antipoeira</span>
                  </p>
                  <p>
                     <FiCheckCircle />
                     <span>À prova de choque</span>
                  </p>
                  <p>
                     <FiCheckCircle />
                     <span>Design Simples</span>
                  </p>
                  <p>
                     <FiCheckCircle />
                     <span>Durável</span>
                  </p>
                  <p>
                     <FiCheckCircle />
                     <span>Encaixe Perfeito</span>
                  </p>
                  <p>
                     <FiCheckCircle />
                     <span>Proteção contra arranhões e danos.</span>
                  </p>
               </ul>
               <h5 style={{ color: "#00a000", whiteSpace: "nowrap" }}>
                  <span id={styles.antes}>De R$ 129,99</span> Por R$ 49,99 <span id={styles.empurar}> em até 2x sem juros</span>
               </h5>

               <p id={styles.verde}>
                  <BsInfoCircle />
                  <span>Envio imediato para todo Brasil</span>
               </p>
               <div id={styles.botoes} style={{ marginTop: "1em" }}>
                  <a id={estiloHome.buyBtn} className={styles.buyBtn} href="https://seguro.belezanosolhos.com.br/r/QK0BGZ7IO2">
                     Compre agora
                  </a>
                  <a id={estiloHome.buyBtn} className={styles.zapBtn} href="#">
                     <BsWhatsapp/> Compre via Zap
                  </a>
               </div>
            </div>
         </div>

         <div id={styles.baixo}>
            <div>
               <BsBoxSeam />
               <div>
                  <p>Troca ou devolução grátis</p>
                  <span>Fácil e sem burocracia</span>
               </div>
            </div>
            <div>
               <PiSealCheckLight />
               <div>
                  <p>Garantia de 6 meses</p>
                  <span>Ative quando precisar</span>
               </div>
            </div>
            <div>
               <BsChat />
               <div>
                  <p>Suporte online</p>
                  <Link to={"/contato"}>Fale com a Capas Deluxe</Link>
               </div>
            </div>
         </div>

         <div id={styles.last}>
            <Acordeao />
         </div>
      </div>
   );
};

export default Comprar;
