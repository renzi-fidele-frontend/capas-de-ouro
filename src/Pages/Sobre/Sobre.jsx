import React from "react";
import styles from "./Sobre.module.css";
import estiloHome from "../Home/Home.module.css";

const Sobre = () => {
   return (
      <div id={styles.ct}>
         <h3 className={estiloHome.tit}>Olá!</h3>
         <h5 className={estiloHome.subtit}>Tudo bem?</h5>

         <p>
            A Capas Cardoso Deluxe foi fundada em 2023, no Rio de Janeiro, com o objetivo de fornecer a capa mais amada do Brasil com segurança e
            extrema qualidade. Na época de 2020 até hoje, o mercado de capas tinha apenas modelos baratos e sem qualidade.
         </p>
         <br />
         <p>
            A Capas Cardoso Deluxe, nosso primeiro e único modelo, está movimentando o mercado em direção a modelos de qualidade e acessíveis,
            servindo de inspiração para várias outras marcas que, aos poucos, começam a seguir este movimento de mudança que seguimos liderando
            em vendas. Atualmente, a Capas Cardoso Deluxe já é uma capa mais bem avaliado do Brasil e conta com uma média de satisfação 5,0, a melhor
            média entre todas as empresas do nosso mercado.
         </p>
         <br />
         <p>
            Na Capas Cardoso Deluxe, nós trabalhamos todos os dias para nos orgulhar do que estamos criando. Tudo que nós fazemos é pensado para
            entregar a melhor experiência possível, o foco em excelência faz parte do nosso DNA e está presente em tudo que nós fazemos.
         </p>
         <img src={""} alt="Loja fisica" />
      </div>
   );
};

export default Sobre;
