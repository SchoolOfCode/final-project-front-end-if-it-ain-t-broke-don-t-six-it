import { FilterInput } from "./filter-input-styled";
type Props = { 
    onChange: (e)=>void;
}
function FilterInputComponent({ onChange }:Props){
    return <FilterInput onChange={(e)=>onChange(e.target.value)}/>

}
export default FilterInputComponent;