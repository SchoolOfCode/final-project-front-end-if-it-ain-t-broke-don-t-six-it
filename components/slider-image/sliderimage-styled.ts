import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 60px;
  z-index: -1;

  .text {
    position: absolute;
    text-align: center;
    top: 10px;
    left: 3%;
    right: 3%;
    color: white;
    font-size: 25px;
    background-color: rgba(0, 0, 0, 0.4);
    /* transform: translate(-50%, -50%); */
  }
`;

export const Sliderimage = styled.img`
  opacity: 0.6;
  z-index: -1;
  height: 350px;
  width: 100vw;
  object-fit: cover;
`;
