import ExtendedListingComponent from "../extended-listing/extended-listing-component";
import { ListingHeader } from "../listing-header/listing-header-styled";
import { JobListingPage } from "./job-listing-page-styled";

function JobListingPageComponent() {
  return (
    <JobListingPage>
      <ExtendedListingComponent />
    </JobListingPage>
  );
}
