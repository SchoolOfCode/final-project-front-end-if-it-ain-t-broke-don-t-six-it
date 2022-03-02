import { Bio } from "./bio-styled";
type Props = {
  text: string | undefined;
};
function BioComponent({ text }: Props) {
  return <Bio>{text}</Bio>;
}
export default BioComponent;
