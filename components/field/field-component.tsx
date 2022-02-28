import FieldHeaderComponent from "../field-header/field-header-component";
import TextInputComponent from "../text-input/text-input-component";
import { Field } from "./field-styled";

type Props = {
  name: string;
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FieldComponent({ value,name, onChange }: Props) {
  return (
    <Field>
      <FieldHeaderComponent text={name} />
      <TextInputComponent onChange={onChange} value={value}/>
    </Field>
  );
}

export default FieldComponent;
