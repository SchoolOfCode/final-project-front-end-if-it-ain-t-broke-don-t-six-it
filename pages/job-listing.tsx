import type { NextPage } from "next";
import JobListingPageComponent from "../components/job-listing-page/job-listing-component";
import NavBarComponent from "../components/navbar/navbar-component";

const JobListing: NextPage = () => {
  return (
    <div>
      <NavBarComponent isMenu={false} />
      <JobListingPageComponent />
    </div>
  );
};

export default JobListing;
