import BackgroundImageComponent from "../background-image/background-image-component";
import FavouriteSectionComponent from "../favourite-section/favourite-section-component";
import PageHeaderComponent from "../page-header/page-header-component";
import DashboardOptionSectionComponent from "../dashboard-option-section/dashboard-option-section-component";
import SectionBoxComponent from "../section-box/Section-box-component";
import YourJobsComponent from "../your-jobs/your-jobs-component";
import OptionSectionComponent from "../option-section/option-section-component";
import { Dashboard } from "./Dashboard-page-styled";

function DashboardComponent() {
  return (
    <Dashboard>
      <BackgroundImageComponent
        source={"/domestic-cleaning.jpg"}
        alt={"someone cleaning"}
      />
      <PageHeaderComponent text="Dashboard" />
      <SectionBoxComponent />
      <YourJobsComponent  />
      <FavouriteSectionComponent />
      <DashboardOptionSectionComponent />
    </Dashboard>
  );
}

export default DashboardComponent;
