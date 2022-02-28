import React from "react";
import FilterInputComponent from "../filter-input/filter-input-component";
import FilterWordComponent from "../filter-word/filter-word-component";
import { SearchFilter } from "./search-filter-styled";

type props = {
  filterWord: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchFilterComponent({ filterWord, onChange }: props) {
  return (
    <SearchFilter>
      <FilterWordComponent filterWord={filterWord} />
      <FilterInputComponent onChange={onChange} />
    </SearchFilter>
  );
}

export default SearchFilterComponent;
