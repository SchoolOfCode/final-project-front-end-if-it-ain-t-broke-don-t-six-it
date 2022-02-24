import { LongSearchButton } from "./long-search-button-styled";

type Props = {
  onClick: () => void;
};

function LongSearchButtonComponent({ onClick }: Props) {
  return <LongSearchButton onClick={onClick}>Search</LongSearchButton>;
}

export default LongSearchButtonComponent;
