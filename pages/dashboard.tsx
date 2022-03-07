import type { NextPage } from "next";
import DashboardComponent from "../components/dashboard-page/Dashboard-page-component";
import NavBarComponent from "../components/navbar/navbar-component";

const Dashboard: NextPage = () => {
  return (
    <div>
      <NavBarComponent isMenu={false} />
      <DashboardComponent />
    </div>
  );
};

export default Dashboard;
