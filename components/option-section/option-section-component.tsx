import { LongButton } from "../long-button/long-button-styled";
import { SmallButton } from "../small-button/small-button-styled";
import { OptionSection } from "./option-section-styled";

function OptionSectionComponent() {
  return (
    <OptionSection>
      <LongButton />
      <SmallButton />
      <SmallButton />
    </OptionSection>
  );
}

export default OptionSectionComponent;
