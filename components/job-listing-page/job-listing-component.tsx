import ExtendedListingComponent from "../extended-listing/extended-listing-component";
import LongButtonComponent from "../long-button/long-button-component";
import { OptionSection } from "../option-section/option-section-styled";
import SmallButtonComponent from "../small-button/small-button-component";
import { JobListingPage } from "./job-listing-page-styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function JobListingPageComponent() {
  const [jobId, setJobId] = useState();
  const [toggle, setToggle] = useState(false);
  const [toggleApply, setToggleApply] = useState(false);
  const router = useRouter();
  console.log(router.query.jobId);
  useEffect(() => {
    if (router.query.jobId) {
      setJobId(router.query.jobId);
    } else {
      setToggle(!toggle);
    }
  }, [toggle]);

  useEffect(() => {
    async function postAppliedUser() {
      const response = await fetch(
        "https://oddjob.herokuapp.com/jobs/appliedUsers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: { use_id: 1, job_id: jobId },
        }
      );
    }

    if (toggleApply) {
    }
  }, [toggleApply]);

  return (
    <JobListingPage>
      <ExtendedListingComponent jobId={jobId} />
      <OptionSection>
        <LongButtonComponent
          text={"Apply"}
          onClick={() => {
            setToggleApply(!toggleApply);
          }}
        />
        <SmallButtonComponent text={"Back"} />
        <SmallButtonComponent text={"Dashboard"} />
      </OptionSection>
    </JobListingPage>
  );
}
export default JobListingPageComponent;
