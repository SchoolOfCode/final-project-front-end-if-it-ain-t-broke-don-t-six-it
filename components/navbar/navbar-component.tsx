import { NavBar } from "./navbar-styled";
import AuthButtonComponent from "../auth-button/auth-button-component";
import LogoComponent from "../logo/logo-component";
import MenuButtonComponent from "../menu-button/menu-button-component";

function NavBarComponent() {
  return (
    <NavBar>
      <MenuButtonComponent />
      <LogoComponent />
      <AuthButtonComponent />
    </NavBar>
  );
}

export default NavBarComponent;
