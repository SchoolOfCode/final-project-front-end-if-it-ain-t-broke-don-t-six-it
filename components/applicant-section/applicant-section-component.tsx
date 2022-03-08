import { ApplicantSection } from "./applicant-section-styled";
import ApplicantComponent from "../applicant/applicant-component";
type Props = {
  applicants: {
    name: string;
    userImage: string;
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
