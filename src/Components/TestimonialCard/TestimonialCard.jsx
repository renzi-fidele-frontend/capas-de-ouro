import React from "react";
import styles from "./TestimonialCard.module.css";
import { LuQuote } from "react-icons/lu";

const TestimonialCard = ({ nome, conteudo, foto, data_compra }) => {
   return (
      <div id={styles.ct}>
         <LuQuote className={styles.icon} />
         <p>{conteudo}</p>
         <div className={styles.cliente}>
            <div className={styles.left}>
               <img src={foto} alt="foto do cliente" />
            </div>
            <div className={styles.right}>
               <h5>{nome}</h5>
               <p>Comprou em {data_compra}</p>
            </div>
         </div>
      </div>
   );
};

export default TestimonialCard;
