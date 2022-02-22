import SearchFilterComponent from "../search-filter/search-filter-component";
import TextInputComponent from "../text-input/text-input-component";
import { SearchBox } from "./search-box-styled";

function SearchBoxComponent(){
    return <SearchBox>
       <SearchFilterComponent/>
       <SearchFilterComponent/>

    </SearchBox>
}

export default SearchBoxComponent;