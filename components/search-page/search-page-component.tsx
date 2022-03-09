import BackgroundImageComponent from "../background-image/background-image-component";
import ListingBoxComponent from "../listing-box/listing-box-component";
import PageHeaderComponent from "../page-header/page-header-component";
import SearchPageBoxComponent from "../search-page-box/search-page-box-component";
import { SearchPage } from "./search-page-styled";
import { useEffect, useState } from "react";
import ShowMoreButtonComponent from "../show-more-button/show-more-button-component";
import { useRouter } from "next/router";
import ErrorTextComponent from "../error-text/error-text-component";

type Props = {
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

function SearchPageComponent() {
  const [toggleFetch, setToggleFetch] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);
  const [offSet, setOffSet] = useState(0);
  const [location, setLocation] = useState<string | string[] | undefined>("");
  const [word, setWord] = useState<string | string[] | undefined | number>("");
  const [count, setCount] = useState(0);
  const router = useRouter();

  console.log(router.query);

  function sorting(arr: Props) {
    let existingJobIds = jobs.map((obj) => {
      return obj.job_id;
    });
    let sortedArr = arr.filter((obj) => {
      let found = existingJobIds.indexOf(obj.job_id);
      if (found === -1) {
        return true;
      } else {
        return false;
      }
    });
    return sortedArr;
  }

  // if (typeof router.query.location !== "undefined") {
  //   while (count < 1) {
  //     setCount(count + 1);
  //   }
  // }

  useEffect(() => {
    if (typeof router.query.location !== "undefined") {
      setLocation(router.query.location);
      setWord(router.query.word);
      setCount(1);
    }

    let url: string;
    if (location === "" && word === "") {
      url = `https://oddjob.herokuapp.com/jobs?ffSet=${offSet}`;
    } else if (location === "") {
      url = `https://oddjob.herokuapp.com/jobs/?keyword=${word}&offSet=${offSet}`;
    } else if (word === "") {
      url = `https://oddjob.herokuapp.com/jobs/${location}?offSet=${offSet}`;
    } else {
      url = `https://oddjob.herokuapp.com/jobs/${location}?keyword=${word}&offSet=${offSet}`;
    }
    async function getJobs() {
      const response = await fetch(url);
      const data = await response.json();
      let sortedData = sorting(data.payload);
      setJobs([...jobs, ...sortedData]);
    }
    getJobs();
  }, [toggleFetch, offSet, count]);

  useEffect(() => {
    setJobs([]);
  }, [word, location]);

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
      {jobs.length === 0 && (
        <ErrorTextComponent text="Sorry, no results have been found" />
      )}
      {jobs.map(
        ({ job_id, title, user_image, date, rate_of_pay, city, county, user_id }) => {
          return (
            <ListingBoxComponent
              key={job_id}
              job_id={job_id}
              title={title}
              source={user_image}
              address={`${city}, ${county}`}
              date={`${date.substring(0, 10)} ${date.substring(11, 16)}`}
              pay={rate_of_pay}
              user_id={user_id}
            />
          );
        }
      )}

      {jobs.length !== 0 && (
        <ShowMoreButtonComponent onClick={() => setOffSet(offSet + 5)} />
      )}
    </SearchPage>
  );
}

export default SearchPageComponent;
