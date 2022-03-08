import { UserImage } from "./user-image-styled";

type Props = {
  source: string | undefined | null;
  username: string | undefined;
};

function UserImageComponent({ source, username }: Props) {
  return <>{source !== null && <UserImage src={source} alt={username} />});</>;
}

export default UserImageComponent;
