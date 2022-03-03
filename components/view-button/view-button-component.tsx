import { ViewButton } from "./view-button-styled";
type Props = {
  onClick: () => void;
};
function ViewButtonComponent({ onClick }: Props) {
  return <ViewButton onClick={onClick}>View</ViewButton>;
}

export default ViewButtonComponent;
