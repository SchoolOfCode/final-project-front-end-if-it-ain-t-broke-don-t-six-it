import LongButtonComponent from "../long-button/long-button-component";
import SearchFilterComponent from "../search-filter/search-filter-component";
import TextInputComponent from "../text-input/text-input-component";
import { SearchBox } from "./search-box-styled";

function SearchBoxComponent(){
    return <SearchBox>
       <SearchFilterComponent filterWord = "Location:"/>
       <SearchFilterComponent filterWord = "Keywords:"/>
       <LongButtonComponent text = "Search"/>

    </SearchBox>
}

export default SearchBoxComponent;