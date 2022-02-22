import BackgroundImageComponent from "../background-image/background-image-component";
import SearchBoxComponent from "../search-box/search-box-component";
import { LandingPage } from "./landing-page-styled";

function LandingPageComponent(){
    return <LandingPage>
        <BackgroundImageComponent source="/delivery-driver.jpg" alt="delivery-driver"/>
        <SearchBoxComponent/>
    </LandingPage>
}
export default LandingPageComponent;