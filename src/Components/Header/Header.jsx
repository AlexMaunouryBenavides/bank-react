import "../../App.css";
import ArgentBankLOGO from "../../Assets/Img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
export default function Header() {
   return (
      <div>
         <nav class="main-nav">
            <NavLink class="main-nav-logo" to="/">
               <img class="main-nav-logo-image" src={ArgentBankLOGO} alt="Argent Bank Logo" />
            </NavLink>

            <div>
               <NavLink class="main-nav-item" to="/login">
                  <i class="fa fa-user-circle"></i>
                  Sign In
               </NavLink>
            </div>
         </nav>
      </div>
   );
}
