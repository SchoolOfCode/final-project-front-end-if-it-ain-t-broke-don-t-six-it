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

type initialStateTypes = {
  accepted_user_id: null;
  date: number;
  description: string;
  rate_of_pay: number;
  requirement: string;
  status: string;
  title: string;
  user_id: string;
  user_image: string;
  user_name: string;
  user_rating: number;
  number: number;
  name: string;
  street: string;
  city: string;
  county: string;
  postcode: string;
  tags: [string];
};

type Props = {
  state: initialStateTypes;
  action: {
    type: string;
    value: string;
  };
};

function reducer(state: object, action: object) {
  switch (action.type) {
    case "title":
      return { ...state, title: action.value };
    case "number/name":
      if (typeof parseInt(action.value) === NaN) {
        return { ...state, name: action.value };
      } else {
        return { ...state, number: action.value };
      }
    case "street":
      return { ...state, street: action.value };
    case "town/city":
      return { ...state, city: action.value };
    case "county":
      return { ...state, county: action.value };
    case "postcode":
      return { ...state, postcode: action.value };
    case "description":
      return { ...state, description: action.value };
    case "tags":

    case "requirements":
      return { ...state, requirements: action.value };
    case "dateAndTime":

    case "pay":
      return { ...state, rate_of_pay: action.value };
    default:
      return state;
  }
}

function FormComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Form>
      <FieldComponent
        name="Job Title: *"
        onChange={(e) => dispatch({ type: "title", value: e.target.value })}
      />
      <FieldComponent
        name="Address Number/Name: *"
        onChange={(e) =>
          dispatch({ type: "number/name", value: e.target.value })
        }
      />
      <FieldComponent
        name="Street: *"
        onChange={(e) => dispatch({ type: "street", value: e.target.value })}
      />
      <FieldComponent
        name="Town/City: *"
        onChange={(e) => dispatch({ type: "town/city", value: e.target.value })}
      />
      <FieldComponent
        name="County: *"
        onChange={(e) => dispatch({ type: "county", value: e.target.value })}
      />
      <FieldComponent
        name="Postcode: *"
        onChange={(e) => dispatch({ type: "postcode", value: e.target.value })}
      />
      <FieldComponent
        name="Description: *"
        onChange={(e) =>
          dispatch({ type: "description", value: e.target.value })
        }
      />
      <ListFieldComponent />
      <FieldComponent
        name="Requirements: "
        onChange={(e) =>
          dispatch({ type: "requirements", value: e.target.value })
        }
      />
      <DnTFieldComponent />
      <FieldComponent
        name="Pay Rate: *"
        onChange={(e) => dispatch({ type: "pay", value: e.target.value })}
      />
      <LongButtonComponent text="Submit" />
    </Form>
  );
}

export default FormComponent;
