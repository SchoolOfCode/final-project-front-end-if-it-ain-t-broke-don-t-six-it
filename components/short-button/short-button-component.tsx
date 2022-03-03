import { ShortButton } from "./short-button-styled";

type Props = {
  text: string;
  onClick: () => void;
};

function ShortButtonComponent({ text, onClick }: Props) {
  return <ShortButton onClick={onClick}>{text}</ShortButton>;
}
export default ShortButtonComponent;
