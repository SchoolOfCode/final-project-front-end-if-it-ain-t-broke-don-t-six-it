import styled from "styled-components";

interface Props {
  onClick: any;
  src: any;
  alt: any;
  isExtended: boolean;
}

export const HeartImage = styled.img<Props>`
  height: 25px;
  width: 25px;

  ${(props) =>
    props.isExtended ? `` : `margin: auto; position: relative; left: 35px;`}
`;
