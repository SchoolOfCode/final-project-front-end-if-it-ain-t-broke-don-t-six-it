import { MenuButton } from "./menu-button-styled";
import { useState } from "react";
import Image from "next/image";

function MenuButtonComponent() {
  const [isClicked, setIsClicked] = useState(false);
  function onClick() {
    setIsClicked(!isClicked);
  }

  return (
    <MenuButton onClick={onClick}>
      <img
        alt="menu button"
        src={isClicked ? "/menu-cross.png" : "/menu-burger.png"}
        width="35px"
        height="35px"
      />
    </MenuButton>
  );
}

export default MenuButtonComponent;
