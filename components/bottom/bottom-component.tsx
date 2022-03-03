import Link from "next/link";
import ListingPayComponent from "../listing-pay/listing-pay-component";
import ViewButtonComponent from "../view-button/view-button-component";
import { Bottom } from "./bottom-styled";
import { useRouter } from "next/router";

type Props = {
  text: string;
  job_id: number;
};

function BottomComponent({ text, job_id }: Props) {
  const router = useRouter();
  return (
    <Bottom>
      <ListingPayComponent text={text} />

      <ViewButtonComponent
        onClick={() =>
          router.push({
            pathname: "/job-listing",
            query: {
              jobId: job_id,
            },
          })
        }
      />
    </Bottom>
  );
}

export default BottomComponent;
