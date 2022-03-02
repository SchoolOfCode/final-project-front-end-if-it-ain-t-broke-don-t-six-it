import { ListingDescription } from "./listing-description-styled";

type Props = {
  description: string;
};

function ListingDescriptionComponent({ description }: Props) {
  return <ListingDescription>{description}</ListingDescription>;
}

export default ListingDescriptionComponent;
