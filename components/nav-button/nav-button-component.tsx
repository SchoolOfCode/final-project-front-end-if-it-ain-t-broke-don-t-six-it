import { NavButton } from "./nav-button-styled";

type Props = {
  text: string;
};

function NavButtonComponent({ text }: Props) {
  return <NavButton>{text}</NavButton>;
}

export default NavButtonComponent;
