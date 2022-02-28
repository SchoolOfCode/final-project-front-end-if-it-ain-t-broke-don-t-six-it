import React from "react";
import FilterInputComponent from "../filter-input/filter-input-component";
import FilterWordComponent from "../filter-word/filter-word-component";
import { SearchFilter } from "./search-filter-styled";

type props = {
<<<<<<< Updated upstream
  filterWord: string;
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
=======
  filterWord: String;
  onChange: (e: any) => void;
>>>>>>> Stashed changes
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
