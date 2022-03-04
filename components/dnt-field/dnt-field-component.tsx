import DnTInputComponent from "../dnt-input/dnt-input-component";
import FieldHeaderComponent from "../field-header/field-header-component";
import { DnTField } from "./dnt-field-styled";
import type { Moment } from "moment";

type Props = {
  onOk: (date: Moment) => void;
  isRefreshed: boolean;
};

function DnTFieldComponent({ onOk, isRefreshed }: Props) {
  return (
    <DnTField>
      <FieldHeaderComponent text="Date & Time: *" />
      <DnTInputComponent onOk={onOk} isRefreshed={isRefreshed} />
    </DnTField>
  );
}

export default DnTFieldComponent;
