import { Username } from "./username-styled";
type Props = {
  username: string | undefined;
};

function UsernameComponent({ username }: Props) {
  return <Username>{username}</Username>;
}

export default UsernameComponent;
