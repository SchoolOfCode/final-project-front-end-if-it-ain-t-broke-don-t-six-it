import { useEffect, useState } from "react";
import JobsListingContainerComponent from "../jobs-listing-container/jobs-listing-container-component";
import PageHeaderComponent from "../page-header/page-header-component";
import { FavouriteSection } from "./favourite-section-styled";

function FavouriteSectionComponent() {
  const [favouriteJobs, setFavouriteJobs] = useState();
  useEffect(() => {}, []);
  return (
    <FavouriteSection id="favouriteJobs">
      <PageHeaderComponent text="Favourited" />
      <JobsListingContainerComponent listOfJobs={favouriteJobs} />
    </FavouriteSection>
  );
}

export default FavouriteSectionComponent;
