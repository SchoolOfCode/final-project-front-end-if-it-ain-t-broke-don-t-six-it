import styled from "styled-components";

export const Slider = styled.div`
  /* display: flex;
  justify-content: space-between; */

  .arrow {
    display: flex;
    justify-content: space-between;
    margin-top: 150px;
    z-index: 1;
    /* position: absolute; */
  }
  .left-arrow {
    opacity: 0;
    color: #1d201e;
    font-size: 2rem;
    /* position: absolute; */
    left: 32px;

    /* top: 50%; */
  }
  .right-arrow {
    opacity: 0;
    color: #1d201e;
    font-size: 2rem;
    /* position: absolute; */
    /* right: 32px; */
    /* top: 50%; */
  }
`;
