import DnTInputComponent from "../dnt-input/dnt-input-component";
import FieldHeaderComponent from "../field-header/field-header-component";
import { DnTField } from "./dnt-field-styled";
import type { Moment } from "moment";

type Props = {
  onOk: (date: Moment) => void;
};

function DnTFieldComponent({ onOk }: Props) {
  return (
    <DnTField>
      <FieldHeaderComponent text="Date & Time: *" />
      <DnTInputComponent onOk={onOk} />
    </DnTField>
  );
}

export default DnTFieldComponent;
