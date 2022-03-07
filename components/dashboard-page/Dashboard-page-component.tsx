import BackgroundImageComponent from "../background-image/background-image-component";
import PageHeaderComponent from "../page-header/page-header-component";
import SectionBoxComponent from "../section-box/Section-box-component";
import YourJobsComponent from "../your-jobs/your-jobs-component";
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
      <YourJobsComponent />
    </Dashboard>
  );
}

export default DashboardComponent;
