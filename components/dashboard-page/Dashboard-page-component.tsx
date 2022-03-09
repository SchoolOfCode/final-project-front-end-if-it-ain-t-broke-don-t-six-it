import BackgroundImageComponent from "../background-image/background-image-component";
import FavouriteSectionComponent from "../favourite-section/favourite-section-component";
import PageHeaderComponent from "../page-header/page-header-component";
import DashboardOptionSectionComponent from "../dashboard-option-section/dashboard-option-section-component";
import SectionBoxComponent from "../section-box/Section-box-component";
import YourJobsComponent from "../your-jobs/your-jobs-component";
import OptionSectionComponent from "../option-section/option-section-component";
import { Dashboard } from "./Dashboard-page-styled";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import AuthButtonComponent from "../auth-button/auth-button-component";

function DashboardComponent() {
  const { user } = useUser();
  return (
    <Dashboard>
      <BackgroundImageComponent
        source={"/domestic-cleaning.jpg"}
        alt={"someone cleaning"}
      />
      <PageHeaderComponent text="Dashboard" />
      {!user && (
        <div className="no-user">
          <p className="no-user-text">Please Log In to post a job:</p>
          <div className="no-user-button">
            <Link href="/api/auth/login">
              <a>
                <AuthButtonComponent />
              </a>
            </Link>
          </div>
        </div>
      )}
      {user && (
        <>
          <SectionBoxComponent />
          <YourJobsComponent />
          <FavouriteSectionComponent />
          <DashboardOptionSectionComponent />
        </>
      )}
    </Dashboard>
  );
}

export default DashboardComponent;
