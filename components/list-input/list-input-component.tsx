import { ListInput } from "./list-input-styled";

const options = [
  {
    label: "Cleaning",
    value: "cleaning",
  },
  {
    label: "Delivery",
    value: "delivery",
  },
  {
    label: "Baby Sitting",
    value: "baby sitting",
  },
  {
    label: "Dog Walking",
    value: "dog walking",
  },
  {
    label: "House Sitting",
    value: "house sitting",
  },
  {
    label: "Tutor",
    value: "tutor",
  },
  {
    label: "Valeting",
    value: "valeting",
  },
];

function ListInputComponent() {
  function onChange(value: any) {
    console.log(value);
  }

  return (
    <ListInput
      options={options}
      onChange={onChange}
      multiple
      maxTagCount="responsive"
    />
  );
}

export default ListInputComponent;
