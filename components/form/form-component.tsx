import DnTFieldComponent from "../dnt-field/dnt-field-component";
import FieldComponent from "../field/field-component";
import ListFieldComponent from "../list-field/list-field-component";
import LongButtonComponent from "../long-button/long-button-component";
import { Form } from "./form-styled";
import { useEffect, useReducer, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import AuthButtonComponent from "../auth-button/auth-button-component";
import { SingleValueType } from "rc-cascader/lib/Cascader";
import { type } from "os";

const initialState: initialStateTypes = {
  accepted_user_id: null,
  date: new Date(),
  description: "",
  rate_of_pay: 0,
  requirement: "",
  status: "open",
  title: "",
  user_id: "",
  user_image: "",
  user_name: "",
  user_rating: 0,
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
  date: Date;
  description: string;
  rate_of_pay: number;
  requirement: string;
  status: string;
  title: string;
  user_id: string | null | undefined;
  user_image: string | null | undefined;
  user_name: string | null | undefined;
  user_rating: number;
  number: number | null;
  name: string;
  street: string;
  city: string;
  county: string;
  postcode: string;
  tags: (string | number | null | undefined)[];
};

interface title {
  type: "title";
  value: string;
}

interface numbername {
  type: "number/name";
  value: string;
}

interface street {
  type: "street";
  value: string;
}

interface towncity {
  type: "town/city";
  value: string;
}

interface county {
  type: "county";
  value: string;
}

interface postcode {
  type: "postcode";
  value: string;
}

interface description {
  type: "description";
  value: string;
}

interface tags {
  type: "tags";
  value: SingleValueType[];
}

interface requirements {
  type: "requirements";
  value: string;
}

interface dateandtime {
  type: "dateAndTime";
  value: Date;
}

interface pay {
  type: "pay";
  value: string;
}

interface submit {
  type: "submit";
  value: {
    userpic: string | null | undefined;
    username: string | null | undefined;
  };
}
interface resetState {
  type: "resetState";
  value: {
    accepted_user_id: null;
    date: Date;
    description: string;
    rate_of_pay: number;
    requirement: string;
    status: string;
    title: string;
    user_id: string | null | undefined;
    user_image: string | null | undefined;
    user_name: string | null | undefined;
    user_rating: number;
    number: number;
    name: string;
    street: string;
    city: string;
    county: string;
    postcode: string;
    tags: (string | number | null | undefined)[];
  };
}

type ActionTypes =
  | title
  | numbername
  | street
  | towncity
  | county
  | postcode
  | description
  | tags
  | requirements
  | dateandtime
  | pay
  | submit
  | resetState;

function reducer(
  state: initialStateTypes,
  action: ActionTypes
): initialStateTypes {
  switch (action.type) {
    case "title":
      return { ...state, title: action.value };
    case "number/name":
      if (isNaN(parseInt(action.value))) {
        return { ...state, name: action.value };
      } else {
        return { ...state, number: parseInt(action.value) };
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
      let arr = action.value.map((array) => {
        return array[0];
      });
      return { ...state, tags: [...arr] };
    case "requirements":
      return { ...state, requirement: action.value };
    case "dateAndTime":
      return { ...state, date: action.value };
    case "pay":
      return { ...state, rate_of_pay: Number(action.value) };
    case "resetState":
      return { ...action.value };
    case "submit":
      return {
        ...state,
        user_id: action.value.username,
        user_image: action.value.userpic,
        user_name: action.value.username,
      };
    default:
      return state;
  }
}
type payload = [];

function FormComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isClicked, setIsClicked] = useState(false);
  const { user } = useUser();
  const [tags, setTags] = useState<payload>([]);

  useEffect(() => {
    async function getTags() {
      const response = await fetch("https://oddjob.herokuapp.com/tags");
      const data = await response.json();
      setTags(data.payload);
      console.log(data.payload);
    }
    getTags();
  }, []);

  useEffect(() => {
    console.log(state);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    };
    async function postJob() {
      const response = await fetch(
        "https://oddjob.herokuapp.com/jobs",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setIsClicked(false);
    }
    if (isClicked) {
      postJob();
    }
    dispatch({ type: "resetState", value: initialState });
  }, [isClicked]);

  return (
    <Form>
      {!user && (
        <div>
          <p>Please Log In to post a job:</p>
          <AuthButtonComponent />
        </div>
      )}
      {user && (
        <div>
          <FieldComponent
            name="Job Title: *"
            value={state.title}
            onChange={(e) => dispatch({ type: "title", value: e.target.value })}
          />
          <FieldComponent
            value={state.number ? state.number : state.name}
            name="Address Number/Name: *"
            onChange={(e) =>
              dispatch({ type: "number/name", value: e.target.value })
            }
          />
          <FieldComponent
            name="Street: *"
            value={state.street}
            onChange={(e) =>
              dispatch({ type: "street", value: e.target.value })
            }
          />
          <FieldComponent
            value={state.city}
            name="Town/City: *"
            onChange={(e) =>
              dispatch({ type: "town/city", value: e.target.value })
            }
          />
          <FieldComponent
            value={state.county}
            name="County: *"
            onChange={(e) =>
              dispatch({ type: "county", value: e.target.value })
            }
          />
          <FieldComponent
            value={state.postcode}
            name="Postcode: *"
            onChange={(e) =>
              dispatch({ type: "postcode", value: e.target.value })
            }
          />
          <FieldComponent
            value={state.description}
            name="Description: *"
            onChange={(e) =>
              dispatch({ type: "description", value: e.target.value })
            }
          />
          <ListFieldComponent
            options={tags}
            onChange={(e) => {
              console.log(e);

              dispatch({ type: "tags", value: e });
            }}
          />
          <FieldComponent
            value={state.requirement}
            name="Requirements: "
            onChange={(e) =>
              dispatch({ type: "requirements", value: e.target.value })
            }
          />
          <DnTFieldComponent
            onOk={(date) => {
              console.log(date);
              dispatch({ type: "dateAndTime", value: date.toDate() });
            }}
          />
          <FieldComponent
            value={state.rate_of_pay}
            name="Pay Rate: *"
            onChange={(e) => dispatch({ type: "pay", value: e.target.value })}
          />
          <LongButtonComponent
            text="Submit"
            onClick={() => {
              dispatch({
                type: "submit",
                value: { userpic: user.picture, username: user.name },
              });
              setIsClicked(!isClicked);
            }}
          />
        </div>
      )}
    </Form>
  );
}

export default FormComponent;
