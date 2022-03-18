import JobsSliderComponent from "../jobs-slider/jobs-slider-component";
import { YourJobs } from "./your-jobs-styled";
import { useEffect, useState } from "react";
import JobsListingContainerComponent from "../jobs-listing-container/jobs-listing-container-component";
import { useUser } from "@auth0/nextjs-auth0";

type Payload = {
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
}[];
function YourJobsComponent() {
  const [focusOn, setfocusOn] = useState("Upcoming");
  const [upcomingJobs, setUpcomingJobs] = useState([]);
  const [pendingJobs, setPendingJobs] = useState();
  const [postedJobs, setPostedJobs] = useState<Payload>();
  const { user } = useUser();

  useEffect(() => {
    const url = "https://oddjob.herokuapp.com/jobs";
    async function getUpcomingJobs() {
      const response = await fetch(`${url}/upcoming/${user?.sub}`);
      const data = await response.json();
      console.log(data);
      setUpcomingJobs([]);
    }
    async function getPendingJobs() {
      const response = await fetch(`${url}/pending/${user?.sub}`);
      const data = await response.json();
      setPendingJobs(data.payload);
    }
    async function getPostedJobs() {
      const response = await fetch(`${url}/posted/${user?.sub}`);
      const data = await response.json();
      setPostedJobs(data.payload);
    }
    if (focusOn === "Upcoming") {
      getUpcomingJobs();
    }
    if (focusOn === "Pending") {
      getPendingJobs();
    }
    if (focusOn === "Posted") {
      getPostedJobs();
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

      {/* Resolving the type error is missing the following properties from type 'Props': favouriteUpdate, setFavouriteUpdate */}

      {focusOn === "Upcoming" && (
        <JobsListingContainerComponent
          listOfJobs={upcomingJobs}
          favouriteUpdate={false}
          setFavouriteUpdate={(state: boolean) => {
            return;
          }}
        />
      )}
      {focusOn === "Pending" && (
        <JobsListingContainerComponent
          listOfJobs={pendingJobs}
          favouriteUpdate={false}
          setFavouriteUpdate={(state: boolean) => {
            return;
          }}
        />
      )}
      {focusOn === "Posted" && (
        <JobsListingContainerComponent
          listOfJobs={postedJobs}
          favouriteUpdate={false}
          setFavouriteUpdate={(state: boolean) => {
            return;
          }}
        />
      )}
    </YourJobs>
  );
}

export default YourJobsComponent;
