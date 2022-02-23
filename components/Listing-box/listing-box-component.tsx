import ListingLocationComponent from "../listing-location/listing-location-component";
import { ListingBox } from "./listing-box-styled";

export function ListingBoxComponent() {
  return (
    <ListingBox>
      <ListingLocationComponent />
    </ListingBox>
  );
}
export default ListingBoxComponent;
