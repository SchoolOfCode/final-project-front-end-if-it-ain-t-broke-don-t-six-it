import DnTFieldComponent from "../dnt-field/dnt-field-component";
import FieldComponent from "../field/field-component";
import ListFieldComponent from "../list-field/list-field-component";
import { Form } from "./form-styled";

function FormComponent() {
  return (
    <Form>
      <FieldComponent name="Job Title: *" />
      <FieldComponent name="Address Number/Name: *" />
      <FieldComponent name="Street: *" />
      <FieldComponent name="Town/City: *" />
      <FieldComponent name="County: *" />
      <FieldComponent name="Postcode: *" />
      <FieldComponent name="Description: *" />
      <ListFieldComponent />
      <FieldComponent name="Requirements: " />
      <DnTFieldComponent />
      <FieldComponent name="Pay Rate: *" />
    </Form>
  );
}

export default FormComponent;
