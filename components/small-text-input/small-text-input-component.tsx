import { SmallTextInput } from "./small-text-input-styled";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stateValue: string;
};

function SmallTextInputComponent({ onChange, stateValue }: Props) {
  return <SmallTextInput onChange={onChange} value={stateValue} />;
}

export default SmallTextInputComponent;
