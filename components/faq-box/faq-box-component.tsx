import { FaqBox } from "./faq-box-styled";
function FaqBoxComponent() {
  return (
    <FaqBox>
      <h1 className="faqHeader">FAQ</h1>
      <div className="questionBox">
        <h3>Do I need to pay to use the app?</h3>
        <p>∨</p>
      </div>
      <div className="questionBox">
        <h3>How do I delete my account?</h3>
        <p>∨</p>
      </div>
      <div className="questionBox">
        <h3>Where are you based?</h3>
        <p>∨</p>
      </div>
      <div className="questionBox">
        <h3>How do I get paid?</h3>
        <p>∨</p>
      </div>
      <div className="questionBox">
        <h3>How do I report a user?</h3>
        <p>∨</p>
      </div>
    </FaqBox>
  );
}

export default FaqBoxComponent;
