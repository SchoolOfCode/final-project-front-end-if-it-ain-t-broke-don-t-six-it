import ExtendedListingComponent from "../extended-listing/extended-listing-component";
import OptionSectionComponent from "../option-section/option-section-component";
import { JobListingPage } from "./job-listing-page-styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import JLPopUpComponent from "../jl-pop-up/jl-pop-up-component";
import ApplicantSectionComponent from "../applicant-section/applicant-section-component";

function JobListingPageComponent() {
  const [jobId, setJobId] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [toggleApply, setToggleApply] = useState(false);
  const [togglePU, setTogglePU] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  const posterId = router.query.userId;

  useEffect(() => {
    if (typeof router.query.jobId === "string") {
      setJobId(Number(router.query.jobId));
    } else {
      setToggle(!toggle);
    }
  }, [toggle]);

  useEffect(() => {
    async function postAppliedUser() {
      console.log(user?.sub);
      const response = await fetch(
        "https://oddjob.herokuapp.com/jobs/appliedUsers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: user?.sub, job_id: jobId }),
        }
      );
      const data = await response.json();
    }

    if (toggleApply) {
      postAppliedUser();
      setToggleApply(!toggleApply);
    }
  }, [toggleApply]);

  const applicants = [
    {
      name: "John Doe",
      userImage: "/user-icon.png",
      rating: 5,
      noOfReviews: 10,
    },
    {
      name: "Jane Doe",
      userImage: "/user-icon.png",
      rating: 4,
      noOfReviews: 15,
    },
    {
      name: "Steve Doe",
      userImage: "/user-icon.png",
      rating: 3,
      noOfReviews: 16,
    },
  ];

  return (
    <JobListingPage>
      <ExtendedListingComponent jobId={jobId} />
      {posterId !== "false" && (
        <ApplicantSectionComponent applicants={applicants} />
      )}
      {togglePU && (
        <JLPopUpComponent
          setToggle={setTogglePU}
          setApply={setToggleApply}
          apply={toggleApply}
        />
      )}
      {!togglePU && (
        <OptionSectionComponent
          position={posterId !== "false" ? false : true}
          longButtonText="Log In to Apply"
          firstShortButtonText="Contact"
          secondShortButtonText="Dashboard"
          posterId={posterId}
          applyClick={() => {
            setTogglePU(true);
          }}
        />
      )}
    </JobListingPage>
  );
}
export default JobListingPageComponent;
