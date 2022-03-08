import styled from "styled-components";

export const LandingPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;

  .listing-container {
    margin-top: 355px;
  }
`;

export const AboutSection = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 20px;
  width: 90%;
  height: 200px;
`;
