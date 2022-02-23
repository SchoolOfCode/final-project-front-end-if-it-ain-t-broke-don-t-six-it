import { UserImage } from "./user-image-styled";

type Props = {
  source: string | null | undefined;
  username: string;
};

function UserImageComponent({ source, username }: Props) {
  return <UserImage src={source} alt={username} />;
}

export default UserImageComponent;
