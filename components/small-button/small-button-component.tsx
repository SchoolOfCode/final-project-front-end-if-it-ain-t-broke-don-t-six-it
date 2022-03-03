import { SmallButton } from "./small-button-styled";

type Props = {
  text: string;
  onClick: () => void;
};

function SmallButtonComponent({ text, onClick }: Props) {
  return <SmallButton onClick={onClick}>{text}</SmallButton>;
}

export default SmallButtonComponent;
