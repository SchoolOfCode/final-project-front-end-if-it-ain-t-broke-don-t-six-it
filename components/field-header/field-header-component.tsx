import { FieldHeader } from "./field-header-styled";

type Props = {
  text: string;
};

function FieldHeaderComponent({ text }: Props) {
  return <FieldHeader>{text}</FieldHeader>;
}

export default FieldHeaderComponent;
