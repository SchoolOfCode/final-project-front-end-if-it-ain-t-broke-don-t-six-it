import PopUpButtonComponent from "../pop-up-button/pop-up-button-component";
import PopUpTextComponent from "../pop-up-text/pop-up-text-component";
import { PopUp } from "./pop-up-styled";

type Props = {
  onClick: () => void;
  isPosted: boolean;
};

function PopUpComponent({ onClick, isPosted }: Props) {
  return (
    <PopUp>
      {isPosted && (
        <div>
          <PopUpTextComponent text="Job successfully posted" />
          <div>
            <PopUpButtonComponent text="New Post" onClick={onClick} />
            <PopUpButtonComponent text="View Job" onClick={onClick} />
          </div>
        </div>
      )}
      {!isPosted && (
        <div>
          <PopUpTextComponent text="Job unsuccessfully posted, please try again" />
        </div>
      )}
    </PopUp>
  );
}

export default PopUpComponent;
