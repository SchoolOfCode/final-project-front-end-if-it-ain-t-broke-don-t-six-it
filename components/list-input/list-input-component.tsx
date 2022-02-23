import { DefaultOptionType } from "antd/lib/cascader";
import { ChangeEvent } from "react";
import { ListInput } from "./list-input-styled";
import { Cascader } from "antd";
import "antd/dist/antd.css";

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

type Props = {
  onChange: (e: string[][]) => void;
};

function ListInputComponent({ onChange }: Props) {
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
