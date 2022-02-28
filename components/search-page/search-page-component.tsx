import { log } from "console";
import BackgroundImageComponent from "../background-image/background-image-component";
import ListingBoxComponent from "../listing-box/listing-box-component";
import PageHeaderComponent from "../page-header/page-header-component";
import SearchPageBoxComponent from "../search-page-box/search-page-box-component";
import { SearchPage } from "./search-page-styled";
import { useEffect, useState } from "react";
import ShowMoreButtonComponent from "../show-more-button/show-more-button-component";

function SearchPageComponent() {
  const [toggleFetch, setToggleFetch] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    async function getJobs() {
      const response = await fetch(
        `https://oddjob.herokuapp.com/jobs?offSet=${offSet}`
      );
      const data = await response.json();
      setJobs([...jobs, ...data.payload]);
    }
    getJobs();
    console.log("jobs", jobs);
  }, [toggleFetch, offSet]);

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
      <ShowMoreButtonComponent onClick={() => setOffSet(offSet + 5)} />
    </SearchPage>
  );
}

export default SearchPageComponent;
