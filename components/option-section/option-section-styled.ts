import styled from "styled-components";

export const OptionSection = styled.section`
  bottom: 0;
  width: 100%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 10px -2px 15px;
  background-color: white;

  .flex-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 95vw;
  }

  .short-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .positionfixed {
    position: fixed;
  }
  .positionnotfixed {
    position: none;
  }
`;
