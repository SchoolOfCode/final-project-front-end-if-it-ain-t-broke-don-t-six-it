import { BackgroundImage } from "../background-image/background-image-styled";
import SupportSectionComponent from "../support-section/support-section-component";
import { SupportPage } from "./support-page-styled";
function SupportPageComponent() {
  return (
    <SupportPage>
      <BackgroundImage src="./couple.jpeg" alt="Picture of something" />
      <SupportSectionComponent />
    </SupportPage>
  );
}

export default SupportPageComponent;
