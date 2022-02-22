import FieldHeaderComponent from "../field-header/field-header-component";
import ListInputComponent from "../list-input/list-input-component";
import { ListField } from "./list-field-styled";

function ListFieldComponent() {
  return (
    <ListField>
      <FieldHeaderComponent text="Tags:" />
      <ListInputComponent />
    </ListField>
  );
}

export default ListFieldComponent;
