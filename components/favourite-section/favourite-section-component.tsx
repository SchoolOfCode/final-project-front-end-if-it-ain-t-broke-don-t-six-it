import { useEffect, useState } from "react";
import JobsListingContainerComponent from "../jobs-listing-container/jobs-listing-container-component";
import { FavouriteSection } from "./favourite-section-styled";
import { useUser } from "@auth0/nextjs-auth0";
import SubHeaderComponent from "../sub-header/sub-header-component";

function FavouriteSectionComponent() {
  const [favouriteJobs, setFavouriteJobs] = useState();
  const [favouriteUpdate, setFavouriteUpdate] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    async function getAllFavouriteJobs() {
      const response = await fetch(
        `https://oddjob.herokuapp.com/jobs/favourites/${user?.sub}`
      );
      const data = await response.json();
      console.log(data);
      setFavouriteJobs(data.payload);
    }
    getAllFavouriteJobs();
  }, [favouriteUpdate]);

  return (
    <FavouriteSection id="favouriteJobs">
      <SubHeaderComponent text="Favourited" />
      <JobsListingContainerComponent
        favouriteUpdate={favouriteUpdate}
        setFavouriteUpdate={(state: boolean) => {
          setFavouriteUpdate(!state);
        }}
        listOfJobs={favouriteJobs}
      />
    </FavouriteSection>
  );
}

export default FavouriteSectionComponent;
