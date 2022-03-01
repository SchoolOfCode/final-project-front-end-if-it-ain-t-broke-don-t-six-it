import { SearchListInput } from "./search-list-input-styled";
import { SingleValueType } from "rc-cascader/lib/Cascader";
import { useState, useEffect } from "react";

type Props = {
  onChange: (value: SingleValueType) => void;
};

function SearchListInputComponent({ onChange }: Props) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function getTags() {
      const response = await fetch("https://oddjob.herokuapp.com/tags");
      const data = await response.json();
      setTags(data.payload);
      console.log(data.payload);
    }
    getTags();
  }, []);

  return (
    <SearchListInput
      options={tags}
      onChange={onChange}
      multiple={false}
      maxTagCount="responsive"
    />
  );
}

export default SearchListInputComponent;
