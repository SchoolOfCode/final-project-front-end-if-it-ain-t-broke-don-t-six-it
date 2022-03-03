import LongButtonComponent from "../long-button/long-button-component";
import ShortButtonComponent from "../short-button/short-button-component";
import { OptionSection } from "./option-section-styled";

type Props = {
  applyClick: () => void;
};

function OptionSectionComponent({ applyClick }: Props) {
  return (
    <OptionSection>
      <div className="flex-container">
        <LongButtonComponent text="Apply" onClick={applyClick} />
        <div className="short-buttons">
          <ShortButtonComponent
            text="Back"
            onClick={() => {
              console.log("Back");
            }}
          />
          <ShortButtonComponent
            text="Dashboard"
            onClick={() => {
              console.log("Dashboard");
            }}
          />
        </div>
      </div>
    </OptionSection>
  );
}

export default OptionSectionComponent;
