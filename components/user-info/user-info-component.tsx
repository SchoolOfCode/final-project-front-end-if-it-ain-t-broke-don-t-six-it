import RatingComponent from "../rating/rating-component";
import UserImageComponent from "../user-image/user-image-component";
import UsernameComponent from "../username/username-component";
import { UserInfo } from "./user-info-styled";

function UserInfoComponent() {
  return;
  <UserInfo>
    <UserImageComponent />;
    <UsernameComponent />
    <RatingComponent rating={4.3} totalReviews={15} />
  </UserInfo>;
}

export default UserInfoComponent;
