import { FilterInput } from "./filter-input-styled";
type Props = {
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
};
function FilterInputComponent({ onChange }: Props) {
  return <FilterInput onChange={onChange} />;

  //   onChange: (e: any) => void;
  // };
  // function FilterInputComponent({ onChange }: Props) {
  //   return <FilterInput onChange={(e) => onChange(e.target.value)} />;
}
export default FilterInputComponent;
