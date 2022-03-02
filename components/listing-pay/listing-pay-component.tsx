import { ListingPay } from "./listing-pay-styled";

type Props = {
  text: string;
};

function ListingPayComponent({ text }: Props) {
  return <ListingPay>£{text}</ListingPay>;
}

export default ListingPayComponent;
