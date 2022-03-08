import { ApplicantButtons } from "./applicant-buttons-styled";

type Props = {
  setAccept: (e: boolean) => void;
  setReject: (e: boolean) => void;
  accept: boolean;
  reject: boolean;
};

function ApplicantButtonsComponent({
  setAccept,
  setReject,
  accept,
  reject,
}: Props) {
  return (
    <ApplicantButtons>
      <button
        disabled={accept || reject}
        onClick={() => {
          setAccept(true);
        }}
        className="tick"
      >
        ✔︎
      </button>
      <button
        disabled={accept || reject}
        onClick={() => {
          setReject(true);
        }}
        className="cross"
      >
        X
      </button>
    </ApplicantButtons>
  );
}

export default ApplicantButtonsComponent;
