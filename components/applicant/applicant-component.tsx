import RatingComponent from "../rating/rating-component";
import UserImageComponent from "../user-image/user-image-component";
import UsernameComponent from "../username/username-component";
import { Username } from "../username/username-styled";
import { Applicant } from "./applicant-styled";

type Props = {
  applicant: {
    name: string;
    userimage: string;
    rating: number;
    noOfReviews: number;
  };
};

function ApplicantComponent({ applicant }: Props) {
  return (
    <Applicant>
      <UserImageComponent
        source={applicant.userimage}
        username={applicant.name}
      />
      <UsernameComponent username={applicant.name} />
      <RatingComponent
        rating={applicant.rating}
        totalReviews={applicant.noOfReviews}
      />
    </Applicant>
  );
}
export default ApplicantComponent;
