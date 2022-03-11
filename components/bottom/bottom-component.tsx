import Link from "next/link";
import ListingPayComponent from "../listing-pay/listing-pay-component";
import ViewButtonComponent from "../view-button/view-button-component";
import { Bottom } from "./bottom-styled";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
type Props = {
  text: string;
  job_id: number;
  user_id: string | undefined | null;
};

function BottomComponent({ text, job_id, user_id }: Props) {
  const { user } = useUser();
  const router = useRouter();
  let userId: string | boolean | undefined | null;
  console.log(user?.sub, user_id);
  if (user?.sub === user_id) {
    userId = user_id;
  } else {
    userId = false;
  }
  return (
    <Bottom>
      <ListingPayComponent text={text} />

      <ViewButtonComponent
        onClick={() =>
          router.push({
            pathname: "/job-listing",
            query: {
              jobId: job_id,
              userId: userId,
            },
          })
        }
      />
    </Bottom>
  );
}

export default BottomComponent;
