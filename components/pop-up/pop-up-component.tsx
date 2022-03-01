import PopUpButtonComponent from "../pop-up-button/pop-up-button-component";
import PopUpTextComponent from "../pop-up-text/pop-up-text-component";
import { PopUp } from "./pop-up-styled";

type Props = {
  onClick: () => void;
};

function PopUpComponent({ onClick }: Props) {
  return (
    <PopUp>
      <PopUpTextComponent text="Job successfully posted" />
      <div>
        <PopUpButtonComponent text="New Post" onClick={onClick} />
        <PopUpButtonComponent text="View Job" onClick={onClick} />
      </div>
    </PopUp>
  );
}

export default PopUpComponent;
