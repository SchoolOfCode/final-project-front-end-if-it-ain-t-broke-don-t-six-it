import { useState } from "react";
import LongButtonComponent from "../long-button/long-button-component";
import SearchFilterComponent from "../search-filter/search-filter-component";
import { SearchBox } from "./search-box-styled";
import { useRouter } from "next/router";
import { SingleValueType } from "rc-cascader/lib/Cascader";

function SearchBoxComponent() {
  const [location, setLocation] = useState("");
  const [word, setWord] = useState<string | number>("");
  const router = useRouter();

  function locationChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLocation(e.target.value);
  }
  function keywordChange(value: SingleValueType) {
    setWord(value[0]);
  }

  return (
    <SearchBox>
      <SearchFilterComponent
        toggle={true}
        filterWord="Location:"
        locationChange={locationChange}
        keywordChange={keywordChange}
      />
      <SearchFilterComponent
        toggle={false}
        filterWord="Keywords:"
        locationChange={locationChange}
        keywordChange={keywordChange}
      />
      <LongButtonComponent
        text="Find New Jobs"
        onClick={() =>
          router.push({
            pathname: "/search",
            query: {
              location: `${location}`,
              word: `${word}`,
              count: 1,
            },
          })
        }
      />
    </SearchBox>
  );
}

export default SearchBoxComponent;
