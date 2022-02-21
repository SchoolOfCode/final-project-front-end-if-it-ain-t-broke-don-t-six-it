import FieldHeaderComponent from "../field-header/field-header-component";
import { Field } from "./field-styled";

function FieldComponent() {
  return (
    <Field>
      <FieldHeaderComponent text="Title: *" />
    </Field>
  );
}

export default FieldComponent;
