import { UserImage } from "./user-image-styled";

type Props = {
  source: string;
  username: string;
};

function UserImageComponent({ source, username }: Props) {
  return <UserImage src={source} alt={username} />;
}

export default UserImageComponent;
