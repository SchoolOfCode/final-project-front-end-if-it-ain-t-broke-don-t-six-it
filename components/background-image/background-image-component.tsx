import { BackgroundImage } from "./background-image-styled";

type Props = {
  source: string;
  alt: string;
};

function BackgroundImageComponent({ source, alt }: Props) {
  return <BackgroundImage src={source} alt={alt} />;
}

export default BackgroundImageComponent;
