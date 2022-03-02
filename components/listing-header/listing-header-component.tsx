import { ListingHeader } from "./listing-header-styled";

type Props = {
  text: string | undefined;
};

function ListingHeaderComponent({ text }: Props) {
  return <ListingHeader>{text}</ListingHeader>;
}

export default ListingHeaderComponent;
