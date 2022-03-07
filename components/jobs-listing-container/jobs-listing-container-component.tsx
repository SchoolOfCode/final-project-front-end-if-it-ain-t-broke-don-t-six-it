import { JobsListingContainer } from "./jobs-listing-container-styled";
import ListingBoxComponent from "../listing-box/listing-box-component";

type Props = {
  listOfJobs: {
    title: string;
    user_image: string;
    city: string;
    county: string;
    date: string;
    rate_of_pay: string;
    job_id: number;
  }[];
};

function JobsListingContainerComponent({ listOfJobs }: Props) {
  return (
    <JobsListingContainer>
      {listOfJobs.map(
        ({ job_id, title, user_image, date, rate_of_pay, city, county }) => {
          return (
            <ListingBoxComponent
              key={job_id}
              job_id={job_id}
              title={title}
              source={user_image}
              address={`${city}, ${county}`}
              date={`${date.substring(0, 10)} ${date.substring(11, 16)}`}
              pay={rate_of_pay}
            />
          );
        }
      )}
    </JobsListingContainer>
  );
}

export default JobsListingContainerComponent;
