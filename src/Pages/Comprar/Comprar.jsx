import React, { useRef, useState } from "react";
import styles from "./Comprar.module.css";
import estiloBeleza from "../OculosBeleza/OculosBeleza.module.css";
import estiloHome from "../Home/Home.module.css";
import { BsBoxSeam, BsInfoCircle, BsChat } from "react-icons/bs";
import { PiSealCheckLight } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";

import Acordeao from "../../Components/Acordeao/Acordeao";
import { Link } from "react-router-dom";
import Galeria2 from "../../Components/Galeria2/Galeria2";

const Comprar = () => {
   const [imgAmostrar, setImgAmostrar] = useState(1);
   const [cor, setCor] = useState("Preto Brilhante");

   // Refs
   const btn1 = useRef();
   const btn2 = useRef();

   return (
      <div id={styles.ct}>
         <div id={styles.cima}>
            <div id={styles.left}>
               <h3 className={estiloHome.titulo2}>Beleza</h3>
               <p className={estiloHome.subtit2}>All Black</p>
               <Galeria2 />
            </div>
            <div id={styles.right}>
               <h3 className={estiloBeleza.tit2}>Poucas unidades em estoque</h3>
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
                        setCor("Preto Brilhante");
                        btn1.current.classList.add(estiloBeleza.btnAtivo);
                        btn2.current.classList.remove(estiloBeleza.btnAtivo);
                     }}
                  >
                     <span></span>
                  </p>
               </div>

               <h5>Acompanha Case</h5>
               <p>- Branco nuvem</p>
               <h5>Garantia de 2 anos</h5>
               <p>- Seguro autorizado</p>
               <h5>Medidas:</h5>
               <ul>
                  <p>
                     <FiCheckCircle />
                     <span>Formato: Quadrado</span>
                  </p>
                  <p>
                     <FiCheckCircle />
                     <span>Largura da lente: 5 cm</span>
                  </p>
                  <p>
                     <FiCheckCircle />
                     <span>Altura da lente: 3,5 cm</span>
                  </p>
                  <p>
                     <FiCheckCircle />
                     <span>Ponte: 1,5 cm</span>
                  </p>
                  <p>
                     <FiCheckCircle />
                     <span>Comprimento Haste: 14,5 cm</span>
                  </p>
                  <p>
                     <FiCheckCircle />
                     <span>Largura Total: 15 cm</span>
                  </p>
               </ul>
               <h5 style={{ color: "#00a000", whiteSpace: "nowrap" }}>
                  <span id={styles.antes}>De R$ 129,99</span> Por R$ 49,99 <span id={styles.empurar}> em até 2x sem juros</span>
               </h5>
               <p id={styles.verde}>
                  <BsInfoCircle />
                  <span>Envio imediato para todo Brasil</span>
               </p>
               <a id={estiloHome.buyBtn} className={styles.buyBtn} href="https://seguro.belezanosolhos.com.br/r/QK0BGZ7IO2">
                  Compre agora
               </a>
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
                  <p>Garantia de 2 anos</p>
                  <span>Ative quando precisar</span>
               </div>
            </div>
            <div>
               <BsChat />
               <div>
                  <p>Suporte online</p>
                  <Link to={"/contato"}>Fale com a Beleza</Link>
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
