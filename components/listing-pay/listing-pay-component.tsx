import { ListingPay } from "./listing-pay-styled";

type Props = {
  text: string | undefined;
};

function ListingPayComponent({ text }: Props) {
  return <ListingPay>£{text}</ListingPay>;
}

export default ListingPayComponent;
