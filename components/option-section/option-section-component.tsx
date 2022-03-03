import LongButtonComponent from "../long-button/long-button-component";
import ShortButtonComponent from "../short-button/short-button-component";
import { OptionSection } from "./option-section-styled";

function OptionSectionComponent() {
  return (
    <OptionSection>
      <div className="flex-container">
        <LongButtonComponent
          text="Apply"
          onClick={() => {
            console.log("Apply");
          }}
        />
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
