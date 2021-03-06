import React from "react";
import styled from "@emotion/styled";
import Proptype from "prop-types";

const ContentHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffff;
`;
const ContentHuno = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <ContentHeader>
      <ContentHuno>{title}</ContentHuno>
    </ContentHeader>
  );
};
Header.prototype = {
  title: Proptype.string.isRequired,
};
export default Header;
