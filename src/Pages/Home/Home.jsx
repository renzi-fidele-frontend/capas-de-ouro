import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div id={styles.ct}>
         {/*Secao do Hero */}
         <div id={styles.hero}>
            <div id={styles.left}>
               <h2>
                  Moda passa,
                  <br />
                  estilo é eterno.{" "}
               </h2>
               <p>Coco Chanel</p>
            </div>
            <div id={styles.right}>
               <img src={""} alt="lady" />
            </div>
         </div>

         {/*Secao do Body */}
         <div id={styles.body}>
            <h3 className={styles.titulo2}>Beleza</h3>
            <p className={styles.subtit2}>All Black</p>
            <h5 className={styles.tit}>O verdadeiro óculos de blogueira.</h5>
            <span className={styles.subtit}>E muito melhor do que qualquer outro da internet.</span>
            <div>
               <Link to={"/oculos-beleza"} id={styles.saibaBtn}>
                  Saiba mais
               </Link>
               <Link id={styles.buyBtn} to={"/comprar/beleza-oculos"}>
                  Compre agora
               </Link>
            </div>
            <img src={""} alt="oculos beleza" />
         </div>
      </div>
   );
};

export default Home;
