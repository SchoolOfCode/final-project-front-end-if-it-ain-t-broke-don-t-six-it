import { ListingLocation } from "./listing-location-styled";

type Props = {
  text: string | undefined;
};

function ListingLocationComponent({ text }: Props) {
  return <ListingLocation>{text}</ListingLocation>;
}

export default ListingLocationComponent;
