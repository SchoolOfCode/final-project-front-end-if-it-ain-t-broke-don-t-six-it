import styled from "styled-components";

export const AcceptanceConfirmation = styled.div`
  border: 0.5px solid black;
  border-radius: 5px;
  background-color: #33032f;
  padding: 5px;

  display: flex;
  justify-content: space-between;

  .confirmation {
    color: white;
    width: 70%;
  }

  .decline {
    background-color: #9a348e;
    color: white;
    border: none;
    height: 27px;
    border-radius: 5px;
    font-weight: 500;
  }

  .confirm {
    background-color: #33032f;
    color: white;
    border: 1px solid #9a348e;
    border-radius: 5px;
    font-weight: 500;
  }

  .button-section {
    border: none;
    display: flex;
    align-items: flex-end;
    gap: 0.25rem;
  }
`;
