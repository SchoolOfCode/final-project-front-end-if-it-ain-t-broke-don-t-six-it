import ShortButtonComponent from "../short-button/short-button-component";
import { ButtonDiv } from "./button-div-styed";

function ButtonDivComponent() {
  return (
    <ButtonDiv>
      <ShortButtonComponent
        text="Your Jobs"
        onClick={() => {
          console.log("here");
        }}
      />
      <ShortButtonComponent
        text="Favourited Jobs"
        onClick={() => {
          console.log("here");
        }}
      />
      <ShortButtonComponent
        text="Post Job Listing"
        onClick={() => {
          console.log("here");
        }}
      />
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
