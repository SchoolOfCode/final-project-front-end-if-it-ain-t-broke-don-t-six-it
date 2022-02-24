import { ListingPay } from "./listing-pay-styled";

type Props = {
  text: number;
};

function ListingPayComponent({ text }: Props) {
  return <ListingPay>{text}</ListingPay>;
}

export default ListingPayComponent;
