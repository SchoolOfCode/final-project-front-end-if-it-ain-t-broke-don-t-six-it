import type { NextPage } from "next";
import SupportPageComponent from "../components/support-page/support-page-component";

import NavBarComponent from "../components/navbar/navbar-component";

const Support: NextPage = () => {
  return (
    <div>
      <NavBarComponent isMenu={false} />
      <SupportPageComponent />
      <h1>Hello</h1>
    </div>
  );
};

export default Support;
