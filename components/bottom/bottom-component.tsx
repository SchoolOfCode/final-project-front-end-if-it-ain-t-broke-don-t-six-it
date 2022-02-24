import ListingPayComponent from "../listing-pay/listing-pay-component";
import ViewButtonComponent from "../view-button/view-button-component";
import { Bottom } from "./bottom-styled";

type Props = {
    text: number;
}

function BottomComponent({text}:Props){
    return <Bottom>
        <ListingPayComponent text={text}/>
        <ViewButtonComponent />
    </Bottom>
}

export default BottomComponent