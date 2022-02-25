import { NavBar } from "./navbar-styled";
import AuthButtonComponent from "../auth-button/auth-button-component";
import LogoComponent from "../logo/logo-component";
import MenuButtonComponent from "../menu-button/menu-button-component";
import UserImageComponent from "../user-image/user-image-component";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

type Props = {
  isMenu: boolean;
};

function NavBarComponent({ isMenu }: Props) {
  const { user } = useUser();

  return (
    <NavBar>
      <Link href={isMenu ? "/" : "/menu"}>
        <a>
          <MenuButtonComponent isMenu={isMenu} />
        </a>
      </Link>
      <Link href="/">
        <a>
          <LogoComponent />
        </a>
      </Link>
      {!user && (
        <Link href="/api/auth/login">
          <a>
            <AuthButtonComponent />
          </a>
        </Link>
      )}
      {user && (
        <Link href="/api/auth/logout">
          <a>
            <UserImageComponent
              source={user.picture ? user.picture : "/user-icon"}
              username={user.name ? user.name : "generic user image"}
            />
          </a>
        </Link>
      )}
    </NavBar>
  );
}

export default NavBarComponent;
