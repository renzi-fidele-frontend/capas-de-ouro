import React, { useRef, useState } from "react";
import styles from "./Galeria2.module.css";

// Imagens
import prd1 from "../../assets/depoimentos/dp-2.jpg";
import prd2 from "../../assets/depoimentos/dp-2.jpg";
import prd3 from "../../assets/depoimentos/dp-2.jpg";
import prd5 from "../../assets/depoimentos/dp-2.jpg";

const Galeria2 = () => {
   const [img, setImg] = useState(prd1);

   //  Refs
   const ref1 = useRef(null);
   const ref2 = useRef(null);
   const ref3 = useRef(null);
   const ref4 = useRef(null);

   return (
      <div id={styles.ct}>
         <div id={styles.imgCont}>
            <img draggable={false} src={img} alt="" />
         </div>
         <div id={styles.imgSmall}>
            <img
               draggable={false}
               ref={ref1}
               className={styles.ativo}
               src={prd1}
               onClick={(e) => {
                  setImg(e.target.src);
                  ref1.current.classList.add(styles.ativo);
                  ref2.current.classList.remove(styles.ativo);
                  ref3.current.classList.remove(styles.ativo);
                  ref4.current.classList.remove(styles.ativo);
               }}
               alt=""
            />
            <img
               draggable={false}
               ref={ref2}
               src={prd2}
               onClick={(e) => {
                  setImg(e.target.src);
                  ref2.current.classList.add(styles.ativo);

                  ref1.current.classList.remove(styles.ativo);
                  ref3.current.classList.remove(styles.ativo);
                  ref4.current.classList.remove(styles.ativo);
               }}
               alt=""
            />
            <img
               draggable={false}
               ref={ref3}
               src={prd3}
               onClick={(e) => {
                  setImg(e.target.src);
                  ref3.current.classList.add(styles.ativo);
                  ref1.current.classList.remove(styles.ativo);
                  ref2.current.classList.remove(styles.ativo);
                  ref4.current.classList.remove(styles.ativo);
               }}
               alt=""
            />
            <img
               draggable={false}
               ref={ref4}
               src={prd5}
               onClick={(e) => {
                  setImg(e.target.src);
                  ref4.current.classList.add(styles.ativo);
                  ref1.current.classList.remove(styles.ativo);
                  ref2.current.classList.remove(styles.ativo);
                  ref3.current.classList.remove(styles.ativo);
               }}
               alt=""
            />
         </div>
      </div>
   );
};

export default Galeria2;
