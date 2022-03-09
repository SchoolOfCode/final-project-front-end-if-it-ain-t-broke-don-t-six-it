import type { NextPage } from "next";

import NavBarComponent from "../components/navbar/navbar-component";

const PostJob: NextPage = () => {
  return (
    <div>
      <NavBarComponent isMenu={false} />
      <SearchPageComponent />
    </div>
  );
};

export default PostJob;
