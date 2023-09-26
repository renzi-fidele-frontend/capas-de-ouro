import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

// imagens
import img1 from "../../assets/1.jpg";
import lady from "../../assets/lady.png";

const Home = () => {
   return (
      <div id={styles.ct}>
         {/*Secao do Hero */}
         <div id={styles.hero}>
            <div id={styles.left}>
               <h2>
                  Garanta segurança,
                  <br />
                  com o melhor estilo.{" "}
               </h2>
               <p>Wendell Cardoso</p>
            </div>
            <div id={styles.right}>
               <img src={lady} alt="lady" />
            </div>
         </div>

         {/*Secao do Body */}
         <div id={styles.body}>
            <h3 className={styles.titulo2}>Cardoso Capas Deluxe</h3>
            <p className={styles.subtit2}>Para todos Iphones</p>
            <h5 className={styles.tit}>A verdadeira capa de ouro para seu Iphone.</h5>
            <span className={styles.subtit}>E muito melhor do que qualquer outra da internet.</span>
            <div>
               <Link to={"/capa-deluxe"} id={styles.saibaBtn}>
                  Saiba mais
               </Link>
               <Link id={styles.buyBtn} to={"/comprar/capa-deluxe"}>
                  Compre agora
               </Link>
            </div>
            <img src={img1} alt="Capa deluxe" />
         </div>
      </div>
   );
};

export default Home;
