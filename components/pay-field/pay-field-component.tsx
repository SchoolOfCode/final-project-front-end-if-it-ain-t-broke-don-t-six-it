import FieldHeaderComponent from "../field-header/field-header-component";
import { PayField } from "./pay-field-styled";

function PayFieldComponent() {
  return (
    <PayField>
      <FieldHeaderComponent text="Pay (£): * " />

      <div></div>
    </PayField>
  );
}
