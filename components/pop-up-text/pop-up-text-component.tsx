import { PopUpText } from "./pop-up-text-styled";

type Props = {
  text: string;
};

function PopUpTextComponent({ text }: Props) {
  return <PopUpText>{text}</PopUpText>;
}

export default PopUpTextComponent;
