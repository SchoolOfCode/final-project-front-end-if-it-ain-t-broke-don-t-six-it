import { JobsSlider } from "./jobs-slider-styled";

type Props = {
  onClick: (e: any) => void;
  focusOn: string;
};

function JobsSliderComponent({ onClick, focusOn }: Props) {
  return (
    <JobsSlider>
      <div
        className={focusOn === "Upcoming" ? "upcoming focus" : "upcoming"}
        onClick={onClick}
      >
        {" "}
        Upcoming{" "}
      </div>
      <div
        className={focusOn === "Pending" ? "pending focus" : "pending"}
        onClick={onClick}
      >
        {" "}
        Pending{" "}
      </div>
      <div
        className={focusOn === "Posted" ? "posted focus" : "posted"}
        onClick={onClick}
      >
        {" "}
        Posted
      </div>
    </JobsSlider>
  );
}

export default JobsSliderComponent;
