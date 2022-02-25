import styled from "styled-components";

export const ShowMoreButton = styled.button`
  border: none;
  font-size: 20px;
  background-color: white;
  color: #33032f;
  width: 150px;
  height: 35px;
  margin: auto;
  margin-left: 105px;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  &:active {
    background-color: grey;
    transform: translateY(1px);
  }
`;
