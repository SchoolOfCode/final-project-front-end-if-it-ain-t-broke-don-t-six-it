import DnTFieldComponent from "../dnt-field/dnt-field-component";
import FieldComponent from "../field/field-component";
import ListFieldComponent from "../list-field/list-field-component";
import LongButtonComponent from "../long-button/long-button-component";
import { Form } from "./form-styled";
import { useReducer } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { userInfo } from "os";

const { user } = useUser();

const initialState = {
  accepted_user_id: null,
  date: null,
  description: "",
  rate_of_pay: null,
  requirement: "",
  status: "open",
  title: "",
  user_id: "",
  user_image: user.picture,
  user_name: user.name,
  number: null,
  name: "",
  street: "",
  city: "",
  county: "",
  postcode: "",
  tags: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "title":

    case "number/name":

    case "street":

    case "town/city":

    case "county":

    case "postcode":

    case "description":

    case "tags":

    case "requirements":

    case "dateAndTime":

    case "pay":

    default:
      return state;
  }
}

function FormComponent() {
  const [jobListing, dispatch] = useReducer(reducer, initialState);

  return (
    <Form>
      <FieldComponent name="Job Title: *" onChange={() => dispatch()} />
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
      <LongButtonComponent text="Submit" />
    </Form>
  );
}

export default FormComponent;
