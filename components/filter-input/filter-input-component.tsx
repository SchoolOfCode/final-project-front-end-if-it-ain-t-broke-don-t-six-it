import { FilterInput } from "./filter-input-styled";
type Props = {
<<<<<<< Updated upstream
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
};
function FilterInputComponent({ onChange }: Props) {
  return <FilterInput onChange={onChange} />;
=======
  onChange: (e: any) => void;
};
function FilterInputComponent({ onChange }: Props) {
  return <FilterInput onChange={(e) => onChange(e.target.value)} />;
>>>>>>> Stashed changes
}
export default FilterInputComponent;
