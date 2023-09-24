import React from "react";
import styles from "./Contato.module.css";
import estiloHome from "../Home/Home.module.css";
import zap from "../../assets/icon_whatsapp.png";
import insta from "../../assets/icon_instagram.png";
import mail from "../../assets/icon_email.png";

const Contato = () => {
   return (
      <div id={styles.ct}>
         <h3 className={estiloHome.tit}>Um suporte incrível.</h3>
         <h5 className={estiloHome.subtit}>Pelo seu aplicativo preferido.</h5>
         <div id={styles.meio}>
            {" "}
            <div>
               <a href="#">
                  <img src={zap} alt="icone do Zap" />
               </a>
               <a href="https://www.instagram.com/cardosodeluxe/" id={styles.afastar}>
                  <img src={insta} alt="icone do Insta" />
               </a>

               <a href="mailto:suporte@belezanosolhos.com">
                  <img src={mail} alt="icone do mail" />
               </a>
            </div>
            <p>Selecione o aplicativo</p>
            <span>Prazo de resposta de um dia útil</span>
         </div>

         <div id={styles.baixo}>
            <div id={styles.left}>
               <img src={""} id={styles.demo} alt="" />
               <img src={""} id={styles.demoMobile} alt="" />
            </div>{" "}
            <div id={styles.right}>
               <h3 className={estiloHome.tit}>Precisa de ajuda?</h3>
               <h5 className={estiloHome.subtit}>Nós vamos te ajudar.</h5>
               <p>
                  Sempre que precisar, você pode entrar em contato com a equipe de suporte da Cardoso Capas Deluxe. Será um prazer te conhecer, tirar as suas
                  dúvidas e te ajudar com tudo que você precisar.
               </p>
               <br />
               <p>
                  Nós recebemos centenas de mensagens todos os dias, por isso, nem sempre conseguimos responder na hora. De qualquer forma, pode
                  ficar tranquilo porque sempre vamos te responder rápido.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Contato;
