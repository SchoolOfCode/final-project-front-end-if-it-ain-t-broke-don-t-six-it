import Link from "Next/link";
import { useState } from "react";
import LongButtonComponent from "../long-button/long-button-component";
import SearchFilterComponent from "../search-filter/search-filter-component";
import { SearchBox } from "./search-box-styled";
import { useRouter } from "next/router";

function SearchBoxComponent() {
  const [location, setLocation] = useState("");
  const [keywords, setKeywords] = useState("");
  const router = useRouter();

  function handleSearch() {
    console.log(location, keywords);
  }
  return (
    <SearchBox>
      <SearchFilterComponent filterWord="Location:" onChange={setLocation} />
      <SearchFilterComponent filterWord="Keywords:" onChange={setKeywords} />
      <LongButtonComponent
        text="Search"
        onClick={() => router.push("/search")}
      />
    </SearchBox>
  );
}

export default SearchBoxComponent;
