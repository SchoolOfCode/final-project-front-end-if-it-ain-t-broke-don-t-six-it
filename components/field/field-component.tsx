import FieldHeaderComponent from "../field-header/field-header-component";
import TextInputComponent from "../text-input/text-input-conponent";
import { Field } from "./field-styled";

type Props = {
  name: string;
};

function FieldComponent({ name }: Props) {
  return (
    <Field>
      <FieldHeaderComponent text={name} />
      <TextInputComponent />
    </Field>
  );
}

export default FieldComponent;
