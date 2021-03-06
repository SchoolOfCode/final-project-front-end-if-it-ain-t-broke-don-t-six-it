import React from "react";
import FilterInputComponent from "../filter-input/filter-input-component";
import FilterWordComponent from "../filter-word/filter-word-component";
import { SearchFilter } from "./search-filter-styled";
import SearchListInputComponent from "../search-list-input/search-list-input-component";
import { SingleValueType } from "rc-cascader/lib/Cascader";
import { useEffect, useState } from "react";

type props = {
  filterWord: string;

  toggle: boolean;
  locationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keywordChange: (value: SingleValueType) => void;
};

function SearchFilterComponent({
  filterWord,
  toggle,
  locationChange,
  keywordChange,
}: props) {
  const [tags, setTags] = useState([{ tag_id: 0, tag: "" }]);

  useEffect(() => {
    async function getTags() {
      const response = await fetch("https://oddjob.herokuapp.com/tags");
      const data = await response.json();
      setTags(data.payload);
    }
    getTags();
  }, []);

  return (
    <SearchFilter>
      <FilterWordComponent filterWord={filterWord} />
      {toggle && <FilterInputComponent onChange={locationChange} />}
      {!toggle && (
        <SearchListInputComponent tags={tags} onChange={keywordChange} />
      )}
    </SearchFilter>
  );
}

export default SearchFilterComponent;
