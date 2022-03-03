import ExtendedListingComponent from "../extended-listing/extended-listing-component";
import LongButtonComponent from "../long-button/long-button-component";
import { OptionSection } from "../option-section/option-section-styled";
import SmallButtonComponent from "../small-button/small-button-component";
import { JobListingPage } from "./job-listing-page-styled";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

function JobListingPageComponent() {
  const [jobId, setJobId] = useState();
  const [toggle, setToggle] = useState(false);
  const [toggleApply, setToggleApply] = useState(false);
  const router = useRouter();
  const {user} = useUser();
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
      console.log(data);
    }

    if (toggleApply) {
      postAppliedUser();
      setToggleApply(!toggleApply);
    }
  }, [toggleApply]);

  return (
    <JobListingPage>
      <ExtendedListingComponent jobId={jobId} />
      <OptionSection>
        <LongButtonComponent
          text={"Apply"}
          onClick={() => {
            if(user?.sub){
              setToggleApply(!toggleApply);
            }else{
              alert("Must be logged in to apply");
            }
            
          }}
        />
        <SmallButtonComponent text={"Back"} />
        <SmallButtonComponent text={"Dashboard"} />
      </OptionSection>
    </JobListingPage>
  );
}
export default JobListingPageComponent;
