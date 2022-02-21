import { MenuPage } from "./menu-page-styled";
import BottomLinksComponent from "../bottom-links/bottom-links-component";
import TopLinksComponent from "../top-links/top-links-component";

function MenuPageComponent() {
  return (
    <MenuPage>
      <TopLinksComponent />
      <BottomLinksComponent />
    </MenuPage>
  );
}

export default MenuPageComponent;
