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
  const [location, setLocation] = useState("");
  const [word, setWord] = useState<string | number>("");

  useEffect(() => {
    let url: string;
    if (location === undefined && word === undefined) {
      url = `https://oddjob.herokuapp.com/jobs`;
    } else if (location === undefined) {
      url = `https://oddjob.herokuapp.com/jobs/?keyword=${word}&offSet=${offSet}`;
    } else if (word === undefined) {
      url = `https://oddjob.herokuapp.com/jobs/${location}?offSet=${offSet}`;
    } else {
      url = `https://oddjob.herokuapp.com/jobs/${location}?keyword=${word}&offSet=${offSet}`;
    }
    async function getJobs() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setJobs([...jobs, ...data.payload]);
    }
    getJobs();
    console.log("jobs", jobs);
  }, [toggleFetch, offSet]);

  return (
    <SearchPage>
      <BackgroundImageComponent source="/gardening.jpeg" alt="gardening" />
      <PageHeaderComponent text="Search For Jobs" />
      <SearchPageBoxComponent
        locationChange={(e) => {
          setLocation(e.target.value);
        }}
        keywordChange={(value) => {
          setWord(value[0]);
        }}
        onClick={() => setToggleFetch(!toggleFetch)}
      />
      {jobs.map(
        ({ job_id, title, user_image, date, rate_of_pay, city, county }) => {
          return (
            <ListingBoxComponent
              key={job_id}
              title={title}
              source={user_image}
              address={`${city}, ${county}`}
              date={`${date.substring(0, 10)} ${date.substring(11, 16)}`}
              pay={rate_of_pay}
            />
          );
        }
      )}
      <ShowMoreButtonComponent onClick={() => setOffSet(offSet + 5)} />
    </SearchPage>
  );
}

export default SearchPageComponent;
