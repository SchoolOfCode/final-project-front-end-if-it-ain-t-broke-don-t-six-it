import PopUpButtonComponent from "../pop-up-button/pop-up-button-component";
import PopUpTextComponent from "../pop-up-text/pop-up-text-component";
import { PopUp } from "./pop-up-styled";
import { useRouter } from "next/router";

type Props = {
  toggle: () => void;
  isPosted: boolean | undefined;
  job_id: number | undefined;
  setIsRefreshed: (arg0: boolean) => void;
};

function PopUpComponent({ toggle, isPosted, job_id, setIsRefreshed }: Props) {
  const router = useRouter();
  return (
    <PopUp>
      {isPosted && (
        <div>
          <PopUpTextComponent text="Job successfully posted" />
          <div>
            <PopUpButtonComponent
              text="New Post"
              onClick={() => {
                toggle();
                setIsRefreshed(true);
                () => {
                  document.location.reload();
                };
              }}
            />
            <PopUpButtonComponent
              text="View Job"
              onClick={() => {
                toggle();
                router.push({
                  pathname: "/job-listing",
                  query: {
                    jobId: job_id,
                  },
                });
              }}
            />
          </div>
        </div>
      )}
      {!isPosted && (
        <div>
          <PopUpTextComponent text="Job unsuccessfully posted, please try again" />
        </div>
      )}
    </PopUp>
  );
}

export default PopUpComponent;
