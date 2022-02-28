import FiltersButtonComponent from "../filters-button/filters-button-component";
import LongButtonComponent from "../long-button/long-button-component";
import LongSearchButtonComponent from "../long-search-button/long-search-button-component";
import SearchFilterComponent from "../search-filter/search-filter-component";
import { SearchPageBox } from "./search-page-box-styled";

type Props = {
  onClick: () => void;
};

function SearchPageBoxComponent({ onClick }: Props) {
  function onChange(e: any) {
    console.log("entered word", e.target.value);
  }

  return (
    <SearchPageBox>
      <SearchFilterComponent
        filterWord="Location:"
        onChange={(e) => onChange(e)}
      />
      <SearchFilterComponent
        filterWord="Keywords:"
        onChange={(e) => onChange(e)}
      />
      <LongSearchButtonComponent onClick={onClick} />
      <FiltersButtonComponent />
    </SearchPageBox>
  );
}

export default SearchPageBoxComponent;
