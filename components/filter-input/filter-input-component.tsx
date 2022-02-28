import { FilterInput } from "./filter-input-styled";
type Props = {
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
};
function FilterInputComponent({ onChange }: Props) {
  return <FilterInput onChange={onChange} />;
}
export default FilterInputComponent;
