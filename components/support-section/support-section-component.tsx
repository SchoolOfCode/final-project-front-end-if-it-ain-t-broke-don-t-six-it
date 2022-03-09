import ContactUsComponent from "../contact-us-box/contact-us-box-component";
import PageHeaderComponent from "../page-header/page-header-component";
import { SupportSection } from "./support-section-styled";

function SupportSectionComponent() {
  return (
    <SupportSection>
      <PageHeaderComponent text="Support"></PageHeaderComponent>
      <ContactUsComponent />
      <FaqBoxComponent/>
    </SupportSection>
  );
}

export default SupportSectionComponent;
