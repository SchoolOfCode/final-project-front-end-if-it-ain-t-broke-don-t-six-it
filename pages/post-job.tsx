import type { NextPage } from "next";
import Head from "next/head";
import MenuPageComponent from "../components/menu-page/menu-page-component";
import NavBarComponent from "../components/navbar/navbar-component";
import PostJobPageComponent from "../components/post-job-page/post-job-page-component";

const PostJob: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarComponent isMenu={false} />
      <PostJobPageComponent />
    </div>
  );
};

export default PostJob;
