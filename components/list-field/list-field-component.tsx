import { DefaultOptionType } from "antd/lib/cascader";
import FieldHeaderComponent from "../field-header/field-header-component";
import ListInputComponent from "../list-input/list-input-component";
import { ListField } from "./list-field-styled";

type Props = {
  onChange: (e: string[][]) => void;
};

function ListFieldComponent({ onChange }: Props) {
  return (
    <ListField>
      <FieldHeaderComponent text="Tags:" />
      <ListInputComponent onChange={onChange} />
    </ListField>
  );
}

export default ListFieldComponent;
