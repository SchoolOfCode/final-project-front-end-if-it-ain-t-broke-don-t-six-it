import FavouriteButtonComponent from "../favourite-button/favourite-button-component";
import ListingHeaderComponent from "../Listing-header/listing-header-component";
import UserImageComponent from "../user-image/user-image-component";
import ListingLocationComponent from "../listing-location/listing-location-component";
import { ListingBox } from "./listing-box-styled";
import { useUser } from "@auth0/nextjs-auth0";

function ListingBoxComponent() {
  const { user } = useUser();
  return (
    <ListingBox>
      <UserImageComponent source="/user-icon.png" username="Sixit" />
      <ListingHeaderComponent />
       <ListingLocationComponent />
      <FavouriteButtonComponent />
    </ListingBox>
  );
}
export default ListingBoxComponent;
