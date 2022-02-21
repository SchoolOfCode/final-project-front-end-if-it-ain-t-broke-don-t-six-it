import type { NextPage } from "next";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import NavBarComponent from "../components/navbar/navbar-component";

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarComponent isMenu={false} />
    </div>
  );
};

export default Home;
