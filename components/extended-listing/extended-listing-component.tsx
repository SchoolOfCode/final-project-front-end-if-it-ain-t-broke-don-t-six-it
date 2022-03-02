import { title } from "process";
import FavouriteButtonComponent from "../favourite-button/favourite-button-component";
import ListingDescriptionComponent from "../listing-description/listing-description-component";
import ListingDnTComponent from "../listing-dnt/listing-dnt-component";
import ListingHeaderComponent from "../listing-header/listing-header-component";
import ListingLocationComponent from "../listing-location/listing-location-component";
import ListingPayComponent from "../listing-pay/listing-pay-component";
import TagsComponent from "../tags/tags-component";
import UserInfoComponent from "../user-info/user-info-component";
import { ExtendedListing } from "./extended-listing-styled";
import { useEffect, useState } from "react";
// type Props = {
//   rate_of_pay: string;
//   tags: { tag: string; tag_id: number }[];
//   description: string;
//   title: string;
//   location: string;
//   dateAndTime: string;
//   username: string;
//   bio: string;
//   rating: number;
//   numberOfReviews: number;
//   source: string;
// };

function ExtendedListingComponent(
  {
    // title,
    // rate_of_pay,
    // tags,
    // description,
    // location,
    // dateAndTime,
    // username,
    // bio,
    // source,
    // rating,
    // numberOfReviews,
  }
) {
  const [jobId, setJobId] = useState();
  const [jobListingData, setJobListingData] = useState({});

  useEffect(() => {
    async function getJobData() {
      const response = await fetch(
        `https://oddjob.herokuapp.com/jobs/${jobId}`
      );
      const data = await response.json();
      setJobListingData(data.payload);
    }
  }, []);

  return (
    <ExtendedListing>
      <ListingHeaderComponent text={title} />
      <FavouriteButtonComponent />
      <ListingLocationComponent text={location} />
      <ListingDnTComponent text={dateAndTime} />
      <ListingPayComponent text={rate_of_pay} />
      <ListingDescriptionComponent description={description} />
      <TagsComponent tags={tags} />
      <UserInfoComponent
        username={username}
        bio={bio}
        source={source}
        rating={rating}
        numberOfReviews={numberOfReviews}
      />
    </ExtendedListing>
  );
}

export default ExtendedListingComponent;
