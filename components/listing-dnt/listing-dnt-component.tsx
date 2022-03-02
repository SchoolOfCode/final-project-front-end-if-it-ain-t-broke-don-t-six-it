import { ListingDnT } from "./listing-dnt-styled";

type Props = {
  text: string | undefined;
};

function ListingDnTComponent({ text }: Props) {
  return <ListingDnT>{text}</ListingDnT>;
}

export default ListingDnTComponent;
