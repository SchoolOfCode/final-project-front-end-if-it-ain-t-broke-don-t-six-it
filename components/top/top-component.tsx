import ListingHeaderComponent from "../listing-header/listing-header-component";
import TopRightComponent from "../top-right/top-right-component";
import { Top } from "./top-styled";

type Props = {
  text: string;
  source: string | undefined | null;
  setIsFavouriteToggle: (e: boolean) => void;
  isFavouriteToggle: boolean | undefined;
  isFavourited: boolean | undefined;
};

function TopComponent({
  text,
  source,
  setIsFavouriteToggle,
  isFavouriteToggle,
  isFavourited,
}: Props) {
  return (
    <Top>
      <ListingHeaderComponent text={text} />
      <TopRightComponent
        isFavourited={isFavourited}
        isFavouriteToggle={isFavouriteToggle}
        setIsFavouriteToggle={setIsFavouriteToggle}
        source={source}
      />
    </Top>
  );
}

export default TopComponent;
