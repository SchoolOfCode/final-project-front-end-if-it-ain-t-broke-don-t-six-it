import ErrorTextComponent from "../error-text/error-text-component";
import { ErrorBox } from "./error-box-styled";

type Props = {
  text: string;
};

function ErrorBoxComponent({ text }: Props) {
  return (
    <ErrorBox>
      <ErrorTextComponent text={text} />
    </ErrorBox>
  );
}
export default ErrorBoxComponent;
