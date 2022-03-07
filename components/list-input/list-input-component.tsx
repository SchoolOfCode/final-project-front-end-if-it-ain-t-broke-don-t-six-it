import { DefaultOptionType } from "antd/lib/cascader";
import { ChangeEvent } from "react";
import { ListInput } from "./list-input-styled";
import { Cascader } from "antd";
import "antd/dist/antd.css";
import { SingleValueType } from "rc-cascader/lib/Cascader";

type Props = {
  onChange: (value: SingleValueType[]) => void;
  options: {
    tag: string;
    tag_id: number;
    label: string;
    value: number;
  }[];
};

function ListInputComponent({ onChange, options }: Props) {
  const tagOptions = options.map((option) => {
    option = { ...option, label: option.tag, value: option.tag_id };
    return option;
  });
  return (
    <ListInput
      options={tagOptions}
      onChange={onChange}
      multiple
      maxTagCount="responsive"
    />
  );
}

export default ListInputComponent;
