import { FavouriteButton, HeartImage } from "./favourite-button-styled";
import { useState } from "react";

function FavouriteButtonComponent() {
  const [toggle, setToggle] = useState(false);

  return (
    <HeartImage
      onClick={() => setToggle(!toggle)}
      src={toggle ? "/heart-solid.svg" : "/heart-regular.svg"}
      alt="favourite button"
    />
  );
}

export default FavouriteButtonComponent;
