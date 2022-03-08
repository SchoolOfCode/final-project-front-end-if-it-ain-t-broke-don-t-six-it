import ShortButtonComponent from "../short-button/short-button-component";
import { ButtonDiv } from "./button-div-styed";
import Link from "next/link";

function ButtonDivComponent() {
  return (
    <ButtonDiv>
      <Link href={"#yourJobs"} passHref>
        <ShortButtonComponent
          text="Your Jobs"
          onClick={() => {
            console.log("here");
          }}
        />
      </Link>
      <Link href={"#favouriteJobs"} passHref>
        <ShortButtonComponent
          text="Favourited Jobs"
          onClick={() => {
            console.log("here");
          }}
        />
      </Link>
      <Link href="/post-job" passHref>
        <ShortButtonComponent
          text="Post Job"
          onClick={() => {
            console.log("here");
          }}
        />
      </Link>
      <ShortButtonComponent
        text="Job History"
        onClick={() => {
          console.log("here");
        }}
      />
    </ButtonDiv>
  );
}

export default ButtonDivComponent;
