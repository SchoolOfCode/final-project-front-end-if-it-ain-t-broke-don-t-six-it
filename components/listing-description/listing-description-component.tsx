import { ListingDescription } from "./listing-description-styled";

type Props = {
  description: string | undefined;
  header: string;
};

function ListingDescriptionComponent({ description, header }: Props) {
  return (
    <>
      <ListingDescription isHeader={true}>ⓘ {header}</ListingDescription>
      <ListingDescription isHeader={false}>{description}</ListingDescription>
    </>
  );
}

export default ListingDescriptionComponent;
