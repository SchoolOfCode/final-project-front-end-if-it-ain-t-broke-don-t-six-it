import { HeartImage } from "./favourite-button-styled";
import { useState } from "react";

type Props = {
  isExtended: boolean;
  isFavouriteToggle: boolean | undefined;
  setIsFavouriteToggle: (e: boolean) => void;
  isFavourited: boolean | undefined;
};

function FavouriteButtonComponent({
  isExtended,
  isFavouriteToggle,
  setIsFavouriteToggle,
  isFavourited,
}: Props) {
  const [toggle, setToggle] = useState(false);

  return (
    <HeartImage
      onClick={() => setIsFavouriteToggle(!isFavouriteToggle)}
      src={
        isFavouriteToggle || isFavourited
          ? "/heart-solid.svg"
          : "/heart-regular.svg"
      }
      alt="favourite button"
      isExtended={isExtended}
    />
  );
}

export default FavouriteButtonComponent;
