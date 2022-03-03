import { HeartImage } from "./favourite-button-styled";
import { useState } from "react";

type Props = {
  isExtended: boolean;
};

function FavouriteButtonComponent({ isExtended }: Props) {
  const [toggle, setToggle] = useState(false);

  return (
    <HeartImage
      onClick={() => setToggle(!toggle)}
      src={toggle ? "/heart-solid.svg" : "/heart-regular.svg"}
      alt="favourite button"
      isExtended={isExtended}
    />
  );
}

export default FavouriteButtonComponent;
