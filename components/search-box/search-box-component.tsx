import Link from "Next/link";
import { useState } from "react";
import LongButtonComponent from "../long-button/long-button-component";
import SearchFilterComponent from "../search-filter/search-filter-component";
import { SearchBox } from "./search-box-styled";

function SearchBoxComponent() {
  const [location, setLocation] = useState("");
  const [keywords, setKeywords] = useState("");

  function handleSearch() {
    console.log(location, keywords);
  }
  return (
    <SearchBox>
      <SearchFilterComponent filterWord="Location:" onChange={setLocation} />
      <SearchFilterComponent filterWord="Keywords:" onChange={setKeywords} />
      <Link href="/search">
        <a>
          <LongButtonComponent text="Search" onClick={handleSearch} />
        </a>
        
      </Link>
    </SearchBox>
  );
}

export default SearchBoxComponent;

