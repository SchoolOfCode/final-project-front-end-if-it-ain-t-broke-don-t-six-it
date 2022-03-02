import React from "react";
import FilterInputComponent from "../filter-input/filter-input-component";
import FilterWordComponent from "../filter-word/filter-word-component";
import { SearchFilter } from "./search-filter-styled";
import SearchListInputComponent from "../search-list-input/search-list-input-component";
import { SingleValueType } from "rc-cascader/lib/Cascader";

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
  return (
    <SearchFilter>
      <FilterWordComponent filterWord={filterWord} />
      {toggle && <FilterInputComponent onChange={locationChange} />}
      {toggle && <SearchListInputComponent onChange={keywordChange} />}
    </SearchFilter>
  );
}

export default SearchFilterComponent;
