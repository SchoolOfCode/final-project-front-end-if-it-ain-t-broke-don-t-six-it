import { ListingLocation } from "./listing-location-styled";

type Props = {
  text: string;
}

function ListingLocationComponent({text}:Props) {
  return <ListingLocation>{text}</ListingLocation>;
}

export default ListingLocationComponent;
