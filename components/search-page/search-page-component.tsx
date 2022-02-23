import BackgroundImageComponent from "../background-image/background-image-component";
import ListingBoxComponent from "../Listing-box/listing-box-component";
import PageHeaderComponent from "../page-header/page-header-component";
import SearchBoxComponent from "../search-box/search-box-component";
import { SearchPage } from "./search-page-styled";

function SearchPageComponent() {
  return (
    <SearchPage>
      <BackgroundImageComponent source="/gardening.jpeg" alt="gardening" />
      <PageHeaderComponent text="Search For Jobs" />
      <SearchBoxComponent />
      {/* /*filter box here*/}
      <ListingBoxComponent />
    </SearchPage>
  );
}

export default SearchPageComponent;
