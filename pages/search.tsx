import type { NextPage } from "next";
import Head from "next/head";
import NavBarComponent from "../components/navbar/navbar-component";
import SearchPageComponent from "../components/search-page/search-page-component";

const PostJob: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Odd Job</title>
        <meta name="description" content="Generated by Odd Job" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarComponent isMenu={false} />
      <SearchPageComponent />
    </div>
  );
};

export default PostJob;
