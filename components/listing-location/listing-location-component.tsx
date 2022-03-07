import { ListingLocation } from "./listing-location-styled";

type Props = {
  text: string | undefined;
};

function ListingLocationComponent({ text }: Props) {
  return (
    <ListingLocation>
      <img className="location-pin" src="/location.png" alt="location pin" />
      {text}
    </ListingLocation>
  );
}

export default ListingLocationComponent;
