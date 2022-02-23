import { AboutBoxText } from "./about-box-text-styled";

type props = {
    description: String;
   
  };
  
  function AboutBoxTextComponent({ description }: props) {
    return <AboutBoxText>
        {description}
    </AboutBoxText>;
  }
  
  export default AboutBoxTextComponent;