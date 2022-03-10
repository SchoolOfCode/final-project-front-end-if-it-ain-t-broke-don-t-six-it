import LongButtonComponent from "../long-button/long-button-component";
import ShortButtonComponent from "../short-button/short-button-component";
import { DashboardOptionSection } from "./dashboard-option-section-styled";
import Link from "next/link";

function DashboardOptionSectionComponent() {
  return (
    <DashboardOptionSection>
      <div className="flex-container">
        <Link href="/search" passHref>
          <LongButtonComponent
            text="Search For Jobs"
            onClick={() => {
              console.log("log in to apply");
            }}
          />
        </Link>

        <div className="short-buttons">
          <Link href="/api/auth/logout" passHref>
            <ShortButtonComponent
              text="Log Out"
              onClick={() => {
                console.log("Job History");
              }}
            />
          </Link>

          <Link href="post-job" passHref>
            <ShortButtonComponent
              text="Post Job"
              onClick={() => {
                console.log("post job listing");
              }}
            />
          </Link>
        </div>
      </div>
    </DashboardOptionSection>
  );
}

export default DashboardOptionSectionComponent;
