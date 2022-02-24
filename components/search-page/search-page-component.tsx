import { log } from "console";
import BackgroundImageComponent from "../background-image/background-image-component";
import ListingBoxComponent from "../listing-box/listing-box-component";
import PageHeaderComponent from "../page-header/page-header-component";
import SearchBoxComponent from "../search-box/search-box-component";
import SearchPageBoxComponent from "../search-page-box/search-page-box-component";
import { SearchPage } from "./search-page-styled";

function SearchPageComponent() {

  function onClick(){
    return console.log("search");
  }

  return (
    <SearchPage>
      <BackgroundImageComponent source="/gardening.jpeg" alt="gardening" />
      <PageHeaderComponent text="Search For Jobs" />
      <SearchPageBoxComponent/>
      <ListingBoxComponent title="Job Title" source="/user-icon.png" address="Leamington Spa, Warwickshire" date="25/02/2022 14:00" pay={15} />
    </SearchPage>
  );
}

export default SearchPageComponent;
