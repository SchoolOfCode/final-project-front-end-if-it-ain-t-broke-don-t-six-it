import styled from "styled-components";

export const AuthButton = styled.button`
  height: 30px;
  width: 70px;
  background-color: #33032f;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px 0px;
  border-radius: 5px;
  margin: auto;
  margin-right: 10px;
  margin-left: 15px;

  &:active {
    background-color: #0f010e;
    transform: translateY(0.5px);
  }
`;
