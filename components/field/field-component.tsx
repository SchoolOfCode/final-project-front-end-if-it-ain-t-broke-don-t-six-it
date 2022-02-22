import FieldHeaderComponent from "../field-header/field-header-component";
import TextInputComponent from "../text-input/text-input-conponent";
import { Field } from "./field-styled";

type Props = {
  name: string;
  onChange: () => void;
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
