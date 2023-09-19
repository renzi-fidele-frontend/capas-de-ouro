import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
function SmoothScroll({ children }) {
   const location = useLocation();
   const navType = useNavigationType();
   useEffect(() => {
      if (navType !== "POP" && location.hash !== "#trocas-e-devolucoes") {
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         });
      }
   }, [location]);
   return <>{children}</>;
}
export default SmoothScroll;
