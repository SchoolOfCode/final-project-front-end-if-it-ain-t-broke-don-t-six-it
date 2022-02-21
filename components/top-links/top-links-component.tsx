import NavButtonComponent from "../nav-button/nav-button-component";
import { TopLinks } from "./top-links-styled";
import Link from "next/link";

function TopLinksComponent() {
  return (
    <TopLinks>
      <Link href="/">
        <a>
          <NavButtonComponent text="Home" />
        </a>
      </Link>
      <Link href="/search">
        <a>
          <NavButtonComponent text="Search" />
        </a>
      </Link>
      <Link href="/dashboard">
        <a>
          <NavButtonComponent text="Dashboard" />
        </a>
      </Link>
      <Link href="/post-job">
        <a>
          <NavButtonComponent text="Post Job Listing" />
        </a>
      </Link>
      <Link href="/support">
        <a>
          <NavButtonComponent text="Support" />
        </a>
      </Link>
    </TopLinks>
  );
}

export default TopLinksComponent;
