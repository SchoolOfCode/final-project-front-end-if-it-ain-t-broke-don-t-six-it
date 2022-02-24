import { ListingBox } from "./listing-box-styled";
import TopComponent from "../top/top-component";

type Props = {
  title: string;
  source: string;
}

function ListingBoxComponent({title, source}: Props) {
  return (
    <ListingBox>
      <TopComponent text={title} source={source} />
    </ListingBox>
  );
}
export default ListingBoxComponent;
