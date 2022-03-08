import { ListingBox } from "./listing-box-styled";
import TopComponent from "../top/top-component";
import ListingLocationComponent from "../listing-location/listing-location-component";
import ListingDnTComponent from "../listing-dnt/listing-dnt-component";
import BottomComponent from "../bottom/bottom-component";

type Props = {
  title: string;
  source: string | undefined | null;
  address: string;
  date: string;
  pay: string;
  job_id: number;
  user_id: string | undefined | null;
};

function ListingBoxComponent({
  title,
  source,
  address,
  date,
  pay,
  job_id,
  user_id,
}: Props) {
  return (
    <ListingBox>
      <TopComponent text={title} source={source} />
      <ListingLocationComponent text={address} />
      <ListingDnTComponent text={date} />
      <BottomComponent job_id={job_id} text={pay} user_id={user_id} />
    </ListingBox>
  );
}
export default ListingBoxComponent;
