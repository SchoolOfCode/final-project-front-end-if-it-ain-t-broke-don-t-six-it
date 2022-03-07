import { Sliderimage, Container } from "./sliderimage-styled";

type Props = {
  image: string;
  altDes: string;
  content: string;
};

function SliderimageComponent({ image, altDes, content }: Props) {
  return (
    <Container>
      <Sliderimage src={image} alt={altDes} />
      <div className="text">{content}</div>
    </Container>
  );
}

export default SliderimageComponent;
