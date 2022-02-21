import { PageHeader } from "./page-header-styled";

type Props = {
  text: string;
};

function PageHeaderComponent({ text }: Props) {
  return <PageHeader>{text}</PageHeader>;
}

export default PageHeaderComponent;
