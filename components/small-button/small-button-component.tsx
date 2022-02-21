import { SmallButton } from "./small-button-styled";

type Props = {
  text: string;
};

function SmallButtonComponent({ text }: Props) {
  return <SmallButton>{text}</SmallButton>;
}

export default SmallButtonComponent;
