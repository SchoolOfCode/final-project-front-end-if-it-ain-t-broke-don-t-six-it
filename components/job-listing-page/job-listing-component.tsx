import ExtendedListingComponent from "../extended-listing/extended-listing-component";
import LongButtonComponent from "../long-button/long-button-component";
import { OptionSection } from "../option-section/option-section-styled";
import SmallButtonComponent from "../small-button/small-button-component";
import { JobListingPage } from "./job-listing-page-styled";

function JobListingPageComponent() {
  return (
    <JobListingPage>
      <ExtendedListingComponent />
      <OptionSection>
        <LongButtonComponent text={"Apply"} onClick={() => {}} />
        <SmallButtonComponent text={"Back"} />
        <SmallButtonComponent text={"Dashboard"} />
      </OptionSection>
    </JobListingPage>
  );
}
export default JobListingPageComponent;
