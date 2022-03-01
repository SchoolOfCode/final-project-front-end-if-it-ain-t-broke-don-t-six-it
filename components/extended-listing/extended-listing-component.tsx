import FavouriteButtonComponent from "../favourite-button/favourite-button-component";
import ListingDescriptionComponent from "../listing-description/listing-description-component";
import ListingDnTComponent from "../listing-dnt/listing-dnt-component";
import ListingHeaderComponent from "../listing-header/listing-header-component";
import ListingLocationComponent from "../listing-location/listing-location-component";
import ListingPayComponent from "../listing-pay/listing-pay-component";
import UserImageComponent from "../user-image/user-image-component";
import { ExtendedListing } from "./extended-listing-styled";
function ExtendedListingComponent() {
  return (
    <ExtendedListing>
      <ListingHeaderComponent />
      <FavouriteButtonComponent />
      <UserImageComponent />
      <ListingLocationComponent />
      <ListingDnTComponent />
      <ListingPayComponent />
      <ListingDescriptionComponent />
    </ExtendedListing>
  );
}

export default ExtendedListingComponent;
