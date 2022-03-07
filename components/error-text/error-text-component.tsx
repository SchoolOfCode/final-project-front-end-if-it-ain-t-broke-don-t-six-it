import { ErrorText } from "./error-text-styled";

type Props = { 
    text: string;
}

function ErrorTextComponent({text}:Props) {
  return <ErrorText>{text}</ErrorText>;
}

export default ErrorTextComponent;
