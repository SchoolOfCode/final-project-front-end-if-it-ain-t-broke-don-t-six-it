import AboutBoxSubHeaderComponent from "../about-box-sub-header/about-box-sub-header-component";
import AboutBoxTextComponent from "../about-box-text/about-box-text-component";
import { AboutBox } from "./about-box-styled";

type Props = {
  title: String;
};

function AboutBoxComponent({ title }: Props) {
  return (
    <AboutBox>
      <AboutBoxSubHeaderComponent title={title} />
    </AboutBox>
  );
}

export default AboutBoxComponent;
