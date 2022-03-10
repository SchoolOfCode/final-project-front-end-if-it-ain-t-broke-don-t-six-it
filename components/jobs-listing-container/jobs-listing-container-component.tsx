import { JobsListingContainer } from "./jobs-listing-container-styled";
import ListingBoxComponent from "../listing-box/listing-box-component";
import ErrorBoxComponent from "../error-box/error-box-component";

type Props = {
  listOfJobs:
    | {
        accepted_user_id: null;
        date: string;
        description: string;
        rate_of_pay: string;
        requirement: string;
        status: string;
        title: string;
        user_id: string | null | undefined;
        user_image: string | null | undefined;
        user_name: string | null | undefined;
        user_rating: string;
        number: number | null;
        name: string;
        street: string;
        city: string;
        county: string;
        postcode: string;
        tags: (string | number | null | undefined)[];
        timestamp: string;
        job_id: number;
      }[]
    | undefined;
};

function JobsListingContainerComponent({ listOfJobs }: Props) {
  console.log(listOfJobs);
  return (
    <JobsListingContainer>
      {listOfJobs?.map(
        ({
          job_id,
          title,
          user_image,
          date,
          rate_of_pay,
          city,
          county,
          user_id,
        }) => {
          return (
            <ListingBoxComponent
              key={job_id}
              job_id={job_id}
              title={title}
              source={user_image}
              address={`${city}, ${county}`}
              date={`${date.substring(0, 10)} ${date.substring(11, 16)}`}
              pay={rate_of_pay}
              user_id={user_id}
            />
          );
        }
      )}
      {listOfJobs === undefined ||
        (listOfJobs?.length === 0 && (
          <ErrorBoxComponent text="No jobs found" />
        ))}
    </JobsListingContainer>
  );
}

export default JobsListingContainerComponent;
