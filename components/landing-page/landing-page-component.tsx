import AboutBoxComponent from "../about-box/about-box-component";
import SearchBoxComponent from "../search-box/search-box-component";
import { LandingPage, AboutSection } from "./landing-page-styled";
import SliderComponent from "../slider/slider-component";
import ListingBoxComponent from "../listing-box/listing-box-component";
import PageHeaderComponent from "../page-header/page-header-component";

function LandingPageComponent() {
  return (
    <LandingPage>
      <SliderComponent />
      <SearchBoxComponent />
      <div className="listing-container">
        <PageHeaderComponent text="Latest Jobs" />
        <ListingBoxComponent
          title="English Tutor"
          source="/user-icon.png"
          address="Oldham, London"
          date="25/03/2022 10:00"
          pay="50 Full Pay"
          job_id={0}
        />
        <ListingBoxComponent
          title="Dog Walking"
          source="/user-icon.png"
          address="Trent, Nottingham"
          date="24/03/2022 13:00"
          pay="10 Per Hour"
          job_id={1}
        />
        <ListingBoxComponent
          title="House Sitting"
          source="/user-icon.png"
          address="Loughborough, Leicstershire"
          date="25/03/2022 16:00"
          pay="50 Full Pay"
          job_id={2}
        />
      </div>
    </LandingPage>
  );
}
export default LandingPageComponent;
