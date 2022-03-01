import ExtendedListingComponent from "../extended-listing/extended-listing-component";
import { OptionSection } from "../option-section/option-section-styled";
import { JobListingPage } from "./job-listing-page-styled";

function JobListingPageComponent() {
  return (
    <JobListingPage>
      <ExtendedListingComponent
        title={}
        rate_of_pay={}
        tags={}
        description={}
        location={}
        dateAndTime={}
        username={}
        bio={}
        source={}
        rating={}
        numberOfReviews={}
      />
      <OptionSection />
    </JobListingPage>
  );
}
