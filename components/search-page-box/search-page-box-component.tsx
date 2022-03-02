import FiltersButtonComponent from "../filters-button/filters-button-component";
import LongSearchButtonComponent from "../long-search-button/long-search-button-component";
import SearchFilterComponent from "../search-filter/search-filter-component";
import { SearchPageBox } from "./search-page-box-styled";
import { SingleValueType } from "rc-cascader/lib/Cascader";

type Props = {
  onClick: () => void;
  locationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keywordChange: (value: SingleValueType) => void;
};

function SearchPageBoxComponent({
  onClick,
  locationChange,
  keywordChange,
}: Props) {
  return (
    <SearchPageBox>
      <SearchFilterComponent
        toggle={true}
        filterWord="Location:"
        locationChange={locationChange}
        keywordChange={keywordChange}
      />
      <SearchFilterComponent
        toggle={false}
        filterWord="Keywords:"
        locationChange={locationChange}
        keywordChange={keywordChange}
      />
      <LongSearchButtonComponent onClick={onClick} />
      <FiltersButtonComponent />
    </SearchPageBox>
  );
}

export default SearchPageBoxComponent;
