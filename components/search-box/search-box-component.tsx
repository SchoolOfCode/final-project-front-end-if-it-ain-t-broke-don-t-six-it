import LongButtonComponent from "../long-button/long-button-component";
import SearchFilterComponent from "../search-filter/search-filter-component";
import TextInputComponent from "../text-input/text-input-component";
import { SearchBox } from "./search-box-styled";

type Props = {
    onClick: ()=>void;
}

function SearchBoxComponent({onClick}: Props){
    return <SearchBox>
       <SearchFilterComponent filterWord = "Location:"/>
       <SearchFilterComponent filterWord = "Keywords:"/>
       <LongButtonComponent text="Search" onClick={onClick}/>
    </SearchBox>
}

export default SearchBoxComponent;