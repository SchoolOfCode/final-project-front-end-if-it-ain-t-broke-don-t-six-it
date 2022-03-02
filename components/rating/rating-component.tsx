import { Rating, NumberOfReviews } from "./rating-styled";
import { Rate } from "antd";

type Props = {
  rating: number | undefined;
  totalReviews: number | undefined;
};

function RatingComponent({ rating, totalReviews }: Props) {
  return (
    <Rating>
      <Rate disabled defaultValue={rating} allowHalf />
      <NumberOfReviews>({totalReviews})</NumberOfReviews>
    </Rating>
  );
}
export default RatingComponent;
