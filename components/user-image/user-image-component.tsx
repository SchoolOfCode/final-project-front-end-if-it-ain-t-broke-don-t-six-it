import { UserImage } from "./user-image-styled";

type Props = {
  source: string | undefined;
  username: string;
};

function UserImageComponent({ source, username }: Props) {
  return <UserImage src={source} alt={username} />;
}

export default UserImageComponent;
