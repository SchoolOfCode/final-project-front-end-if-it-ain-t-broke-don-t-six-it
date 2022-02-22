import { LongButton } from "./long-button-styled";

type Props = {
  text: string;
};

function LongButtonComponent({ text }: Props) {
  return <LongButton>{text}</LongButton>;
}

export default LongButtonComponent;
