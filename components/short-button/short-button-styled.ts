import styled from "styled-components";

export const ShortButton = styled.button`
  margin: 15px;
  height: 40px;
  background-color: #9a348e;
  width: 91%;
  font-size: 20px;
  color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px 0px;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 15px;
  margin-top: 10px;
  align-items: center;
  &:active {
    background-color: #0f010e;
    transform: translateY(0.5px);
  }
`;
