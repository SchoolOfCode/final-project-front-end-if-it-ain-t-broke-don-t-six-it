import { SubHeader } from "./sub-header-styled";

type Props = {
  text: string;
};

function SubHeaderComponent({ text }: Props) {
  return <SubHeader>{text}</SubHeader>;
}

export default SubHeaderComponent;
