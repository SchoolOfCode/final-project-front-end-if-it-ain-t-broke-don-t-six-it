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

type Payload = {
  jobTagsData: { job_id: number; tag_id: number; tag: string }[];
  jobListingData: {
    job_id: number;
    title: string;
    date: string;
    rate_of_pay: string;
    description: string;
    requirement: string;
    user_id: string;
    accepted_user_id: string;
    status: string;
    user_image: string;
    user_name: string;
    user_rating: number;
    timestamp: string;
    city: string;
    county: string;
    name: string;
    number: number;
    postcode: string;
    street: string;
  }[];
};

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
  const [jobId, setJobId] = useState(2);
  const [jobListingData, setJobListingData] = useState<Payload>();

  useEffect(() => {
    async function getJobData() {
      console.log("hello");

      const response = await fetch(
        `https://oddjob.herokuapp.com/jobs/job/${jobId}`
      );
      const data = await response.json();
      setJobListingData(data.payload);
    }
    console.log("hello");
    getJobData();
  }, []);

  return (
    <ExtendedListing>
      <ListingHeaderComponent text={jobListingData?.jobListingData[0].title} />
      <FavouriteButtonComponent />
      <ListingLocationComponent text={jobListingData?.jobListingData[0].city} />
      <ListingDnTComponent
        text={`${jobListingData?.jobListingData[0].date.substring(
          0,
          10
        )} ${jobListingData?.jobListingData[0].date.substring(11, 16)}`}
      />
      <ListingPayComponent
        text={jobListingData?.jobListingData[0].rate_of_pay}
      />
      <ListingDescriptionComponent
        description={jobListingData?.jobListingData[0].description}
      />
      <TagsComponent tags={jobListingData?.jobTagsData} />

      <UserInfoComponent
        username={jobListingData?.jobListingData[0].user_name}
        bio={"I'm great!"}
        source={jobListingData?.jobListingData[0].user_image}
        rating={5}
        numberOfReviews={100}
      />
    </ExtendedListing>
  );
}

export default ExtendedListingComponent;
