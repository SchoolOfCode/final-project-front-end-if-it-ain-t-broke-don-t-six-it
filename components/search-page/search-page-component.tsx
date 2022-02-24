import { log } from "console";
import BackgroundImageComponent from "../background-image/background-image-component";
import ListingBoxComponent from "../listing-box/listing-box-component";
import PageHeaderComponent from "../page-header/page-header-component";
import SearchBoxComponent from "../search-box/search-box-component";
import SearchPageBoxComponent from "../search-page-box/search-page-box-component";
import { SearchPage } from "./search-page-styled";
import { useEffect, useState } from "react";

function SearchPageComponent() {
  const [toggleFetch, setToggleFetch] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const response = await fetch("https://oddjob.herokuapp.com/jobs");
      const data = await response.json();
      setJobs(data.payload);
    }
    getJobs();
    console.log("jobs", jobs);
  }, [toggleFetch]);

  return (
    <SearchPage>
      <BackgroundImageComponent source="/gardening.jpeg" alt="gardening" />
      <PageHeaderComponent text="Search For Jobs" />
      <SearchPageBoxComponent onClick={() => setToggleFetch(!toggleFetch)} />
      {jobs.map(({ job_id, title, user_image, date, rate_of_pay }) => {
        return (
          <ListingBoxComponent
            key={job_id}
            title={title}
            source="/user-icon.png"
            address="Leamington Spa, Warwickshire"
            date={date}
            pay={rate_of_pay}
          />
        );
      })}
    </SearchPage>
  );
}

export default SearchPageComponent;
