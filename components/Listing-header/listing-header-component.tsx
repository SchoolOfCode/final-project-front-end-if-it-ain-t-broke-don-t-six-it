import { ListingHeader } from "./listing-header-styled";

type Props = {
  text: string;
}

function ListingHeaderComponent({text}:Props) {
  return <ListingHeader>{text}</ListingHeader>;
}

export default ListingHeaderComponent;
