import BioComponent from "../Bio/bio-component";
import RatingComponent from "../rating/rating-component";

import UserImageComponent from "../user-image/user-image-component";
import UsernameComponent from "../username/username-component";
import { UserInfo } from "./user-info-styled";

type Props = {
  username: string;
  bio: string;
  rating: number;
  numberOfReviews: number;
  source: string;
};
function UserInfoComponent({
  username,
  bio,
  source,
  rating,
  numberOfReviews,
}: Props) {
  return (
    <UserInfo>
      <UserImageComponent source={source} username={username} />;
      <UsernameComponent username={username} />
      <RatingComponent rating={rating} totalReviews={numberOfReviews} />
      <BioComponent text={bio} />
    </UserInfo>
  );
}

export default UserInfoComponent;
