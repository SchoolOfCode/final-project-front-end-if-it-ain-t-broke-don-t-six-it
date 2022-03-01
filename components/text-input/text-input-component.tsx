import { TextInput } from "./text-input-styled";

type Props = {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextInputComponent({ onChange, value }: Props) {
  return <TextInput value={value} onChange={onChange} />;
}

export default TextInputComponent;
