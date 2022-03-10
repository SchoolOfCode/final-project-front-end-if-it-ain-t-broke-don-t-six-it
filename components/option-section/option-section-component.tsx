import LongButtonComponent from "../long-button/long-button-component";
import ShortButtonComponent from "../short-button/short-button-component";
import { OptionSection } from "./option-section-styled";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

type Props = {
  applyClick: () => void;
  longButtonText: string;
  firstShortButtonText: string;
  secondShortButtonText: string;
  position?: boolean;
  posterId: string | string[] | undefined;
};

function OptionSectionComponent({
  applyClick,
  longButtonText,
  firstShortButtonText,
  secondShortButtonText,
  position,
  posterId,
}: Props) {
  const { user } = useUser();

  return (
    <OptionSection>
      <div className={"flex-container"}>
        {user && (
          <>
            {posterId === "false" ? (
              <>
                <LongButtonComponent text="Apply" onClick={applyClick} />
                <div className="short-buttons">
                  {/* if more time, the contact button would be disabled until poster is approved */}
                  <a className="mailto" href="mailto:someone@example.com">
                    <ShortButtonComponent text="Contact" onClick={() => {}} />
                  </a>
                  <Link href="/dashboard">
                    <a>
                      <ShortButtonComponent
                        text="Dashboard"
                        onClick={() => {}}
                      />
                    </a>
                  </Link>
                </div>
              </>
            ) : (
              <div>
                <LongButtonComponent text="Edit" onClick={() => {}} />
                <LongButtonComponent text="Delete" onClick={() => {}} />
              </div>
            )}
          </>
        )}
        {!user && (
          <Link href="/api/auth/login">
            <a>
              <LongButtonComponent
                text={longButtonText}
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
