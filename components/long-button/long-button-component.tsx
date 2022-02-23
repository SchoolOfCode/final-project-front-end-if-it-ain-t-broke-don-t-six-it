import { LongButton } from "./long-button-styled";

type Props = {
  text: string;
  onClick: () => void;
};

function LongButtonComponent({ text, onClick }: Props) {
  return <LongButton onClick={onClick}>{text}</LongButton>;
}

export default LongButtonComponent;
