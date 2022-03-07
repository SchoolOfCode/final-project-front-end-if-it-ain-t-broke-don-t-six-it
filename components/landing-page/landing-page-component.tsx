import AboutBoxComponent from "../about-box/about-box-component";
import SearchBoxComponent from "../search-box/search-box-component";
import { LandingPage, AboutSection } from "./landing-page-styled";
import SliderComponent from "../slider/slider-component";

function LandingPageComponent() {
  return (
    <LandingPage>
      <SliderComponent />
      <SearchBoxComponent />

      <AboutSection>
        <AboutBoxComponent
          title="Find Work in Minutes"
          description="With OddJob work is a hats throw away😉. "
        />
        <AboutBoxComponent
          title="Info"
          description="OddJob allows users to find work that works for them and their schedule."
        />
        <AboutBoxComponent
          title="Info"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce purus sapien, tincidunt sed semper sed, vestibulum ac eros."
        />
      </AboutSection>
    </LandingPage>
  );
}
export default LandingPageComponent;
