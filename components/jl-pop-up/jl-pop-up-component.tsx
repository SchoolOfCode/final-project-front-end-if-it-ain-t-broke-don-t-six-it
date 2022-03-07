import PopUpButtonComponent from "../pop-up-button/pop-up-button-component";
import PopUpTextComponent from "../pop-up-text/pop-up-text-component";
import { JLPopUp } from "./jl-pop-up-styled";

type Props = {
  setToggle: (state: boolean) => void;
  setApply: (state: boolean) => void;
  apply: boolean;
};

function JLPopUpComponent({ setToggle, setApply, apply }: Props) {
  return (
    <JLPopUp>
      <div className="center">
        <PopUpTextComponent text="Are you sure you want to apply for this job?" />
      </div>
      <PopUpButtonComponent
        text="Cancel"
        onClick={() => {
          setToggle(false);
        }}
      />
      <PopUpButtonComponent
        text="Apply"
        onClick={() => {
          setToggle(false);
          setApply(!apply);
        }}
      />
    </JLPopUp>
  );
}

export default JLPopUpComponent;
