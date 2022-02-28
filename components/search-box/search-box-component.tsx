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
      <SearchFilterComponent
        filterWord="Location:"
        onChange={(e) => setLocation(e.target.value)}
      />
      <SearchFilterComponent
        filterWord="Keywords:"
        onChange={(e) => setKeywords(e.target.value)}
      />
      <LongButtonComponent
        text="Find New Jobs"
        onClick={() => router.push("/search")}
      />
    </SearchBox>
  );
}

export default SearchBoxComponent;
