import ButtonDivComponent from "../button-div/button-div-component";
import { SectionBox } from "./section-box-styled";
import { useUser } from "@auth0/nextjs-auth0";
import UserInfoComponent from "../user-info/user-info-component";

function SectionBoxComponent() {
  let { user } = useUser();

  return (
    <SectionBox>
      <ButtonDivComponent />
      <UserInfoComponent
        username="bob"
        bio="im great"
        source="/user-icon.png"
        rating={4}
        numberOfReviews={12}
      />
    </SectionBox>
  );
}

export default SectionBoxComponent;
