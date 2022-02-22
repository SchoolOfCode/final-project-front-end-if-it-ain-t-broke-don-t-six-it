import DnTInputComponent from "../dnt-input/dnt-input-component";
import FieldHeaderComponent from "../field-header/field-header-component";
import { DnTField } from "./dnt-field-styled";

function DnTFieldComponent() {
  return (
    <DnTField>
      <FieldHeaderComponent text="Date & Time: *" />
      <DnTInputComponent />
    </DnTField>
  );
}

export default DnTFieldComponent;
