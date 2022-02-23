import AboutBoxComponent from "../about-box/about-box-component";
import BackgroundImageComponent from "../background-image/background-image-component";
import SearchBoxComponent from "../search-box/search-box-component";
import { LandingPage } from "./landing-page-styled";

type Props = {
    title: String;
    description: String;
  };

function LandingPageComponent({title, description }: Props){
    return <LandingPage>
        <BackgroundImageComponent source="/delivery-driver.jpg" alt="delivery-driver"/>
        <SearchBoxComponent/>
        <AboutBoxComponent title="Benefits" description="abc"/> 
        <AboutBoxComponent title="Info" description="abc"/> 

    </LandingPage>
}
export default LandingPageComponent;