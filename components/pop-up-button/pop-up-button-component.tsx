import { PopUpButton } from "./pop-up-button-styled";

type Props = {
  text: string;
  onClick: () => void;
};

function PopUpButtonComponent({ text, onClick }: Props) {
  return <PopUpButton onClick={onClick}>{text}</PopUpButton>;
}

export default PopUpButtonComponent;
