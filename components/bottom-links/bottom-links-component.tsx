import { BottomLinks } from "./bottom-links-styled";
import Link from "next/link";
import SmallButtonComponent from "../small-button/small-button-component";

function BottomLinksComponent() {
  return (
    <BottomLinks>
      <Link href="/comm-guidlines">
        <a>
          <SmallButtonComponent text="Community Guidelines" />
        </a>
      </Link>
      <Link href="/t-and-cs">
        <a>
          <SmallButtonComponent text="Terms & Conditions" />
        </a>
      </Link>
    </BottomLinks>
  );
}

export default BottomLinksComponent;
