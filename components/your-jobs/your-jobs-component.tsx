import JobsSliderComponent from "../jobs-slider/jobs-slider-component";
import { YourJobs } from "./your-jobs-styled";
import { useEffect, useState } from "react";
import JobsListingContainerComponent from "../jobs-listing-container/jobs-listing-container-component";
import { useUser } from "@auth0/nextjs-auth0";

function YourJobsComponent() {
  const [focusOn, setfocusOn] = useState("Upcoming");
  const [upcomingJobs, setUpcomingJobs] = useState();
  const [pendingJobs, setPendingJobs] = useState();
  const [postedJobs, setPostedJobs] = useState();
  const { user } = useUser();

  useEffect(() => {
    const url = "https://oddjob.herokuapp.com/jobs";
    async function getUpcomingJobs() {
      const response = await fetch(`${url}/upcoming/${user?.sub}`);
      const data = await response.json();
      return data.payload;
    }
    async function getPendingJobs() {
      const response = await fetch(`${url}/pending/${user?.sub}`);
      const data = await response.json();
      return data.payload;
    }
    async function getPostedJobs() {
      const response = await fetch(`${url}/posted/${user?.sub}`);
      const data = await response.json();
      return data.payload;
    }
    if (focusOn === "Upcoming") {
      const jobs = await getUpcomingJobs();
      setUpcomingJobs(jobs);
    }
    if (focusOn === "Pending") {
      const jobs = await getPendingJobs();
      setPendingJobs(jobs);
    }
    if (focusOn === "Posted") {
      const jobs = await getPostedJobs();
      setPostedJobs(jobs);
    }
  }, [focusOn]);

  return (
    <YourJobs id="yourJobs">
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
