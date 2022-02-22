import DnTInputComponent from "../dnt-input/dnt-input-component";
import FieldComponent from "../field/field-component";
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
      <FieldComponent name="Pay Rate: *" />
      <DnTInputComponent />
    </Form>
  );
}

export default FormComponent;
