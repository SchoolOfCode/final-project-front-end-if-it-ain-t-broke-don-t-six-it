import { ContactUs } from "./contact-us-box-styled";

function ContactUsComponent() {
  return (
    <ContactUs>
      <h1>CONTACT US</h1>
      <div className="emailDiv">
        <h3>Email: </h3>
        <h3 className="email">oddjob@gmail.com</h3>{" "}
      </div>
      <div className="phoneDiv">
        <h3>Phone: </h3>
        <h3 className="phone">01234567890</h3>{" "}
      </div>
    </ContactUs>
  );
}
export default ContactUsComponent;
