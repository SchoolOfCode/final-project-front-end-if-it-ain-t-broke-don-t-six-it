import { SubHeader } from "./about-box-sub-header-styled";

type props = {
    title: String;
   
  };
  
  function SubHeaderComponent({ title }: props) {
    return <SubHeader>
        {title}
    </SubHeader>
  }
  
  export default SubHeaderComponent

