import FilterInputComponent from "../filter-input/filter-input-component";
import FilterWordComponent from "../filter-word/filter-word-component";
import { SearchFilter } from "./search-filter-styled";

function SearchFilterComponent(){
    return <SearchFilter>
        <FilterWordComponent/>
        <FilterInputComponent/>
    </SearchFilter>
}
export default SearchFilterComponent;