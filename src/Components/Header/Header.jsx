import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logoReal.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
   const navegar = useNavigate();
   return (
      <header
         id={styles.ct}
         onClick={() => {
            navegar("/");
         }}
      >
         <img src={logo} alt="logo " />
      </header>
   );
};

export default Header;
