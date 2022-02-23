import { AboutBox } from "./about-box-styled";

type props = {
  title: String;
  discription: String;
};

function AboutBoxComponent({ title, discription }: props) {
  return <AboutBox></AboutBox>;
}

export default AboutBoxComponent;
