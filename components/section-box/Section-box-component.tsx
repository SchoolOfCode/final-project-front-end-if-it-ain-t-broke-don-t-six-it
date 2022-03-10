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
        username={user?.name}
        bio="I'm Awesome!"
        source={user?.picture}
        rating={5}
        numberOfReviews={27}
      />
    </SectionBox>
  );
}

export default SectionBoxComponent;
