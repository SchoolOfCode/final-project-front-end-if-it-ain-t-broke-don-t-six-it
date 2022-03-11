import ShortButtonComponent from "../short-button/short-button-component";
import { ButtonDiv } from "./button-div-styed";
import Link from "next/link";

function ButtonDivComponent() {
  return (
    <ButtonDiv>
      <div className="button-container">
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
      </div>

      <div className="button-container">
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
      </div>
    </ButtonDiv>
  );
}

export default ButtonDivComponent;
