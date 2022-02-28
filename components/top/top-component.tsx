// import ListingHeaderComponent from "../listing-header/listing-header-component";
import TopRightComponent from "../top-right/top-right-component";
import { Top } from "./top-styled";

type Props = {
  text: string;
  source: string;
};

function TopComponent({ text, source }: Props) {
  return (
    <Top>
      {/* <ListingHeaderComponent text={text} /> */}
      <TopRightComponent source={source} />
    </Top>
  );
}

export default TopComponent;
