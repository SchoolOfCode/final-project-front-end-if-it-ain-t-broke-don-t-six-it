import BackgroundImageComponent from "../background-image/background-image-component";
import FormComponent from "../form/form-component";
import PageHeaderComponent from "../page-header/page-header-component";
import { PostJobPage } from "./post-job-page-styled";

function PostJobPageComponent() {
  return (
    <PostJobPage>
      <BackgroundImageComponent
        source="/domestic-cleaning.jpg"
        alt="domestic cleaner"
      />
      <PageHeaderComponent text="Post Job Listing" />
      <FormComponent />
    </PostJobPage>
  );
}

export default PostJobPageComponent;
