import ApplicantButtonsComponent from "../applicant-buttons/applicant-buttons-component";
import RatingComponent from "../rating/rating-component";
import UserImageComponent from "../user-image/user-image-component";
import UsernameComponent from "../username/username-component";
import { Applicant } from "./applicant-styled";
import { useState } from "react";
import AcceptanceConfirmationComponent from "../acceptance-confirmation/acceptance-confirmation-component";

type Props = {
  applicant: {
    name: string;
    userImage: string;
    rating: number;
    noOfReviews: number;
  };
};

function ApplicantComponent({ applicant }: Props) {
  const [accept, setAccept] = useState(false);
  const [reject, setReject] = useState(false);

  return (
    <>
      <Applicant>
        <UserImageComponent
          source={applicant.userImage}
          username={applicant.name}
        />
        <UsernameComponent username={applicant.name} />
        <RatingComponent
          rating={applicant.rating}
          totalReviews={applicant.noOfReviews}
        />

        <ApplicantButtonsComponent
          setAccept={setAccept}
          setReject={setReject}
          accept={accept}
          reject={reject}
        />
      </Applicant>
      {accept && (
        <AcceptanceConfirmationComponent
          name={applicant.name}
          accept={accept}
          onClick={() => {
            setAccept(false);
          }}
        />
      )}
      {reject && (
        <AcceptanceConfirmationComponent
          name={applicant.name}
          accept={accept}
          onClick={() => {
            setReject(false);
          }}
        />
      )}
    </>
  );
}
export default ApplicantComponent;
