import styled from "styled-components";

export const JobsSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.5rem;

  padding: 0.5 rem;

  .upcoming {
    padding-left: 30px;
    padding-right: 30px;
    background-color: #b49fcc;
    color: #33032f;
    margin-top: 0.5rem;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .pending {
    padding-left: 30px;
    margin-top: 0.5rem;
    padding-right: 30px;
    background-color: #b49fcc;
    color: #33032f;
  }
  .posted {
    padding-left: 30px;
    margin-top: 0.5rem;
    padding-right: 30px;
    background-color: #b49fcc;
    color: #33032f;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .focus {
    background-color: #33032f;
    color: #b49fcc;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
