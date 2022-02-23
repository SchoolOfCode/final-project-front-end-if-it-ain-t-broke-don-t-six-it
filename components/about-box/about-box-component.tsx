import AboutBoxSubHeaderComponent from "../about-box-sub-header/about-box-sub-header-component";
import AboutBoxTextComponent from "../about-box-text/about-box-text-component";
import { AboutBox } from "./about-box-styled";

type Props = {
  title: String;
  description: String;
};

function AboutBoxComponent({ title, description }: Props) {
  return <AboutBox>
     <AboutBoxSubHeaderComponent title={title}/>
    <AboutBoxTextComponent description={description}/>
  </AboutBox>;
}

export default AboutBoxComponent;
