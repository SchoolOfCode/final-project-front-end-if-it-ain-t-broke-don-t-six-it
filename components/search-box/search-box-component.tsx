import TextInputComponent from "../text-input/text-input-component";
import { SearchBox } from "./search-box-styled";
import FieldComponent from "../field/field-component";

function SearchBoxComponent(){
    return <SearchBox>
        <FieldComponent name="Location:"/>
        <FieldComponent name="Keywords:"/>
    </SearchBox>
}

export default SearchBoxComponent;