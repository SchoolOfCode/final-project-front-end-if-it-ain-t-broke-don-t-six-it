import { ShowMoreButton } from "./show-more-button-styled";
type Props = {
  onClick: () => void;
};

function ShowMoreButtonComponent({ onClick }: Props) {
  return <ShowMoreButton onClick={onClick}>Show More</ShowMoreButton>;
}

export default ShowMoreButtonComponent;
