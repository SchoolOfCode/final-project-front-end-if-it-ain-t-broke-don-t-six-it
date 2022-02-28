import { DefaultOptionType } from "antd/lib/cascader";
import FieldHeaderComponent from "../field-header/field-header-component";
import ListInputComponent from "../list-input/list-input-component";
import { ListField } from "./list-field-styled";
import { SingleValueType } from "rc-cascader/lib/Cascader";

type Props = {
  onChange: (value: SingleValueType[]) => void;
  options: [];
};

function ListFieldComponent({ onChange, options }: Props) {
  return (
    <ListField>
      <FieldHeaderComponent text="Tags:" />
      <ListInputComponent options={options} onChange={onChange} />
    </ListField>
  );
}

export default ListFieldComponent;
