import React from "react";
import styled from "styled-components";

const BottomFooter = styled.div`
  background-color: #5F9EA0;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  bottom: 0;
  padding: 0.3rem;
  position: absolute;
`;

const Footer = () => {
  return (
    <BottomFooter>
      <p>Property Price Tracker</p>
    </BottomFooter>
  );
};

export default Footer;
