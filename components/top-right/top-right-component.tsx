import FavouriteButtonComponent from "../favourite-button/favourite-button-component";
import UserImageComponent from "../user-image/user-image-component";
import { TopRight } from "./top-right-styled";

type Props = {
  source: string | undefined | null;
  setIsFavouriteToggle: (e: boolean) => void;
  isFavouriteToggle: boolean | undefined;
  isFavourited: boolean | undefined;
};

function TopRightComponent({
  source,
  setIsFavouriteToggle,
  isFavouriteToggle,
  isFavourited,
}: Props) {
  return (
    <TopRight>
      <FavouriteButtonComponent
        isExtended={false}
        isFavouriteToggle={isFavouriteToggle}
        setIsFavouriteToggle={setIsFavouriteToggle}
        isFavourited={isFavourited}
      />
      <UserImageComponent source={source} username="Sixit" />
    </TopRight>
  );
}

export default TopRightComponent;
