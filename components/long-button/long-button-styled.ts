import styled from "styled-components";

export const LongButton = styled.button`
  margin: 15px;
  height: 35px;
  background-color: #33032f;
  width: 90%;
  font-size: 20px;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px 0px;
  border-radius: 5px;
  
  &:active {
    background-color: #0f010e;
    transform: translateY(0.5px);
  }
`;
