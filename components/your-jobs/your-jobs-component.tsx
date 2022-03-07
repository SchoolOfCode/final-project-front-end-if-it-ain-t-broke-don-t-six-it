import JobsSliderComponent from "../jobs-slider/jobs-slider-component";
import { YourJobs } from "./your-jobs-styled";
import { useState } from "react";

import JobsListingContainerComponent from "../jobs-listing-container/jobs-listing-container-component";

function YourJobsComponent() {
  const [focusOn, setfocusOn] = useState("Upcoming");
  const [upcomingJobs, setUpcomingJobs] = useState();
  const [pendingJobs, setPendingJobs] = useState();
  const [postedJobs, setPostedJobs] = useState();

  return (
    <YourJobs>
      <JobsSliderComponent
        onClick={(e) => {
          setfocusOn(e.target.innerText);
        }}
        focusOn={focusOn}
      />
      {focusOn === "Upcoming" && (
        <JobsListingContainerComponent listOfJobs={upcomingJobs} />
      )}
      {focusOn === "Pending" && (
        <JobsListingContainerComponent listOfJobs={pendingJobs} />
      )}
      {focusOn === "Posted" && (
        <JobsListingContainerComponent listOfJobs={postedJobs} />
      )}
    </YourJobs>
  );
}

export default YourJobsComponent;
