import { ApplicantSection } from "./applicant-section-styled";

type Props = {
  applicants: {
    name: string;
    userimage: string;
    rating: number;
    noOfReviews: number;
  }[];
};

function ApplicantSectionComponent({ applicants }: Props) {
  return (
    <ApplicantSection>
      {applicants.map((applicant, index) => {
        return <ApplicantComponent key={index} applicant={applicant} />;
      })}
    </ApplicantSection>
  );
}

export default ApplicantSectionComponent;
