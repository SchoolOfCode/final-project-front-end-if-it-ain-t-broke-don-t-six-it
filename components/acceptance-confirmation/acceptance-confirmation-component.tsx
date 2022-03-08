import { Username } from "../username/username-styled";
import { AcceptanceConfirmation } from "./acceptance-confirmation-styled";

type Props = {
  name: string;
  accept: boolean;
  onClick: () => void;
};

function AcceptanceConfirmationComponent({ name, accept, onClick }: Props) {
  return (
    <AcceptanceConfirmation>
      <h3 className="confirmation">
        {" "}
        Are You Sure You Wish To {accept ? "Accept" : "Reject"} {name}?{" "}
      </h3>
      <div className="button-section">
        <button onClick={onClick} className="confirm">
          Submit
        </button>
        <button onClick={onClick} className="decline">
          Cancel
        </button>
      </div>
    </AcceptanceConfirmation>
  );
}

export default AcceptanceConfirmationComponent;
