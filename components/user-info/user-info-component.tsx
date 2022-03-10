import BioComponent from "../bio/bio-component";
import RatingComponent from "../rating/rating-component";

import UserImageComponent from "../user-image/user-image-component";
import UsernameComponent from "../username/username-component";
import { UserInfo } from "./user-info-styled";

type Props = {
  username: string | undefined | null;
  bio: string | undefined;
  rating: number | undefined;
  numberOfReviews: number | undefined;
  source: string | undefined | null;
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
      <UserImageComponent source={source} username={username} />
      <UsernameComponent username={username} />
      <RatingComponent rating={rating} totalReviews={numberOfReviews} />
      <BioComponent text={bio} />
    </UserInfo>
  );
}

export default UserInfoComponent;
