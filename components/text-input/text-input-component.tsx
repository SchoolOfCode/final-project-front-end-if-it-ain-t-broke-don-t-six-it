import { TextInput } from "./text-input-styled";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextInputComponent({ onChange }: Props) {
  return <TextInput onChange={onChange} />;
}

export default TextInputComponent;
