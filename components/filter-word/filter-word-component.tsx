import { FilterWord } from "./filter-word-styled";
type props = {
    filterWord:String
}
function FilterWordComponent({filterWord}:props){
    return <FilterWord>
        {filterWord}
    </FilterWord>
}
export default FilterWordComponent;