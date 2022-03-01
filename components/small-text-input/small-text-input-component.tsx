import { SmallTextInput } from "./small-text-input-styled";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SmallTextInputComponent({ onChange }: Props) {
  return <SmallTextInput onChange={onChange} />;
}

export default SmallTextInputComponent;
