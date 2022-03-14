import { NavBar } from "./navbar-styled";
import AuthButtonComponent from "../auth-button/auth-button-component";
import LogoComponent from "../logo/logo-component";
import MenuButtonComponent from "../menu-button/menu-button-component";
import UserImageComponent from "../user-image/user-image-component";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
  isMenu: boolean;
};

function NavBarComponent({ isMenu }: Props) {
  const { user } = useUser();
  const router = useRouter();

  return (
    <NavBar>
      <MenuButtonComponent
        isMenu={isMenu}
        onClick={() => {
          isMenu
            ? window.history.back()
            : router.push({
                pathname: "/menu",
              });
        }}
      />

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
            <div className="user-image">
              <UserImageComponent
                source={user.picture ? user.picture : "/user-icon"}
                username={user.name ? user.name : "generic user image"}
              />
            </div>
          </a>
        </Link>
      )}
    </NavBar>
  );
}

export default NavBarComponent;
