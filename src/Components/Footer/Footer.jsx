import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import imgPagar from "../../assets/card_brands.png";

// React Icons
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
   return (
      <footer id={styles.ct}>
         <div id={styles.cima}>
            <div id={styles.left}>
               <Link to={"/sobre"}>Sobre</Link>
               <Link to={"/contato"}>Contato</Link>
               <Link to={"/politica-de-vendas/#trocas-e-devolucoes"}>Trocas e devoluções</Link>
               <Link to={"/politica-de-vendas"}>Política de vendas</Link>
               <a href="https://www.linkcorreios.com.br">Rastreie seu pedido</a>
            </div>
            <div id={styles.right}>
               <a href="https://www.instagram.com/blznosolhos/" target="_blank">
                  <BsInstagram />
               </a>
               <a href="" target="_blank">
                  <BsFacebook />
               </a>
            </div>
         </div>
         <div id={styles.baixo}>
            <div id={styles.left}>
               <h1>Beleza</h1>
               <p>Copyright © 2023 Beleza Ltda.</p>
               <p>Rua Costa Barros, 2100 - Centro Comercial - São Paulo</p>
            </div>
            <div id={styles.right}>
               <img src={imgPagar} alt="pagamento seguro" />
               <p>Precisa de ajuda?</p>
               <span>suporte@belezanosolhos.com</span>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
