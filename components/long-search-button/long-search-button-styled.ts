import styled from "styled-components";

export const LongSearchButton = styled.button`
  font-size: 20px;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px 0px;
  border-radius: 5px;
  margin: auto;
  background-color: #9a348e;
  width: 91%;
  margin-bottom: 10px;
  height: 30px;
  &:active {
    background-color: #0f010e;
    transform: translateY(0.5px);
  }
`;
