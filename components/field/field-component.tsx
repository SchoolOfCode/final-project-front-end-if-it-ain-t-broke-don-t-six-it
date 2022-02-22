import FieldHeaderComponent from "../field-header/field-header-component";
import TextInputComponent from "../text-input/text-input-component";
import { Field } from "./field-styled";

type Props = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FieldComponent({ name, onChange }: Props) {
  return (
    <Field>
      <FieldHeaderComponent text={name} />
      <TextInputComponent onChange={onChange} />
    </Field>
  );
}

export default FieldComponent;
