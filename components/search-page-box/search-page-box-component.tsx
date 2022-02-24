import FiltersButtonComponent from "../filters-button/filters-button-component";
import LongButtonComponent from "../long-button/long-button-component";
import LongSearchButtonComponent from "../long-search-button/long-search-button-component";
import SearchFilterComponent from "../search-filter/search-filter-component";
import { SearchPageBox } from "./search-page-box-styled";

function SearchPageBoxComponent(){

function onClick(){
    console.log("Search")
}

    return (
        <SearchPageBox>
            <SearchFilterComponent filterWord="Location:"/>
            <SearchFilterComponent filterWord="Keywords:"/>
            <LongSearchButtonComponent/>
            <FiltersButtonComponent />
        </SearchPageBox>
    )
}

export default SearchPageBoxComponent