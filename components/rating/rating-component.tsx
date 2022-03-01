import { Rating, NumberOfReviews } from "./rating-styled";
import { Rate } from "antd";


type Props = {
  rating: number;
  totalReviews: number;
};

function RatingComponent({ rating, totalReviews }: Props) {
  return (
    <Rating>
      <Rate disabled defaultValue={rating} />
      <NumberOfReviews>({totalReviews})</NumberOfReviews>
    </Rating>
  );
}
export default RatingComponent;
