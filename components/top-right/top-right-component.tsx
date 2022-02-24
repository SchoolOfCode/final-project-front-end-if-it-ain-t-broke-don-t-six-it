import FavouriteButtonComponent from "../favourite-button/favourite-button-component";
import UserImageComponent from "../user-image/user-image-component";
import { TopRight } from "./top-right-styled";

type Props = {
    source: string;
}

function TopRightComponent({source}:Props){
    return (
        <TopRight>
            <FavouriteButtonComponent />
            <UserImageComponent source={source} username="Sixit" />
        </TopRight>
    )
}

export default TopRightComponent