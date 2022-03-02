import { SearchListInput } from "./search-list-input-styled";
import { SingleValueType } from "rc-cascader/lib/Cascader";
import { useState, useEffect } from "react";

type Props = {
  onChange: (value: SingleValueType) => void;
  tags: { tag_id: number; tag: string }[];
};

function SearchListInputComponent({ onChange, tags }: Props) {
  const [options, setOptions] = useState([{ label: "", value: 0 }]);

  function populateOptions() {
    const optionsArr = tags.map((obj) => {
      return {
        label: obj.tag.charAt(0).toUpperCase() + obj.tag.slice(1),
        value: obj.tag,
      };
    });
    return optionsArr;
  }

  useEffect(() => {
    setOptions(populateOptions());
  }, [tags]);

  return (
    <SearchListInput
      options={options}
      onChange={onChange}
      multiple={false}
      maxTagCount="responsive"
    />
  );
}

export default SearchListInputComponent;
