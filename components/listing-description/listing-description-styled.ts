import styled from "styled-components";

type Props = {
  isHeader: boolean;
};

export const ListingDescription = styled.p<Props>`
  background-color: ${(props) =>
    props.isHeader ? "#EFEFEF" : `rgba(248, 248, 248, 0.7)`};
  padding: 4px;

  margin: 0;
  margin-top: ${(props) => (props.isHeader ? "10px" : `0`)}; ;
`;
