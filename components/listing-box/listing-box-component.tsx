import { ListingBox } from "./listing-box-styled";
import TopComponent from "../top/top-component";
import ListingLocationComponent from "../listing-location/listing-location-component";
import ListingDnTComponent from "../listing-dnt/listing-dnt-component";
import BottomComponent from "../bottom/bottom-component";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
const URL2 = "localhost:8080/jobs/favourites";
const URL = "https://oddjob.herokuapp.com/jobs/favourites";
type Props = {
  title: string;
  source: string | undefined | null;
  address: string;
  date: string;
  pay: string;
  job_id: number;
  user_id: string | undefined | null;
};

function ListingBoxComponent({
  title,
  source,
  address,
  date,
  pay,
  job_id,
  user_id,
}: Props) {
  const [isFavourited, setIsFavourited] =
    useState<boolean | undefined>(undefined);
  const [isFavouriteToggle, setIsFavouriteToggle] =
    useState<boolean | undefined>();
  const { user } = useUser();
  console.log(user_id);

  useEffect(() => {
    async function getFavouriteJobIds() {
      const response = await fetch(`${URL}/jobId/${user?.sub}`);
      const data = await response.json();
      console.log(data);

      setIsFavourited(data.payload.includes(job_id));
    }
    if (user) {
      getFavouriteJobIds();
    }
  }, []);

  useEffect(() => {
    async function deleteFavouriteJob() {
      const response = await fetch(`${URL}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user?.sub, jobId: job_id }),
      });
      const data = await response.json();
      console.log(data);
      setIsFavourited(false);
    }
    async function addFavouriteJob() {
      const response = await fetch(`${URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user?.sub, jobId: job_id }),
      });
      const data = await response.json();
      console.log(data);
    }
    console.log(isFavouriteToggle);
    if (isFavouriteToggle && !isFavourited) {
      addFavouriteJob();
    } else if (
      (!isFavouriteToggle && isFavouriteToggle !== undefined) ||
      (isFavourited && !isFavouriteToggle)
    ) {
      deleteFavouriteJob();
    }
  }, [isFavouriteToggle]);

  return (
    <ListingBox>
      <TopComponent
        isFavouriteToggle={isFavouriteToggle}
        setIsFavouriteToggle={setIsFavouriteToggle}
        isFavourited={isFavourited}
        text={title}
        source={source}
      />
      <ListingLocationComponent text={address} />
      <ListingDnTComponent text={date} />
      <BottomComponent job_id={job_id} text={pay} user_id={user_id} />
    </ListingBox>
  );
}
export default ListingBoxComponent;
