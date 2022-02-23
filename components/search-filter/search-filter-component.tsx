import FilterInputComponent from "../filter-input/filter-input-component";
import FilterWordComponent from "../filter-word/filter-word-component";
import { SearchFilter } from "./search-filter-styled";
type props = {
    filterWord:String
}
function SearchFilterComponent({filterWord}:props){
    return <SearchFilter>
        <FilterWordComponent filterWord = {filterWord}/>
        <FilterInputComponent/>
    </SearchFilter>
}
export default SearchFilterComponent;