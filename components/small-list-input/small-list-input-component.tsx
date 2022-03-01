import { SmallListInput } from "./small-list-input-styled";
import { SingleValueType } from "rc-cascader/lib/Cascader";

type Props = {
  onChange: (value: SingleValueType[]) => void;
};

const options = [
  { label: "per Hour", value: "per Hour" },
  { label: "full pay", value: "full pay" },
];

function SmallListInputComponent({ onChange }: Props) {
  return (
    <SmallListInput
      options={options}
      onChange={onChange}
      multiple={false}
      maxTagCount="responsive"
    />
  );
}

export default SmallListInputComponent;
