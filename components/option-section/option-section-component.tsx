import LongButtonComponent from "../long-button/long-button-component";
import ShortButtonComponent from "../short-button/short-button-component";
import { OptionSection } from "./option-section-styled";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

type Props = {
  applyClick: () => void;
};

function OptionSectionComponent({ applyClick }: Props) {
  const { user } = useUser();

  return (
    <OptionSection>
      <div className="flex-container">
        {user && (
          <>
            <LongButtonComponent text="Apply" onClick={applyClick} />
            <div className="short-buttons">
              <ShortButtonComponent text="Contact" onClick={() => {}} />
              <ShortButtonComponent text="Dashboard" onClick={() => {}} />
            </div>
          </>
        )}
        {!user && (
          <Link href="/api/auth/login">
            <a>
              <LongButtonComponent
                text="Log In to Apply"
                onClick={() => {
                  console.log("log in to apply");
                }}
              />
            </a>
          </Link>
        )}
      </div>
    </OptionSection>
  );
}

export default OptionSectionComponent;
