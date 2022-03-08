import styled from "styled-components";

export const Form = styled.div`
  width: 95vw;
  margin: auto;
  align-items: center;

  .fields {
    background-color: #d7cee0;
    padding: 7px 12px 12px 12px;
    margin-bottom: 5px;
    margin-top: 13px;
    border-radius: 5px;
  }

  .no-user {
    margin: auto;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .no-user-text {
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .no-user-button {
    width: fit-content;
    margin: auto;
  }
`;
