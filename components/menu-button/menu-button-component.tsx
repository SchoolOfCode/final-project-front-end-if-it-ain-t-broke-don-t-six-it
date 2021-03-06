import { MenuButton } from "./menu-button-styled";
import { useState } from "react";
import Image from "next/image";

type Props = {
  isMenu: boolean;
  onClick: () => void;
};

function MenuButtonComponent({ isMenu, onClick }: Props) {
  console.log(isMenu);
  return (
    <MenuButton>
      <Image
        onClick={onClick}
        alt="menu button"
        src={isMenu ? "/menu-cross.png" : "/menu-burger.png"}
        width="35px"
        height="35px"
      />
    </MenuButton>
  );
}

export default MenuButtonComponent;
