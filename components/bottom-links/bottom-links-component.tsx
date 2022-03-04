import { BottomLinks } from "./bottom-links-styled";
import Link from "next/link";
import SmallButtonComponent from "../small-button/small-button-component";

function BottomLinksComponent() {
  return (
    <BottomLinks>
      <Link href="/comm-guidlines">
        <a>
          <SmallButtonComponent
            text="Community Guidelines"
            onClick={() => {
              console.log("Comm guidlines");
            }}
          />
        </a>
      </Link>
      <Link href="/t-and-cs">
        <a>
          <SmallButtonComponent
            text="Terms & Conditions"
            onClick={() => {
              console.log("T&Cs");
            }}
          />
        </a>
      </Link>
    </BottomLinks>
  );
}

export default BottomLinksComponent;
